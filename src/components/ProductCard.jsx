const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-card">
      <div className="product-img">
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
      </div>

      <h3>{product.title}</h3>

      <p className="price">
        ₹{product.price} <span>₹{product.mrp}</span>
      </p>
    </div>
  );
};

export default ProductCard;
