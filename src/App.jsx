import "./App.css";
import Layout from "./Components/Layout";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import PrivetRoute from "./Components/PrivetRoute";
import PublicRoute from "./Components/PublicRouter";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signUp" element={<PublicRoute Component={<SignUp/>}/>}/>
          <Route path="/login" element={<PublicRoute Component={<Login/>}/>}/>
          <Route path="/quiz" element={<PrivetRoute Component={<Quiz/>}/>}/>
          <Route path="/result" element={<PrivetRoute Component={<Result/>}/>}/>
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
