import React, { useEffect, useState } from "react";
import AgoraRTC, {
  IAgoraRTCClient,
  ClientConfig,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
  ILocalTrack,
} from "agora-rtc-sdk-ng";
import { AgoraSession } from "./service/api";

export const AgoraContext = React.createContext<IAgoraRTCClient | null>(null);

export const AgoraProvider: React.FC<{ config: ClientConfig }> = ({
  children,
  config,
}) => {
  const client = AgoraRTC.createClient(config);
  return (
    <AgoraContext.Provider value={client}>{children}</AgoraContext.Provider>
  );
};

export const AgoraConsumer = AgoraContext.Consumer;

export const useLocalTracks = () => {
  const [localTracks, setLocalTracks] = useState<
    [IMicrophoneAudioTrack, ICameraVideoTrack] | undefined
  >(undefined);

  useEffect(() => {
    AgoraRTC.createMicrophoneAndCameraTracks(
      {},
      {
        encoderConfig: { height: 620, width: 1280 },
      }
    ).then((tracks) => {
      setLocalTracks(tracks);
    });
  }, [setLocalTracks]);

  return [localTracks];
};

export const useJoin = (
  agora: IAgoraRTCClient | null,
  session?: AgoraSession,
  onTokenExpired?: () => void
) => {
  const [joined, setJoined] = useState<boolean>(false);
  useEffect(() => {
    if (!agora || !session) {
      return;
    }
    agora
      .join(session.appId, session.channel, session.token, session.uid)
      .then(() => setJoined(true))
      .catch(() => {
        onTokenExpired && onTokenExpired();
        setJoined(false);
      });
  }, [agora, session, onTokenExpired]);
  return joined;
};

export const usePublishTracks = (
  agora: IAgoraRTCClient | null,
  tracks?: ILocalTrack[],
  joined?: boolean
) => {
  useEffect(() => {
    if (!agora || !tracks || !joined) {
      return;
    }
    agora.publish(tracks);
  }, [agora, tracks, joined]);
};
