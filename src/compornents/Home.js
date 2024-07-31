import React, { useState } from "react";
import "../style/Home.css"; // Import your CSS file

const Home = () => {
  const [selectedEvaluator, setSelectedEvaluator] = useState("");
  const [isEvaluatorSelected, setIsEvaluatorSelected] = useState(false);
//   const username = process.env.REACT_APP_USERNAME;
//   const password = process.env.REACT_APP_PASSWORD;
  
  // ใช้ตัวแปรในฟอร์มหรือการประเมิน
  
  const evaluators = [
    { name: "นายทายวุฒิ สุภัคนิกร", position: "หัวหน้านักวิชาการคอมพิวเตอร์" },
    { name: "นางสาวกรสุดา ถนอมชาติ", position: "ผู้ช่วยหัวหน้าแผนกนักวิชาการคอมพิวเตอร์" },
    { name: "นายสาวณัฏฐานันตร์ จันทร์เมือง", position: "นักวิชาการคอมพิวเตอร์ 5" },
    { name: "นางสาวกันย์ลภัส ทองสุข", position: "นักวิชาการคอมพิวเตอร์" },
  ];

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
                  className={`point-container ${
                    selectedEvaluator === evaluator.name ? "selected" : ""
                  }`}
                  htmlFor={`evaluator-${index}`}
                >
                  <input
                    type="radio"
                    id={`evaluator-${index}`}
                    name="evaluator"
                    value={evaluator.name}
                    checked={selectedEvaluator === evaluator.name}
                    onChange={handleEvaluatorChange}
                    className="hidden-radio"
                  />
                  {evaluator.name} <br />({evaluator.position})
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

export default Home;
