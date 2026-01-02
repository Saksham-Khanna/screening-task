import SearchBar from "./SearchBar";
import "../styles/header.css";

const Header = ({ products, onSelect }) => (
  <header className="header">
    <div className="logo">ShopEase</div>
    <SearchBar products={products} onSelect={onSelect} />
  </header>
);

export default Header;
