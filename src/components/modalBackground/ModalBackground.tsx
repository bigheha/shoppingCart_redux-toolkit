import styles from "./ModalBackground.module.css";

export default function ModalBackground() {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return <div className={styles.cartBackground} onClick={handleClick}></div>;
}
