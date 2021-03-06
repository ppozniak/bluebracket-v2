import React from "react";
import className from "classnames";
import sharedStyles from "styles/shared.module.scss";
import styles from "./skills.module.scss";
import Icon from "components/icon";
import { SkillsGroup } from "types/skills.types";

type Props = {
  skillsGroups: SkillsGroup[];
};

const Skills = ({ skillsGroups }: Props) => (
  <section
    className={className(styles.skillsSection, sharedStyles.section)}
    id="skills"
  >
    <div className={sharedStyles.container}>
      <header className={sharedStyles.sectionHeader}>
        <h2>What do I know?</h2>
        <div className={styles.subHeading}>Or think I know:</div>
      </header>

      {skillsGroups.map(({ name, skills }) => (
        <div key={name}>
          <h3 className={sharedStyles.underlined}>{name}</h3>
          <ul className={styles.skillsGroup}>
            {skills.map(({ title, name, iconName }) => (
              <li key={name} className={styles.skill} title={title}>
                <Icon className={styles.icon} name={iconName} />
                <span className={styles.skill}>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
