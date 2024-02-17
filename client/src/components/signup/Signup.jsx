import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const Signup = () => {
  const [Inputs, setInputs] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/signup", Inputs);

    console.log("Submitted data:", Inputs);
    setInputs({ email: "", userName: "", password: "" });
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email:</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={Inputs.email}
      />

      <label>UserName:</label>
      <input
        type="text"
        name="userName"
        onChange={handleChange}
        value={Inputs.userName}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={Inputs.password}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
