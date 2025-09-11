import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Login </h2>
        <label className="block text-gray-700">
          Username:
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="username"
            name="username-login"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block text-gray-700">
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            name="password-login"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <button
          className="w-full p-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
