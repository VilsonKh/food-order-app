import React, {useState} from "react"
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CardContextProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false)

  const showCartHandler =() => {
    setCartIsVisible(true)
  }

  const hideCartHandler = () => {
    setCartIsVisible(false)
  }

	return (
		<CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}></Cart>}
			<Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
		</CartContextProvider>
	);
}

export default App;
