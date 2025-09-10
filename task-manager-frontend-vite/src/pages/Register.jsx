import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log(email, username, password);
  }

  return (
    <div>
      <form>
        <h2>Register Form</h2>
        <label>
          Username:
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            name="username-register"
          />
        </label>
        <label>
          Email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email-register"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password-register"
          />
        </label>
        <button onClick={(e) => handleClick(e)} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
