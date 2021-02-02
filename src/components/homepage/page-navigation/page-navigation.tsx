import React from "react";
import Icon, { IconName } from "components/icon";
import styles from "./page-navigation.module.scss";

export type Section = {
  id: string;
  name: string;
  iconName: IconName;
};

const PageNavigation = ({ sections }: { sections: Section[] }) => {
  return (
    <nav className={styles.pageNav}>
      <ul className={styles.list}>
        {sections.map(({ id, name, iconName }) => (
          <li className={styles.item} key={id}>
            <a
              className={styles.link}
              href={`#${id}`}
              title={`Scroll to ${name} section`}
            >
              <Icon name={iconName} className={styles.icon} />
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNavigation;
