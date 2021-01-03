import React from "react";
import { Project, Category } from "./Projects.types";
import Icon, { IconName } from "components/Icon";

const tagIconMapping: Record<Category, IconName> = {
  game: "pacman",
  js: "js",
  react: "reactIcon",
  vue: "vue",
  web: "web",
  wp: "wordpress",
};

const ProjectTag = ({
  iconName,
  text,
}: {
  iconName: IconName;
  text: string;
}) => (
  <li className="project__tag tag--{classNameName}" data-tooltip={text}>
    <Icon name={iconName} />
    <span className="sr-only">{text}</span>
  </li>
);

// @TODO: Maybe can be unified with ProjectTag?
const ProjectLink = ({
  href,
  iconName,
  text,
}: {
  href: string;
  iconName: IconName;
  text: string;
}) => (
  <li className="project__link-item">
    <a
      className="project__link project__tag tag--{classNameName}"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={iconName} />
      <span className="sr-only">{text}</span>
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
  <li className="project" style={{ backgroundImage: `url('${thumbnail}')` }}>
    <div className="project__content">
      <div className="project__header">
        <h3 id="{id}__title" className="project__title">
          {name}
        </h3>
        <ul className="project__tags">
          {/* @TODO: Mapping */}
          {tags.map((tag) => (
            <ProjectTag text={tag} iconName={tagIconMapping[tag]} key={tag} />
          ))}
        </ul>
      </div>
      <p className="project__desc" id="{id}__desc">
        {description}
      </p>
      <ul className="project__links">
        {githubUrl && (
          <ProjectLink
            text="View on GitHub"
            iconName="github"
            href={githubUrl}
          />
        )}
        {liveUrl && (
          <ProjectLink text="See live" iconName="link" href={liveUrl} />
        )}
        {/* @TODO: Probably there will be a button for a popup */}
        {popupId && (
          <ProjectLink text="More info" iconName="info" href={popupId} />
        )}
      </ul>
    </div>
  </li>
);

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => (
  <section className="portfolio section" id="portfolio">
    <div className="container">
      <header className="section__header">
        <h2 className="section__heading">Things I&apos;ve worked on</h2>
      </header>
      <div className="projects">
        <ul id="projects__list" className="projects__list">
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
