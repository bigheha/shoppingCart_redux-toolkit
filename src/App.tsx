import Navbar from "./components/navbar/Navbar";
import Item from "./components/item/Item";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import GOODS from "./assets/images/Goods";
import { useAppSelector } from "./state/hooks";
function App() {
  const cartOpen = useAppSelector((state) => state.cart.isOpen);
  return (
    <>
      <Navbar />
      <section className="itemsContainer">
        {GOODS.map((item) => {
          return <Item props={item} />;
        })}
      </section>
      {cartOpen && <ShoppingCart />}
    </>
  );
}

export default App;
