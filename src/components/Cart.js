import { useEffect, useState } from "react";
import './Cart.css';

const Cart = () => {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://react-movies-8029a-default-rtdb.asia-southeast1.firebasedatabase.app/tablets-cart.json')
      .then((res) => {
        res.json().then((data) => {
          let items = [];
          for (const key in data) {
            items.push({
              name: data[key].name,
              price: data[key].price,
              quantity: data[key].quantity,
              id: data[key].id
            })
          }
          setCartItems(items);
        })
      })
  }, [])

  return (
    <div className="cartContainer">
      {cartItems.map((item) => {
        return (
          <div className="cartItem">
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{parseInt(item.price) * parseInt(item.quantity)}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Cart;