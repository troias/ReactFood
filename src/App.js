import Header from './components/Layout/Header/Header'
import MealsContainer from './components/Meals/MealContainer/MealsContainer'
import Cart from './components/Cart/Cart'
import {useState} from 'react'

function App() {

  const [cartActive, setCartActive] = useState(false)

  const showCartHandler = () => {
    setCartActive(true)
  }

  const hideCartHandler = () => {
    setCartActive(false)
  }

  return (
    <>
    <div>
    {cartActive && <Cart />}
      <Header onShowCart={showCartHandler} />
    </div>
    <main>
      
      <MealsContainer/>
    </main>
    </>
  );
}

export default App;
