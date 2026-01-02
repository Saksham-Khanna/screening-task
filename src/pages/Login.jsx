import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { loginUser } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const success = loginUser(email, password);

    if (!success) {
      alert("Invalid email or password");
      return;
    }

    alert("Login successful");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign in</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input name="email" type="email" required />

          <label>Password</label>
          <input name="password" type="password" required />

          <button type="submit">Sign In</button>
        </form>

        <p className="auth-footer">
          New to ShopEase? <a href="/register">Create your account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
