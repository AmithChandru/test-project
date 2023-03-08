import { useState } from 'react';
import './Sell.css';

const Sell = () => {

  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://react-movies-8029a-default-rtdb.asia-southeast1.firebasedatabase.app/tablets.json', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        description: desc,
        price: price,
        quantity: quantity
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
        })
      } else {
        res.json().then((data) => {
          console.log(data, 'error');
        })
      }
    })
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <label>Tablet Name</label>
      <input type='text' onChange={(e) => setName(e.target.value)}/>
      <label>Description</label>
      <input type='text' onChange={(e) => setDesc(e.target.value)}/>
      <label>Price</label>
      <input type='text' onChange={(e) => setPrice(e.target.value)}/>
      <label>Quantity Available</label>
      <input type='number' onChange={(e) => setQuantity(e.target.value)}/>
      <button type='submit' className='submitButton'>Add Product</button>
    </form>
  )
}

export default Sell;