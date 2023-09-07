import styles from "./cartBackground.module.css";

export default function ModalBackground() {
  return (
    <div
      className={styles.cartBackground}
      onClick={(e) => e.stopPropagation()}
    ></div>
  );
}
