import { ITrack } from "agora-rtc-sdk-ng";
import React, { useEffect, useRef } from "react";
import { StyledVideo } from "./elements";

interface VideoProps {
  tracks?: (ITrack | undefined)[];
}
const Video: React.FC<VideoProps> = ({ tracks }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!videoRef.current || !tracks) {
      return;
    }
    const stream = new MediaStream();
    tracks.forEach(
      (track) => track && stream.addTrack(track.getMediaStreamTrack())
    );
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  }, [videoRef, tracks]);
  return <StyledVideo ref={videoRef} width="200" height="200" />;
};

export default Video;
