import React from "react";
import classNames from "classnames";
import Icon, { IconName } from "components/icon";
import styles from "../projects.module.scss";
import sharedStyles from "styles/shared.module.scss";
import { Category } from "types/projects.types";

const ProjectTag = ({
  iconName,
  text,
  tag,
}: {
  iconName: IconName;
  text: string;
  tag: Category;
}) => (
  <li
    className={classNames(styles.projectTag, styles[tag])}
    data-tooltip={text}
  >
    <Icon name={iconName} />
    <span className={sharedStyles.srOnly}>{text}</span>
  </li>
);

export default ProjectTag;
