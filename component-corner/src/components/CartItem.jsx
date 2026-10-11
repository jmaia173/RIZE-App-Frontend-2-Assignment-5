import "./CartItem.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <span className="cart-item-name">{item.name}</span>
      <span className="cart-item-price">${item.price}</span>
      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;