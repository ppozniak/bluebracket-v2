import React, { MouseEvent } from "react";
import { Project, Category } from "../Projects.types";
import { IconName } from "components/Icon";
import styles from "../Projects.module.scss";
import ProjectTag from "./ProjectTag";
import ProjectLink, { ViewInfoButton } from "./ProjectLink";

const tagIconMapping: Record<Category, IconName> = {
  game: "pacman",
  js: "js",
  react: "reactIcon",
  vue: "vue",
  web: "web",
  wp: "wordpress",
  node: "aws", // @TODO: Change this
};

const tagTextMapping: Record<Category, string> = {
  game: "Game",
  js: "JavaScript",
  react: "React.js",
  vue: "Vue.js",
  web: "Web",
  wp: "Wordpress",
  node: "Node.js",
};

type Props = {
  onInfoClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & Project;

const ProjectCard = ({
  name,
  description,
  tags = [],
  githubUrl,
  liveUrl,
  thumbnail,
  onInfoClick,
}: Props) => (
  <li
    className={styles.projectCard}
    style={{ backgroundImage: thumbnail && `url('${thumbnail}')` }}
  >
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{name}</h3>
        {tags?.length && (
          <ul className={styles.projectTags}>
            {tags.map((tag) => (
              <ProjectTag
                tag={tag}
                text={tagTextMapping[tag]}
                iconName={tagIconMapping[tag]}
                key={tag}
              />
            ))}
          </ul>
        )}
      </div>
      <p className={styles.projectDescription}>{description}</p>
      <ul className={styles.projectLinks}>
        {githubUrl && (
          <ProjectLink
            text="View on GitHub"
            iconName="github"
            href={githubUrl}
            className={styles.github}
          />
        )}
        {liveUrl && (
          <ProjectLink
            text="See live"
            iconName="link"
            href={liveUrl}
            className={styles.live}
          />
        )}
        {/* @TODO: Validate if content is in */}
        <ViewInfoButton onClick={onInfoClick} />
      </ul>
    </div>
  </li>
);

export default ProjectCard;
