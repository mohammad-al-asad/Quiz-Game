import "./App.css";
import Layout from "./Components/Layout";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
