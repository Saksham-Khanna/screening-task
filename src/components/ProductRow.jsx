import ProductCard from "./ProductCard";
import "../styles/product.css";

const ProductRow = ({ title, products = [] }) => {
  // Guard clause (prevents crash)
  if (!Array.isArray(products)) {
    return null;
  }

  return (
    <section className="product-row">
      <h2>{title}</h2>

      <div className="product-row-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductRow;
