import Navbar from "./components/navbar/Navbar";
import Item from "./components/item/Item";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import GOODS from "./assets/images/Goods";
import { useAppSelector } from "./store/hooks";
import ModalBackground from "./components/modalBackground/ModalBackground";

function App() {
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  return (
    <>
      <Navbar />
      <section className="itemsContainer">
        {GOODS.map((item) => {
          return <Item props={item} />;
        })}
      </section>
      {isOpen && <ModalBackground />}
      <ShoppingCart />
    </>
  );
}

export default App;
