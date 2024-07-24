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
import FormP3twothree from "./compornents/FormP3twothree";
import FormP3twofour from "./compornents/FormP3twofour";
import FormP3twofive from "./compornents/FormP3twofive";
import FormP3twosix from "./compornents/FormP3twosix";
function App() {
  const initialFormValues = {
    ID: uuidv4(),
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
    conduct: 0,
    punctuality: 0,
    focus:0,
    initiative: 0,
    sense:0,
    development: 0,
    vision: 0,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = Object.values(formValues);
    const allFilled = values.every((value) => value !== "" && value !== 0);

    if (!allFilled) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    setError("");
    console.log("Form values:", formValues);

    try {
      const response = await axios.post("http://localhost:5000/submit", formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      // รีเซตค่าเมื่อ submit สำเร็จ
      setFormValues(initialFormValues);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h3 className="header-container">แบบประเมินผลการปฏิบัติงานของพนักงาน อผศ. และลูกจ้างประจำหน่วยงานกิจการพิเศษ</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <FormP1 formValues={formValues} handleChange={handleChange} />
        <FormP3one formValues={formValues} handleChange={handleChange} />
        <FormP3onetwo formValues={formValues} handleChange={handleChange} />
        <FormP3two formValues={formValues} handleChange={handleChange} />      
        <FormP3twotwo formValues={formValues} handleChange={handleChange} />      
        <FormP3twothree formValues={formValues} handleChange={handleChange} />      
        <FormP3twofour formValues={formValues} handleChange={handleChange} />      
        <FormP3twofive formValues={formValues} handleChange={handleChange} />      
        <FormP3twosix formValues={formValues} handleChange={handleChange} />      
        <button className="submit" type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default App;
