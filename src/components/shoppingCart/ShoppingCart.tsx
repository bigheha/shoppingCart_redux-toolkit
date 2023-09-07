import styles from "./shoppingCart.module.css";
import { clearProducts, toggleCart } from "../../state/slice/cartSlice";
import { decreaseBalance } from "../../state/slice/balanceSlice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { emerald } from "../../assets/images/Goods";
import CartItem from "../cartItem/CartItem";

export default function ShoppingCart() {
  const cartItems = useAppSelector((state) => state.cart.itemsInCart);
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  let cartItemsSum = 0;
  for (const item in cartItems) {
    cartItemsSum += cartItems[item].amount * cartItems[item].unitPrice;
  }
  const balance =
    useAppSelector((state) => state.balance.currency) - cartItemsSum;
  const dispatch = useAppDispatch();
  return (
    <div className={`${styles.cartContainer} ${isOpen && styles.open}`}>
      <div className={styles.cartHeader}>
        <button
          onClick={() => dispatch(toggleCart())}
          className={styles.closeCartBtn}
        >
          X
        </button>
        <h1>Items in your cart:</h1>
      </div>
      <div className={styles.cartItems}>
        {Object.keys(cartItems).map(
          (cartItem) =>
            cartItems[cartItem] && <CartItem props={cartItems[cartItem]} />
        )}
      </div>
      <div className={styles.cartFooter}>
        <span className={styles.cartBalance}>
          Balance after purchase:
          <span className={styles.leftover}>
            {balance}
            <img src={emerald} className={styles.emerald} />
          </span>
        </span>
        {balance >= 0 ? (
          <button
            className={styles.confirmBtn}
            onClick={() => {
              dispatch(decreaseBalance(cartItemsSum));
              dispatch(clearProducts());
            }}
          >
            Confirm purchase
          </button>
        ) : (
          <p className={styles.lackOfEmeralds}>Not enough emeralds</p>
        )}
      </div>
    </div>
  );
}
