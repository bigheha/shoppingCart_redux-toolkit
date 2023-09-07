import styles from "./navbar.module.css";
import { emerald } from "../../assets/images/Goods";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { toggleCart } from "../../state/slice/cartSlice";

import { RootState } from "../../state/store";

export default function Navbar() {
  const balance = useAppSelector((state: RootState) => state.balance.currency);
  const dispatch = useAppDispatch();
  return (
    <nav className={styles.navbarContainer}>
      <span className={styles.logo}>Villager</span>
      <div className={styles.navBtns}>
        <span className={styles.balance}>
          <img src={emerald} className={styles.emerald} />
          {balance}
        </span>
        <button className={styles.cartBtn}>
          <i
            className="fa-solid fa-cart-shopping"
            onClick={() => dispatch(toggleCart())}
          ></i>
        </button>
      </div>
    </nav>
  );
}
