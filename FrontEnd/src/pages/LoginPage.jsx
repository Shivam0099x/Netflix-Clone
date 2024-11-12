import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react"
import { useAuthStore } from "../store/authUser";

function LoginPage() {
 
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const {login} = useAuthStore()

  const handleLogin = (e) =>{
    e.preventDefault();
  login({email,password})
}

  return (
    <div className="h-screen w-full hero-bg">
      <header className="mx-auto max-w-6xl p-4 flex justify-between items-center">
        <Link to={"/"}>
          <img src="netflix-logo.png" alt="logo" className="w-52" />
        </Link>
      </header>

      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Login
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                id="email"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="your@password"
                id="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700  ">
              Login
            </button>
          </form>
          <div className="text-center text-gray-400">
           Don't have an account?{" "}
           
              <Link to={"/signup"} className="text-red-600 hover:text-red-700 hover:underline">
                Sign Up
              </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default  LoginPage;
