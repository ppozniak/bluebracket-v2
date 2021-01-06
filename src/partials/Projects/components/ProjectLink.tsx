import React, { MouseEvent } from "react";
import classNames from "classnames";
import Icon, { IconName } from "components/Icon";
import styles from "../Projects.module.scss";
import sharedStyles from "styles/shared.module.scss";

// @TODO: Maybe can be unified with ProjectTag?
const ProjectLink = ({
  href,
  iconName,
  text,
  className,
}: {
  href: string;
  iconName: IconName;
  text: string;
  className?: string;
}) => (
  <li className={styles.projectLinkItem}>
    <a
      className={classNames(styles.projectLink, styles.projectTag, className)}
      data-tooltip={text}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={iconName} />
      <span className={sharedStyles.srOnly}>{text}</span>
    </a>
  </li>
);

export const ViewInfoButton = ({
  onClick,
}: {
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) => (
  <li className={styles.projectLinkItem}>
    <button
      className={classNames(styles.projectLink, styles.projectTag, styles.info)}
      data-tooltip="More info"
      onClick={onClick}
    >
      <Icon name="info" />
      <span className={sharedStyles.srOnly}>View details</span>
    </button>
  </li>
);

export default ProjectLink;
