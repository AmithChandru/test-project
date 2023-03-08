import { useEffect, useState } from 'react';
import './Header.css';

const Header = (props) => {
  
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let temp = 0;
    fetch('https://react-movies-8029a-default-rtdb.asia-southeast1.firebasedatabase.app/tablets-cart.json')
      .then((res) => {
        res.json().then((data) => {
          for (const key in data) {
            console.log('here');
            temp++;
          }
          setCount(temp);
        })
      })
  })

  return (
    <header className="App-header">
      <span className="navigationHeaders" onClick={props.handleClick}>SELL</span>
      <span className="navigationHeaders" onClick={props.handleClick} style={{ margin: '0px 40px' }}>BUY</span>
      <button className='cartButton' onClick={props.handleCartClick}>Cart</button>
      <span className='cartCount'>{count}</span>
    </header>
  )
}

export default Header;