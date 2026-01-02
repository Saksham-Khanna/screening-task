import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../utils/auth";
import "../styles/navbar.css";

const Navbar = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <span className="logo">ShopEase</span>

        <span className="nav-link">All</span>
        <span className="nav-link">Electronics</span>
        <span className="nav-link">Fashion</span>
        <Link to="/" className="nav-link">Home</Link>
      </div>

      {/* CENTER SEARCH */}
      <div className="nav-search">
        <input placeholder="Search products" />
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-user">Hello, {user.name}</span>
            <span className="nav-link" onClick={handleLogout}>
              Logout
            </span>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            Account
          </Link>
        )}

        <span className="nav-link">Orders</span>
        <span className="nav-link cart">Cart</span>
      </div>
    </header>
  );
};

export default Navbar;
