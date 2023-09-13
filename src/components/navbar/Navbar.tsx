import styles from "./navbar.module.css";
import { emerald } from "../../constants.ts";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleCart } from "../../store/slice/cartSlice";

import { RootState } from "../../store/store.ts";

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
