import React, { useEffect, useState } from "react";
import {
  WhiteWebSdk,
  RoomWhiteboard,
  Room,
  ApplianceNames,
  PPTKind,
} from "white-react-sdk";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import Folder from "../../icons/Folder";
import { NetlessSession, ossClient } from "../../service/api";
import { Root, Tool, Toolbar, Tools, Upload } from "./elements";
import Toolkit from "./Toolkit";
import { message } from "antd";

const Whiteboard: React.FC<{ session?: NetlessSession }> = ({ session }) => {
  const [room, setRoom] = useState<Room>();
  const [whiteSdk, setWhiteSdk] = useState<WhiteWebSdk>();
  const [activeTool, setActiveTool] = useState<ApplianceNames>(
    ApplianceNames.selector
  );
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    if (!session) {
      return;
    }
    setWhiteSdk(new WhiteWebSdk({ appIdentifier: session.appIdentifier }));
  }, [setWhiteSdk, session]);
  useEffect(() => {
    if (!session || !whiteSdk) {
      return;
    }
    whiteSdk
      .joinRoom({
        uuid: session.uuid,
        roomToken: session.token,
        isWritable: true,
      })
      .then((room) => setRoom(room));
  }, [whiteSdk, session]);
  useEffect(() => {
    room?.setMemberState({ currentApplianceName: activeTool });
  }, [room, activeTool]);

  useEffect(() => {
    if (!room) {
      return;
    }
    const { scenes } = room.state.sceneState;
    if (scenes.length === 0 || scenes[sceneIndex].name === "init") {
      return;
    }
    room.setScenePath(`/ppt/${scenes[sceneIndex].name}`);
  }, [sceneIndex, room]);

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (!event.currentTarget.files || !session) {
      return;
    }
    const hide = message.loading("文档转换中......", 0);
    const file = event.currentTarget.files[0];
    const resp = await ossClient.multipartUpload(file.name, file, {});
    const converter = whiteSdk?.pptConverter(session.token);
    converter
      ?.convert({
        url: `https://49-poc.oss-cn-hangzhou.aliyuncs.com/${resp.name}`,
        kind: PPTKind.Dynamic,
      })
      .then(({ scenes }) => {
        room?.putScenes(`/ppt`, scenes);
        room?.setScenePath(`/ppt/${scenes[sceneIndex].name}`);
        hide();
      });
  };
  const { scenes = [] } = room?.state.sceneState ?? {};
  return room ? (
    <Root>
      <RoomWhiteboard
        style={{
          height: "100%",
          width: "100%",
        }}
        room={room}
      />
      <Tools>
        <Toolkit
          tool={activeTool}
          onToolChange={(tool) => setActiveTool(tool)}
        />
        <Toolbar>
          <Tool
            onClick={() => sceneIndex !== 0 && setSceneIndex(sceneIndex - 1)}
          >
            <ArrowLeft />
          </Tool>
          <Tool
            onClick={() => {
              if (sceneIndex === scenes.length - 1) {
                return;
              }
              setSceneIndex(sceneIndex + 1);
            }}
          >
            <ArrowRight />
          </Tool>
          {session?.role === "admin" ? (
            <Tool>
              <Upload>
                <span>
                  <Folder />
                </span>
                <input
                  type="file"
                  accept="application/vnd.openxmlformats-officedocument.presentationml.presentation"
                  onChange={handleFileChange}
                />
              </Upload>
            </Tool>
          ) : null}
        </Toolbar>
      </Tools>
    </Root>
  ) : null;
};

export default Whiteboard;
