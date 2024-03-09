import { useState } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
   console.log(product)
    const flyingItem = document.createElement('div');
    flyingItem.classList.add('flying-item');
    flyingItem.innerText = product.name;


    const productRect = document.getElementById(`product-${product.name}`).getBoundingClientRect();
    const cartRect = document.querySelector('.cart').getBoundingClientRect();
    console.log(`product-${product.name}`);
    const distanceX = cartRect.left + cartRect.width / 2 - productRect.left - productRect.width / 2;
    const distanceY = cartRect.top + cartRect.height / 2 - productRect.top - productRect.height / 2;

    flyingItem.style.left = `${productRect.left}px`;
    flyingItem.style.top = `${productRect.top}px`;
    document.body.appendChild(flyingItem);

    setTimeout(() => {
      flyingItem.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
      flyingItem.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
      flyingItem.style.opacity = '0';

      setTimeout(() => {
        flyingItem.remove();
      }, 1000);
    }, 0);
  };

  return (




    <div className="App">


<div className="cart mb-[55rem]">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
             <h1>Product List</h1>
      <div className="product-list flex gap-10">


        <div className="product" id="product-Product 1">
            <span>Product 1</span>
            <button onClick={() => addToCart({ name: 'Product 1' })}>Add to Cart</button>
        </div>

          <div className="product" id="product-Product 2">
              <span>Product 2</span>
              <button onClick={() => addToCart({ name: 'Product 2' })}>Add to Cart</button>
          </div>
        <div className="product" id="product-Product 3">
            <span>Product 1</span>
            <button onClick={() => addToCart({ name: 'Product 3' })}>Add to Cart</button>
        </div>

          <div className="product" id="product-Product 4">

              <span>Product 2</span>
              <button onClick={() => addToCart({ name: 'Product 4' })}>Add to Cart</button>
          </div>



      </div>







    </div>
  );
}

export default App;

















