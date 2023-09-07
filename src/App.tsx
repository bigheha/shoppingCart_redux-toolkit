import Navbar from "./components/navbar/Navbar";
import Item from "./components/item/Item";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import GOODS from "./assets/images/Goods";

function App() {
  return (
    <>
      <Navbar />
      <section className="itemsContainer">
        {GOODS.map((item) => {
          return <Item props={item} />;
        })}
      </section>
      <ShoppingCart />
    </>
  );
}

export default App;
