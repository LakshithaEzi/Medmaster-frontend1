import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "./Image/mo-U3Kst7MY4Ok-unsplash.jpg";

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "700px",
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    dob: "",
    role: "",
    profileImage: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3010/api/v1/register",
        formData
      );

      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div style={divStyle}>
      <form
        onSubmit={handleSubmit}
        className="items-center justify-center w-fit  border-[.5px] border-transparent  rounded-[50px] px-[522px] py-[80px] backdrop-blur-sm  "
      >
        <div className="items-center p-4 center bg-slate-500 rounded-xl">
          <h1>
            <span className="font-bold">M</span>ed<span className="M">M</span>
            aster Register
          </h1>
        </div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

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
        <br />
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
        <br />

        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Role:
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="doctor">Doctor</option>
            <option value="pharmacist">Pharmacist</option>
            <option value="patient">Patient</option>
          </select>
        </label>
        <br />

        <label>
          Profile Image:
          <input
            type="file"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <br></br>

        <button
          type="submit"
          className="p-2 duration-75 bg-white outline-1 outline-slate-800 rounded-2xl hover:text-white hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

/*function AddUsers() {
  const url = "";
  const [date, setDate] = useState({
    name: "",
    date: "",
    iduser: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="date"
          value={data.date}
          placeholder="date"
          type="date"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="iduser"
          value={data.iduser}
          placeholder="iduser"
          type="number"
        ></input>
        <button></button>
      </form>
    </div>
  );
}

export default AddUsers;*/
