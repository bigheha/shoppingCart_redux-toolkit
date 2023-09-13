import styles from "./cartItem.module.css";
import { CartItemProps } from "../../constants";
import { increaseAmount, decreaseAmount } from "../../store/slice/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const CartItem: React.FC<CartItemProps> = ({ props }): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItemContainer}>
      <span>{props.name}</span>
      <div className={styles.amountController}>
        <button
          className={`${styles.leftBtn} ${styles.controlBtn}`}
          onClick={() => dispatch(decreaseAmount(props.name))}
        >
          -
        </button>
        <input type="number" className={styles.amount} value={props.amount} />
        <button
          className={`${styles.rightBtn} ${styles.controlBtn}`}
          onClick={() => dispatch(increaseAmount(props.name))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
