import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./style/Main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormP1 from "./compornents/FormP1";
import FormP3one from "./compornents/FormP3one";
import FormP3onetwo from "./compornents/FormP3onetwo";
import FormP3two from "./compornents/FormP3two";
import FormP3twotwo from "./compornents/FormP3twotwo";

function App() {
  const [formValues, setFormValues] = useState({
    id: uuidv4(),
    Name: "",
    Department: "",
    Agency: "",
    quantity: 0,
    achievement: 0,
    reliability: 0,
    justinTime: 0,
    saving: 0,
    finally: 0,
    qualityOfWork: 0,
    reliabilityOfTheWork: 0,
    timeLiness: 0,
    personality: 0,
    maintaining: 0,
    communication: 0,
    relationship: 0,
    sacrifice: 0,
    cooperation: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    try {
      const response = await axios.post("http://localhost:5000/submit", formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <FormP1 formValues={formValues} handleChange={handleChange} />
        <FormP3one formValues={formValues} handleChange={handleChange} />
        <FormP3onetwo formValues={formValues} handleChange={handleChange} />
        <FormP3two formValues={formValues} handleChange={handleChange} />      
        <FormP3twotwo formValues={formValues} handleChange={handleChange} />      
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
