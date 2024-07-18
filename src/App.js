import React, { useState } from "react";
import axios from "axios";
import "./style/Main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormP1 from "./compornent/FormP1";
import FormP2 from "./compornent/FormP2";
import FormP3 from "./compornent/FormP3";


function App() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/submit", form)
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      <FormP1 form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
      {/* <FormP2 form={form} handleChange={handleChange} handleSubmit={handleSubmit} /> */}
      <FormP3/>
    </div>
  );
}

export default App;
