import React, { useState } from "react";
import { Project } from "types/projects.types";
import styles from "./projects.module.scss";
import sharedStyles from "styles/shared.module.scss";
import classNames from "classnames";
import ProjectInfoModal from "./test-name/project-info-modal";
import ProjectCard from "./test-name/project-card";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<String>();

  const activeProjectData = projects.find(({ name }) => name === activeProject);

  return (
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
            {projects.map(
              (project) =>
                project.name && (
                  <ProjectCard
                    key={project.name}
                    {...project}
                    onInfoClick={() => {
                      setActiveProject(project.name);
                      setIsModalOpen(true);
                    }}
                  />
                )
            )}
          </ul>
        </div>
      </div>

      <ProjectInfoModal
        project={activeProjectData}
        closeModal={() => {
          setIsModalOpen(false);
          setActiveProject(undefined);
        }}
        isOpen={isModalOpen && !!activeProjectData}
      />
    </section>
  );
};

export default Projects;
