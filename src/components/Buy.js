import { useEffect, useState } from "react";
import './Buy.css';

const Buy = () => {

  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch('https://react-movies-8029a-default-rtdb.asia-southeast1.firebasedatabase.app/tablets.json')
      .then((res) => {
        res.json().then((data) => {
          let lists = [];
          for (const key in data) {
            lists.push({
              id: key,
              name: data[key].name,
              description: data[key].description,
              price: data[key].price,
              quantity: data[key].quantity
            })
          }
          setItems(lists);
        })
      })
  }, []);

  const handleAdd = (item) => {
    if (parseInt(item.quantity) >= quantity) {
      fetch('https://react-movies-8029a-default-rtdb.asia-southeast1.firebasedatabase.app/tablets-cart.json', {
        method: 'POST',
        body: JSON.stringify({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          id: item.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        res.json().then((data) => {
          console.log(data);
        })
      })
    } else {
      alert('Enter correct quantity');
    }
  }

  return (
    <div className="buyContainer">
      {items.map((item) => {
        let text = parseInt(item.number) === 0 ? 'Out of Stock' : 'Add to Cart' 
        return (
          <div className="shoeDetails">
            <span className="titleHead">Shoe Name</span>
            <span className="details">{item.name}</span>
            <span className="titleHead">Description</span>
            <span className="details">{item.description}</span>
            <span className="titleHead">Price</span>
            <span className="details">{item.price}</span>
            <span className="titleHead">Quantity</span>
            <input style={{width: '50px'}} type='number' onChange={(e) => setQuantity(e.target.value)}/>
            <button className="addCartButton" onClick={() => text === 'Out of Stock' ? console.log('Empty') : handleAdd(item)}>{text}</button>
          </div>
        )
      })}
    </div>
  )
}

export default Buy;