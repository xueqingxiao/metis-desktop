import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 6px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Tool = styled.span<{ active?: boolean }>`
  cursor: pointer;
  color: ${(props) => (!props.active ? "#a2a7ad" : "#222")};
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tools = styled.div`
  position: absolute;
  bottom: 6px;
  left: 4px;
  right: 4px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

export const Upload = styled.span`
  position: relative;
  height: 32px;
  width: 32px;
  > input {
    opacity: 0;
  }
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > span,
  input {
    height: 32px;
    width: 32px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
