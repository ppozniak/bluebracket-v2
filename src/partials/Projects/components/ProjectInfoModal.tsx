import React, { MouseEvent } from "react";
import classNames from "classnames";
import Icon from "components/Icon";
import Modal from "react-modal";
import styles from "./ProjectInfoModal.module.scss";
import sharedStyles from "styles/shared.module.scss";
import { Project } from "../Projects.types";

type Props = {
  isOpen: boolean;
  closeModal: (event: MouseEvent<HTMLButtonElement>) => void;
  project?: Project;
};

const ProjectInfoModal = ({ isOpen = false, closeModal, project }: Props) => {
  if (!project) return null;
  const { name, githubUrl, liveUrl } = project;

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
            className={classNames(
              styles.modalScrollable,
              styles.modalContentStyle
            )}
          >
            <div className={sharedStyles.container}>
              <h3>{name}</h3>

              {/* Links */}
              {/* @TODO: DRY */}
              <div className={styles.linksContainer}>
                {liveUrl && (
                  <a
                    className={classNames(sharedStyles.linkOrange)}
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See live <Icon name="external" />
                  </a>
                )}
                {githubUrl && (
                  <a
                    className={classNames(sharedStyles.linkOrange)}
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub <Icon name="external" />
                  </a>
                )}
              </div>

              <table
                className={classNames(
                  sharedStyles.table,
                  sharedStyles.tablePastel
                )}
              >
                {/* Table content */}
                <tbody>
                  <tr>
                    <th>Type:</th>
                    <td>Company project (Squiz)</td>
                  </tr>
                </tbody>
              </table>

              {/* Content */}
            </div>
          </div>
          <div className={styles.modalScrollable}>
            {/* Media */}
            {/* <a
              className="hidden modal__media-link"
              href="images/screenshots/leveraged.jpg"
              title="Open image in new tab"
              target="_blank"
            >
              <img
                className="modal__media"
                src="images/screenshots/leveraged.jpg"
                alt=""
              />
            </a> */}
          </div>
        </div>
      </article>
    </Modal>
  );
};

export default ProjectInfoModal;
