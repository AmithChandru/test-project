import { useState } from 'react';
import './App.css';
import Buy from './components/Buy';
import Cart from './components/Cart';
import Header from './components/Header';
import Sell from './components/Sell';

function App() {

  const [sellActive, setSellActive] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  const handleClick = () => {
    setSellActive(!sellActive);
  }

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  }

  return (
    <div className="App">
      <Header handleClick={handleClick} handleCartClick={handleCartClick} />
      {sellActive ? <Sell /> : <Buy />}
      {cartOpen && <Cart />}
    </div>
  );
}

export default App;
