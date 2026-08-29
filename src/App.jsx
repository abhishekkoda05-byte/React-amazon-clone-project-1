import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from "./pages/Login"
import Signin from "./pages/Signin"
import Cart from "./pages/cart"
import './App.css'

function App() {

  let images = [
    "h-2.jpg",
    "h-1.jpg",
    "h-3.jpg",
    "h-4.jpg",
    "h-5.jpg"
  ];

  let [current, setcurrent] = useState(0);
  let [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  let [login, setlogin] = useState(false);
  let [signin, setsignin] = useState(false);
  let [cart, setCart] = useState([]);

  // Hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrent((current) => (current + 1) % images.length)
    }, 3000);

    return () => clearInterval(timer)
  }, []);

  // Product API
  useEffect(() => {
    fetch("https://dummyjson.com/products")  
      .then((response) => response.json())  
      .then((data) => {  
        setProducts(data.products);  
      });  
  }, []);  
  
  // cart   
  const addToCart = (product) => {  
  setCart((oldCart) => {  
    const existingProduct = oldCart.find(  
      (item) => item.id === product.id  
    );  
  
    if (existingProduct) {  
      return oldCart.map((item) =>  
        item.id === product.id  
          ? {  
              ...item,  
              quantity: item.quantity + 1  
            }  
          : item  
      );  
    }  
  
    return [  
      ...oldCart,  
      {  
        ...product,  
        quantity: 1  
      }  
    ];  
  });  
};  
  
  
  
  return (  
    <> 
    <Routes>

  <Route
    path="/"
    element={
      <> 
      <div className="nav-bar-1">  
           
        <div className="logo">amazon</div>   
   
        <div className="Login">   
          <h2 onClick={() => setlogin(true)}>   
            delivery to   
            <span>📍India</span>   
          </h2>   
        </div>   
        {login && <Login setlogin={setlogin} />}   
   
        <div className="search-bar">   
          <select>   
            <option>All</option>   
            <option>smtg</option>   
          </select>   
   
          <input   
            placeholder="search"   
            type="text"   
          />   
   
          <button>🔍</button>   
        </div>   
  
        <div className="language">  
          <select>  
            <option>english</option>  
            <option>telugu</option>  
          </select>  
        </div>  
         
        
      <div className="sign"> <h2 onClick={() => setsignin(true)}>hello, sign-in</h2>  
       <span  onClick={() => setsignin(true)}>Accounts & Lists</span> </div>   
       {signin && <Signin setsignin={setsignin}/>}  
         
       <div className="return"> <h2>Return</h2>   
       <span>& orders</span> </div>  
           
              {/* cart */} 
 
        <Link to="/cart" className="cart"> 
         🛒 Cart
        </Link> 
                      
  
      </div>  
  
      <div className="navbar-2">  
  
        <select>  
          <option>☰ ALL</option>  
          <option>electronics</option>  
          <option>fashion</option>  
          <option>gaming</option>  
          <option>todays deals</option>  
        </select>  
  
        <h3>electronics</h3>  
        <h3>gaming</h3>  
        <h3>fashion</h3>  
        <h3>todays deals</h3>  
        <h3>customer service</h3>  
        <h3>sell</h3>  
  
      </div>  
  
  
      {/* HERO */}  
            
      <div className="hero">  
         <div className="amazon-message">  
  <h2>  
    You are on amazon.com. You can also shop on Amazon India for  
    millions of products with fast local delivery.  
    <span> Click here to go to amazon.in</span>  
  </h2>  
</div>  
          <img  
          src={images[current]}  
          alt="Hero"  
            
        />  
      </div>  
             {/* PRODUCTS */}  
  
      <div className="products">  
  
        <div className="product-grid">  
  
          {products.map((product) => (  
  
            <div  
              className="product-card"  
              key={product.id}  
               onClick={() => setSelectedProduct(product)}  
            >  
              <img  
                src={product.thumbnail}  
                alt={product.title}  
              />  
              <h3>{product.title}</h3>  
  
              <p>₹ {product.price}</p>  
  
              <p>⭐ {product.rating}</p>  
  
             <button  
                onClick={(e) => {  
                  e.stopPropagation();  
                  addToCart(product);  
                }}  
              >  
                Add to Cart  
              </button>  
            </div>  
          ))}  
        </div>  
           
      </div>  
    {/* product-pop up*/}  
  
    {selectedProduct && (  
  <div className="product-popup">  
  
    <div className="product-popup-box">  
  
      <button  
        className="close-popup"  
        onClick={() => setSelectedProduct(null)}  
      >  
        ×  
      </button>  
  
      <img  
        src={selectedProduct.thumbnail}  
        alt={selectedProduct.title}  
      />  
  
      <div className="popup-details">  
  
        <h2>{selectedProduct.title}</h2>  
  
            <p>{selectedProduct.description}</p>  
        <h2>₹ {selectedProduct.price}</h2>  
  
        <p>⭐ {selectedProduct.rating}</p>  
  
        <button className="add-cart"  onClick={() => addToCart(selectedProduct)}>  
          Add to Cart  
        </button>  
  
      </div>  
  
    </div>  
  
  </div>  
)}   
  <hr/>

      <div className='home-ending'> 
        <h1 className='home-text'>See personalized recommendations</h1>
        <button className='home-button'>sign in</button>
        <h3 className='home-text-2'>New customer! <a className='home-a'>start here</a></h3>
      </div>

      <hr/>

      <div className='back'>
       <h3>Back to top</h3>
      </div>
       
     <div className='Ending'>
        <div className='ending-1'>
        <h2>Get to know</h2>
        <h3 >careers</h3>
        <h3 >Blog</h3>
        <h3>About Amazon</h3>
        <h3 >investor realations</h3>
        <h3 >Amazon Devices</h3>
        <h3>Amazon science</h3>
        </div>

         <div className='ending-2'>
        <h2>Make money with us</h2>
        <h3 >sell products on amazon</h3>
        <h3 >sell on amazon business</h3>
        <h3>About Amazon</h3>
        <h3 >investor realations</h3>
        <h3 >Amazon Devices</h3>
        <h3>Amazon science</h3>
        </div>

         <div className='ending-3'>
        <h2>Amazon payment products</h2>
        <h3 >Amazon business card</h3>
        <h3 >shop with points</h3>
        <h3>reload your balance</h3>
        <h3 >Amazon currency converter</h3>
        </div>
      </div>
      
        </>
        }
      />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            setCart={setCart}
          />
        }
      />

    </Routes>
    
    </>  
  )  
}  
  
export default App 