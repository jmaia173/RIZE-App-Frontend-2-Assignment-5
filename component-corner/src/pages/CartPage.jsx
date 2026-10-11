import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-section">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some games!</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              onRemove={() => removeFromCart(index)}
            />
          ))}
          <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default CartPage;