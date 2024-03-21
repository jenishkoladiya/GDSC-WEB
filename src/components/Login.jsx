import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Ho gaya");
    console.log("Email", email);
    console.log("Password", password);
    setIsLogin(true);
  };

  return (
    <div className="flex flex-col items-center bg-sky-200 w-full justify-center h-screen">
      <div className="flex flex-col items-center justify-center shadow-lg w-[400px] bg-gray-200 py-8 px-4 rounded-xl">
        <h1 className="text-3xl font-semibold ">Login</h1>
        <p className="my-4">Enter your details below</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded-md outline-none focus:border-blue-300 border-gray-900 text-lg my-2"
          type="email"
          placeholder="Email"
        />
        <h1>{email}</h1>
        <hr />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded-md outline-none focus:border-blue-300 border-gray-900 text-lg my-2"
          type="password"
          placeholder="Password"
        />
        <h1>{password}</h1>
        <button
          onClick={handleLogin}
          className=" bg-red-600 hover:bg-green-500 w-fit px-4 py-2 rounded-lg text-white font-semibold"
        >
          Login
        </button>
        <Link to="/register">
          <p className="mt-3">New user?</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
