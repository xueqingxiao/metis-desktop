import React from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "react-use";
import { AgoraProvider } from "../../agora-sdk";
import { fetchSession } from "../../service/api";
import RTC from "../../container/RTC";
import Whiteboard from "../../container/Whiteboard";
import {
  Action,
  Root,
  RtcContainer,
  SessionActionBar,
  WhiteboardContainer,
} from "./elements";
import Off from "../../icons/Off";
import AddUser from "../../icons/AddUser";
import copy from "copy-to-clipboard";
import { message } from "antd";

const Session: React.FC = () => {
  const { uid } = useParams<{ uid: string }>();
  const session = useAsync(() => fetchSession(uid));
  const handleInvite = () => {
    copy(`${window.location.origin}/${session.value?.data.id}`);
    message.success("链接已复制！");
  };
  return (
    <AgoraProvider config={{ codec: "vp8", mode: "rtc" }}>
      <Root>
        <RtcContainer>
          <RTC session={session.value?.data.agora} />
        </RtcContainer>
        <WhiteboardContainer>
          <Whiteboard session={session.value?.data.netless} />
        </WhiteboardContainer>
      </Root>
      <SessionActionBar>
        <Action onClick={handleInvite}>
          <AddUser />
        </Action>
        <Action>
          <Off />
        </Action>
      </SessionActionBar>
    </AgoraProvider>
  );
};

export default Session;
