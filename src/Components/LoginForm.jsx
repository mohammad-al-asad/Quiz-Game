import { useState } from "react";
import Button from "../Components/Button";
import Form from "../Components/Form";
import InputText from "../Components/InputText";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("jfklsd");
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError("Login failed.");
    }
  }
  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <InputText
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      >
        <span className="material-icons-outlined"> alternate_email </span>
      </InputText>

      <InputText
        type="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        required
      >
        <span className="material-icons-outlined"> lock </span>
      </InputText>

      <Button type="submit" disabled={loading}>
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}

export default LoginForm;
