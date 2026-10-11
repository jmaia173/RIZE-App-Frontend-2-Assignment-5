import { useParams, Link } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found</h2>
        <Link to="/products">Back to Games</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p>{product.description}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <br />
        <Link to="/products">← Back to Games</Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;