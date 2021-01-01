import React from "react";
import { iconList } from "./iconList";
import { IconName } from "./Icon.types";

type Props = {
  name: IconName;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ name, ...otherProps }: Props) => {
  const iconComponent = iconList[name];
  if (!iconComponent) {
    console.warn(`Icon ${name} not found.`);
    return null;
  }
  return React.cloneElement(iconComponent, otherProps);
};

export default Icon;
