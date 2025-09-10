import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <div>
      <form>
        <h2>Login Form</h2>
        <label>
          Username:
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="username"
            name="username-login"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            name="password-login"
          />
        </label>
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
