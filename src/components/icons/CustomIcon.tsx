import React from "react";
import { Icon } from "@iconify/react";

type IconProps = {
  icon: string;
  width?: string;
  height?: string;
  color?: string;
};

export default function CustomIcon({
  icon,
  width = "1.2rem",
  height = "1.2rem",
  color = "black",
}: IconProps) {
  return (
    <Icon icon={icon} width={width} height={height} style={{ color: color }} />
  );
}
