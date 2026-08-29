 function Cart({ cart, setCart }) {
  

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeProduct = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1 className="cart-heading">Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2 className="cart-empty-text">Your cart is empty</h2>
      ) : (
        <>
          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div>
                <h2 className="cart-item-title">{item.title}</h2>

                <h3 className="cart-item-price">₹ {item.price}</h3>

                <button
                className="decrease-button"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  −
                </button>

                <span className="cart-quantity"> {item.quantity} </span>

                <button
                className="cart-increase-button"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>

                <br />

                <button
                className="cart-remove-button"
                  onClick={() => removeProduct(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <div className="cart-total">
            <h2>Total: ₹ {total.toFixed(2)}</h2>

            <button className="cart-proceed">
              Proceed to Buy
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default Cart;