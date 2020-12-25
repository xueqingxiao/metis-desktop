import { IAgoraRTCRemoteUser } from "agora-rtc-sdk-ng";
import React, { useEffect, useRef } from "react";

const RemoteVideo: React.FC<{ user: IAgoraRTCRemoteUser }> = ({ user }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const mediaStream = new MediaStream();
    if (user.audioTrack) {
      mediaStream.addTrack(user.audioTrack.getMediaStreamTrack());
    }
    if (user.videoTrack) {
      mediaStream.addTrack(user.videoTrack.getMediaStreamTrack());
    }
    videoRef.current.srcObject = mediaStream;
    videoRef.current.play();
  }, [videoRef, user]);
  
  return <video height="200" width="200" ref={videoRef} />;
};

export default RemoteVideo;
