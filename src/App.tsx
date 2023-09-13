import React from "react";
import { Provider } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import GoodsList from "./components/GoodsList/GoodsList";
import store from "./store/store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Navbar />
        <section className="itemsContainer">
          <GoodsList />
        </section>
        <ShoppingCart />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
