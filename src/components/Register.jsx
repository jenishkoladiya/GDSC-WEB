import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ isLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Ho gaya");
    console.log(name);
    console.log(email);
    console.log(password);
  };
  return (
    <div className="flex flex-col items-center bg-sky-200 w-full justify-center h-screen">
      <h1>{isLogin ? "logdd in":""}</h1>
      <div className="flex flex-col items-center justify-center shadow-2xl w-[400px] bg-gray-200 py-8 px-4 rounded-xl">
        <h1 className="text-3xl font-semibold ">Register</h1>
        <p className="my-4">Enter your details below</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-b-2 focus:border-blue-300 px-4 py-2 outline-none text-lg my-2"
          type="name"
          placeholder="Name"
        />
        <h1>{name}</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-b-2 focus:border-blue-300 px-4 py-2 outline-none text-lg my-2"
          type="email"
          placeholder="Email"
        />
        <h1>{email}</h1>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-b-2 focus:border-blue-300 px-4 py-2 outline-none text-lg my-2"
          type="password"
          placeholder="Password"
        />
        <h1>{password}</h1>
        <button
          onClick={handleRegister}
          className=" bg-red-500  w-fit px-4 py-2 rounded-lg hover:bg-green-500 text-white font-semibold"
        >
          Create Account
        </button>

        {isLogin ? (
          <h1>User is Logged in! No need to register.</h1>
        ) : (
          <Link to="/">
            <p className="mt-3">Already have an Account?</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Register;
