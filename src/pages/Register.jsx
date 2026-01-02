import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { registerUser } from "../utils/auth";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    };

    registerUser(user);
    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create account</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" required />

          <label>Email</label>
          <input name="email" type="email" required />

          <label>Password</label>
          <input name="password" type="password" required />

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
