import { useState } from "react";
import Button from "../Components/Button";
import Checkbox from "../Components/Checkbox";
import Form from "../Components/Form";
import InputText from "../Components/InputText";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { signup } = useAuth();
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password doesn't match.");
    } else {
      try {
        setError("");
        setLoading(true);
        await signup(email, password, name);
        navigate("/")
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        setError("There was an error durring signup.");
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit} style={{ height: "550px" }}>
      <InputText
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      >
        <span className="material-icons-outlined"> person </span>
      </InputText>

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
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      >
        <span className="material-icons-outlined"> lock </span>
      </InputText>

      <InputText
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      >
        <span className="material-icons-outlined"> lock_clock </span>
      </InputText>

      <Checkbox
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      >
        I agree to the Terms & Conditions
      </Checkbox>

      <Button type="submit" disabled={loading}>
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}

export default SignupForm;
