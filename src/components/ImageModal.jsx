import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <Modal
            isOpen={!!image}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <div className={styles.content} onClick={onClose}>
                <img src={image?.urls?.regular} alt={image?.alt_description} onClick={(e) => e.stopPropagation()} />
            </div>
        </Modal>
    );
};

export default ImageModal;
