import React from "react";
import { Project, Category } from "./Projects.types";
import Icon, { IconName } from "components/Icon";
import styles from "./Projects.module.scss";
import sharedStyles from "styles/shared.module.scss";
import classNames from "classnames";

const tagIconMapping: Record<Category, IconName> = {
  game: "pacman",
  js: "js",
  react: "reactIcon",
  vue: "vue",
  web: "web",
  wp: "wordpress",
};

const tagTextMapping: Record<Category, string> = {
  game: "Game",
  js: "JavaScript",
  react: "React.js",
  vue: "Vue.js",
  web: "Web",
  wp: "Wordpress",
};

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

const ProjectCard = ({
  name,
  description,
  tags = [],
  githubUrl,
  liveUrl,
  popupId,
  thumbnail,
}: Project) => (
  <li
    className={styles.projectCard}
    style={{ backgroundImage: `url('${thumbnail}')` }}
  >
    <div className={styles.projectContent}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{name}</h3>
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
        {/* @TODO: Probably there will be a button for a popup */}
        {popupId && (
          <ProjectLink
            text="More info"
            iconName="info"
            href={popupId}
            className={styles.info}
          />
        )}
      </ul>
    </div>
  </li>
);

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => (
  <section
    className={classNames(styles.projectsSection, sharedStyles.section)}
    id="portfolio"
  >
    <div className={sharedStyles.container}>
      <header className={sharedStyles.sectionHeader}>
        <h2>Things I&apos;ve worked on</h2>
      </header>
      <div>
        <ul className={styles.projectsList}>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

// @TODO: Modal
/* <div className="modal">
  <div className="modal__wrapper fade-in">
    <a className="modal__close fade-in" href="#">
      <span className="icon icon-close" aria-hidden="true"></span>
      <div className="sr-only">Close current popup</div>
    </a>

    <div className="modal__loader fade-in">
      <span className="icon icon-dots" aria-hidden="true"></span>
      <div className="sr-only">Loading content...</div>
    </div>

    <article className="modal__content fade-in">

    </article>
  </div>
</div> */

export default Projects;
