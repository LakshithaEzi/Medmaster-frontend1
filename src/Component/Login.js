import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming your backend API endpoint for login is /api/login
      const response = await axios.post(
        "http://localhost:3010/api/v1/Login",
        formData
      );

      // Handle success or redirect to a success page
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle error, show error message to the user, etc.
      console.error("Login failed:", error.message);
    }
  };

  return (
    <iframe className="frame">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </iframe>
  );
};

export default LoginForm;
