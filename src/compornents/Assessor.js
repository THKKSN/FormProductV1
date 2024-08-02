// components/Assessor.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Assessor.css";

const Assessor = () => {
  const [evaluators, setEvaluators] = useState([]);
  const [selectedEvaluator, setSelectedEvaluator] = useState("");
  const [isEvaluatorSelected, setIsEvaluatorSelected] = useState(false);

  useEffect(() => {
    const fetchEvaluators = async () => {
      try {
        const response = await axios.get("http://localhost:5000/evaluators");
        setEvaluators(response.data);
      } catch (error) {
        console.error("Error fetching evaluators:", error);
      }
    };

    fetchEvaluators();
  }, []);

  const handleEvaluatorChange = (event) => {
    setSelectedEvaluator(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedEvaluator) {
      setIsEvaluatorSelected(true);
    } else {
      alert("กรุณาเลือกผู้ประเมินก่อน");
    }
  };

  return (
    <div className="container">
      <form>
        {!isEvaluatorSelected ? (
          <div>
            <h3>เลือกผู้ประเมิน</h3>
            <div className="table-container">
              {evaluators.map((evaluator, index) => (
                <label
                  key={index}
                  className={`pointContainer ${
                    selectedEvaluator === evaluator.Name ? "selected" : ""
                  }`}
                  htmlFor={`evaluator-${index}`}
                >
                  <input
                    type="radio"
                    id={`evaluator-${index}`}
                    name="evaluator"
                    value={evaluator.Name}
                    checked={selectedEvaluator === evaluator.Name}
                    onChange={handleEvaluatorChange}
                    className="hidden-radio"
                  />
                  {evaluator.Name} <br />({evaluator.Department})
                </label>
              ))}
              <button type="button" onClick={handleConfirm}>
                ยืนยัน
              </button>
            </div>
          </div>
        ) : (
          <div>ผู้รับการประเมิน : {selectedEvaluator}</div>
        )}
      </form>
    </div>
  );
};

export default Assessor;
