import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const RtcContainer = styled.div`
  height: 100%;
  width: 200px;
  background-color: #fff;
`;

export const WhiteboardContainer = styled.div`
  height: 100%;
  width: calc(100vw - 200px);
`;

export const SessionActionBar = styled.div`
  position: absolute;
  top: 6px;
  right: 4px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  background-color: #fff;
`;

export const Action = styled.span`
  cursor: pointer;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a2a7ad;
`;