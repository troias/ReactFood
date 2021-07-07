import Header from './components/Layout/Header/Header'
import MealsContainer from './components/Meals/MealContainer/MealsContainer'
import Cart from './components/Cart/Cart'
import {useState} from 'react'
import CartProvider from './contextStore/CartProvider'

function App() {

  const [cartActive, setCartActive] = useState(false)

  const showCartHandler = (event) => {
    setCartActive(true)
  }

  const hideCartHandler = () => {
    setCartActive(false)
  }

  return (
    
    <CartProvider>

   
    <div>
    {cartActive && <Cart  onHideCart={hideCartHandler}/>}
      <Header  onShowCart={showCartHandler} />
    </div>
    <main>
      
      <MealsContainer/>
    </main>
    </CartProvider>
   
  );
}

export default App;
