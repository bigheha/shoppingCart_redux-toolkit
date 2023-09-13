import styles from "./shoppingCart.module.css";
import { toggleCart } from "../../store/slice/cartSlice";
import { confirmPurchase } from "../../store/globalActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { emerald } from "../../assets/images/Goods";
import CartItem from "../cartItem/CartItem";

export default function ShoppingCart() {
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  const cartItems = useAppSelector((state) => state.cart.itemsInCart);
  let sum = useAppSelector((state) => {
    let sum = 0;
    const cartItems = state.cart.itemsInCart;

    for (let item in cartItems) {
      sum += cartItems[item].unitPrice * cartItems[item].amount;
    }

    return sum;
  });
  const balance = useAppSelector((state) => state.balance.currency - sum);
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
              dispatch(confirmPurchase(sum));
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
