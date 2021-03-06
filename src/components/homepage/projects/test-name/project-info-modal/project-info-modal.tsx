import React, { MouseEvent } from "react";
import classNames from "classnames";
import Icon from "components/icon";
import Modal from "react-modal";
import styles from "./project-info-modal.module.scss";
import sharedStyles from "styles/shared.module.scss";
import { Project } from "types/projects.types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

type Props = {
  isOpen: boolean;
  closeModal: (event: MouseEvent<HTMLButtonElement>) => void;
  project?: Project;
};

const renderMedia = (publicURL: string) => {
  const type = publicURL.split(".").pop();
  switch (type) {
    case "webm":
      return (
        <video autoPlay muted>
          <source src={publicURL} type="video/webm" />
        </video>
      );
    case "jpeg":
    case "jpg":
    case "png":
      return <img src={publicURL} alt="" />;
  }
};

const ProjectInfoModal = ({ isOpen = false, closeModal, project }: Props) => {
  if (!project) return null;
  const {
    name,
    githubUrl,
    liveUrl,
    content,
    media,
    type,
    scope,
    timePeriod,
    stack,
  } = project;

  const links = Object.entries({
    "See live": liveUrl,
    "View on GitHub": githubUrl,
  }).filter(([, value]) => !!value);

  const table = Object.entries({
    "Period of time": timePeriod,
    Type: type,
    Scope: scope,
    Stack: stack,
  }).filter(([, value]) => !!value);

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Example Modal"
      overlayClassName={styles.overlay}
      className={classNames(styles.modal, sharedStyles.fadeIn)}
      bodyOpenClassName="modal-opened"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
    >
      <button
        type="button"
        className={classNames(styles.modalClose, sharedStyles.fadeIn)}
        onClick={closeModal}
      >
        <Icon name="close" />
        <span className={sharedStyles.srOnly}>Close current popup</span>
      </button>

      <article className={classNames(styles.modalContent, sharedStyles.fadeIn)}>
        <div className={styles.columnsContainer}>
          <div
            className={classNames(styles.modalColumn, styles.modalContentStyle)}
          >
            <div className={sharedStyles.container}>
              <h3>{name}</h3>

              {!!links.length && (
                <div className={styles.linksContainer}>
                  {links.map(([text, url]) => (
                    <a
                      key={text}
                      className={classNames(sharedStyles.linkOrange)}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {text} <Icon name="external" />
                    </a>
                  ))}
                </div>
              )}

              {/* Table */}
              {!!table.length && (
                <table
                  className={classNames(
                    sharedStyles.table,
                    sharedStyles.tablePastel
                  )}
                >
                  <tbody>
                    {table.map(([key, value]) => (
                      <tr key={key}>
                        <th>{key}:</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* Content */}
              {content && renderRichText(content)}
            </div>
          </div>
          <div className={styles.modalColumn}>
            {/* Media */}
            {media?.map(({ localFile: { publicURL } }) => (
              <a
                key={publicURL}
                className={styles.modalMediaLink}
                href={publicURL}
                title="Open resource in new tab"
                target="_blank"
                rel="noreferrer"
              >
                {renderMedia(publicURL)}
              </a>
            ))}
          </div>
        </div>
      </article>
    </Modal>
  );
};

export default ProjectInfoModal;
