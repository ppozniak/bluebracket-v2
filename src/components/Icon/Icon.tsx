import React from "react";
import classNames from "classnames";
import { iconList } from "./iconList";
import { IconName } from "./Icon.types";
import styles from "./Icon.module.scss";

type Props = {
  name: IconName;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({
  name,
  className: classNameProp,
  style: styleProp = {},
  ...otherProps
}: Props) => {
  const className = classNames(styles.icon, classNameProp);
  const iconComponent = iconList[name];
  if (!iconComponent) {
    console.warn(`Icon ${name} not found.`);
    return null;
  }
  return React.cloneElement(iconComponent, {
    className,
    ["data-name"]: name,
    ...otherProps,
  });
};

export default Icon;
