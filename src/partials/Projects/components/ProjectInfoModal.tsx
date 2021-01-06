import React, { MouseEvent } from "react";
import classNames from "classnames";
import Icon from "components/Icon";
import Modal from "react-modal";
import styles from "./ProjectInfoModal.module.scss";
import sharedStyles from "styles/shared.module.scss";

type Props = {
  isOpen: boolean;
  closeModal: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ProjectInfoModal = ({ isOpen = false, closeModal }: Props) => (
  <Modal
    isOpen={isOpen}
    contentLabel="Example Modal"
    overlayClassName={styles.overlay}
    className={classNames(styles.modal, sharedStyles.fadeIn)}
    bodyOpenClassName="modal-opened"
  >
    <button
      type="button"
      className={classNames(styles.modalClose, sharedStyles.fadeIn)}
      onClick={closeModal}
    >
      <Icon name="close" />
      <span className={sharedStyles.srOnly}>Close current popup</span>
    </button>

    <div className={classNames(styles.modalLoader, sharedStyles.fadeIn)}>
      <Icon name="dots" />
      <span className={sharedStyles.srOnly}>Loading content...</span>
    </div>
    <article
      className={classNames(styles.modalContent, sharedStyles.fadeIn)}
    ></article>
  </Modal>
);

export default ProjectInfoModal;
