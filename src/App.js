import logo from "./logo.svg";
import "./App.css";
import Text from "./components/Text";
import Profile from "./screens/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./screens/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      {/* login */}
      {/* register */}

      {/* rout==/Register<Register /> */}
      {/* rout== /login <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login  setIsLogin={setIsLogin}/>} />
          <Route path="/register" element={<Register isLogin={isLogin} />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
