import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./style/Form.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./compornents/Login";
import FormPage from "./compornents/FormPage";
import ResultPage from "./compornents/ResultPage";
// import Assessor from "./compornents/Assessor";

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
        focus: 0,
        initiative: 0,
        sense: 0,
        development: 0,
        vision: 0,
        cooperate: 0,
    };

    const [formValues, setFormValues] = useState(initialFormValues);
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        console.log("Form values before submission:", formValues);

        try {
            const response = await axios.post("http://localhost:5000/submit", formValues, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response from server:", response.data);
            setFormValues(initialFormValues);
        } catch (error) {
            console.error("There was an error submitting the form:", error);
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
                <Route
                    path="/form"
                    element={
                        isLoggedIn ? (
                            <FormPage
                                formValues={formValues}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                error={error}
                            />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/result" element={<ResultPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
        // <div>
        //     <Assessor/>
        // </div>
    );
}

export default App;
