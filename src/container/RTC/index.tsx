import {
  IAgoraRTCRemoteUser,
  // ICameraVideoTrack,
  IRemoteTrack,
} from "agora-rtc-sdk-ng";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AgoraContext,
  useJoin,
  useLocalTracks,
  usePublishTracks,
} from "../../agora-sdk";
import { Root } from "./elements";
import { AgoraSession } from "../../service/api";
import Video from "./Video";
import { message } from "antd";

const RTC: React.FC<{ session?: AgoraSession }> = ({ session }) => {
  const agora = useContext(AgoraContext);
  const history = useHistory();
  const [localTracks] = useLocalTracks();
  const [remoteTracks, setRemoteTracks] = useState<IRemoteTrack[]>([]);
  const handleTokenExpired = useCallback(() => history.replace("/"), [history]);
  const joined = useJoin(agora, session, handleTokenExpired);
  usePublishTracks(agora, localTracks, joined);

  useEffect(() => {
    if (!agora) {
      return;
    }
    agora?.on(
      "user-published",
      (user: IAgoraRTCRemoteUser, mediaType: "audio" | "video") => {
        message.info(`用户${user.uid}发布 ${mediaType} 流！`);
        agora?.subscribe(user, mediaType).then((track) => {
          setRemoteTracks([...remoteTracks, track]);
        });
      }
    );
    agora?.on("user-joined", (user) => {
      message.info(`用户${user.uid}加入教室！`);
    });
    agora?.on("user-left", (user) => {
      message.info(`用户${user.uid}离开教室！`);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agora]);
  // useEffect(() => {
  //   agora?.on("network-quality", (stats) => {
  //     const videoTracks = localTracks?.filter(
  //       (track) => track.trackMediaType === "video"
  //     ) as ICameraVideoTrack[] | undefined;
  //     console.log('network-quality', stats);
  //     switch (stats.uplinkNetworkQuality) {
  //       case 1:
  //         videoTracks?.forEach((track) =>
  //           track.setEncoderConfiguration("1080p")
  //         );
  //         break;
  //       case 2:
  //         videoTracks?.forEach((track) => track.setEncoderConfiguration("720p"));
  //         break;
  //       case 3:
  //         videoTracks?.forEach((track) => track.setEncoderConfiguration({
  //           height: 480,
  //           width: 854,
  //           frameRate: 15,
  //         }));
  //         break;
  //       case 4:
  //       case 5:
  //         videoTracks?.forEach((track) => track.setEncoderConfiguration({
  //           height: 360,
  //           width: 640,
  //           frameRate: 15,
  //         }));
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }, [agora, localTracks, remoteTracks]);
  return (
    <Root>
      <Video tracks={localTracks} />
      {agora?.remoteUsers.map((user) => (
        <Video key={user.uid} tracks={[user.audioTrack, user.videoTrack]} />
      ))}
    </Root>
  );
};

export default RTC;
