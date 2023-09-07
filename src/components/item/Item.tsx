import React from "react";
import { emerald, itemType } from "../../assets/images/Goods";
import { useAppDispatch } from "../../state/hooks";
import { addProduct } from "../../state/slice/cartSlice";
import styles from "./item.module.css";

interface itemProps {
  props: itemType;
}
const Item: React.FC<itemProps> = ({ props }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.itemCardContainer}>
      <div className={styles.photoBackground}>
        <img src={props.photoUrl} alt={`${props.title} photo`} />
      </div>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>
        {props.price}
        <img src={emerald} className={styles.emerald} />
      </div>
      <button
        className={styles.buyBtn}
        onClick={() =>
          dispatch(addProduct({ name: props.title, unitPrice: props.price }))
        }
      >
        Buy
      </button>
    </div>
  );
};

export default Item;
