function Register() {
  return (
    <div>
      <form>
        <h2>Register Form</h2>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
