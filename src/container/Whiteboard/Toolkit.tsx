import React from "react";
import { Tool, Toolbar } from "./elements";
import Arrow from "../../icons/Arrow";
import CursorPointer from "../../icons/CursorPointer";
import Pencil from "../../icons/Pencil";
import Text from "../../icons/Text";
import Eraser from "../../icons/Eraser";
import Ellipse from "../../icons/Ellipse";
import Rectangle from "../../icons/Rectangle";
import Line from "../../icons/Line";
import LaserPointer from "../../icons/LaserPointer";
import { ApplianceNames } from "white-react-sdk";

interface ToolkitProps {
  tool: ApplianceNames;
  onToolChange: (tool: ApplianceNames) => void;
}

const Toolkit: React.FC<ToolkitProps> = ({ tool, onToolChange }) => {
  return (
    <Toolbar>
      <Tool
        active={tool === ApplianceNames.selector}
        onClick={() => onToolChange(ApplianceNames.selector)}
      >
        <CursorPointer />
      </Tool>
      <Tool
        active={tool === ApplianceNames.pencil}
        onClick={() => onToolChange(ApplianceNames.pencil)}
      >
        <Pencil />
      </Tool>
      <Tool
        active={tool === ApplianceNames.text}
        onClick={() => onToolChange(ApplianceNames.text)}
      >
        <Text />
      </Tool>
      <Tool
        active={tool === ApplianceNames.eraser}
        onClick={() => onToolChange(ApplianceNames.eraser)}
      >
        <Eraser />
      </Tool>
      <Tool
        active={tool === ApplianceNames.ellipse}
        onClick={() => onToolChange(ApplianceNames.ellipse)}
      >
        <Ellipse />
      </Tool>
      <Tool
        active={tool === ApplianceNames.rectangle}
        onClick={() => onToolChange(ApplianceNames.rectangle)}
      >
        <Rectangle />
      </Tool>
      <Tool
        active={tool === ApplianceNames.straight}
        onClick={() => onToolChange(ApplianceNames.straight)}
      >
        <Line />
      </Tool>
      <Tool
        active={tool === ApplianceNames.arrow}
        onClick={() => onToolChange(ApplianceNames.arrow)}
      >
        <Arrow />
      </Tool>
      <Tool
        active={tool === ApplianceNames.laserPointer}
        onClick={() => onToolChange(ApplianceNames.laserPointer)}
      >
        <LaserPointer />
      </Tool>
    </Toolbar>
  );
};

export default Toolkit;
