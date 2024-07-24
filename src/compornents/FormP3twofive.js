import React from "react";
import "../style/P3.css";

const FormP3twofive = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.5 ความรู้ความสามารถการปฏิบัติงานในหน้าที่</p>
      <p>2.5.1 ความรอบรู้งานในหน้าที่</p>
      <div>
        <label className="point-container table-container" htmlFor="knowledge-1">
          <input
            type="radio"
            id="knowledge-1"
            name="knowledge"
            value="10"
            checked={formValues.knowledge === "10"}
            onChange={handleChange}
          />
          มีความรู้ความสามารถปฏิบัติงานในหน้าที่อย่างดียิ่ง (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="knowledge-2">
          <input
            type="radio"
            id="knowledge-2"
            name="knowledge"
            value="9"
            checked={formValues.knowledge === "9"}
            onChange={handleChange}
          />
          ความรู้ความสามารถปฏิบัติงานในหน้าที่เป็นอย่างดี (9)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="knowledge-3">
          <input
            type="radio"
            id="knowledge-3"
            name="knowledge"
            value="7"
            checked={formValues.knowledge === "7"}
            onChange={handleChange}
          />
          มีความรู้ความสามารถปฏิบัติงานในหน้าที่พอสมควร (7)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="knowledge-4">
          <input
            type="radio"
            id="knowledge-4"
            name="knowledge"
            value="5"
            checked={formValues.knowledge === "5"}
            onChange={handleChange}
          />
          มีความรู้ความสามารถปฏิบัติงานในหน้าที่น้อยมาก (5)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="knowledge-5">
          <input
            type="radio"
            id="knowledge-5"
            name="knowledge"
            value="3"
            checked={formValues.knowledge === "3"}
            onChange={handleChange}
          />
          ไม่มีความรู้ความสามารปฏิบัติงานในหน้าที่ (3)
        </label>
      </div>
      <p>2.5.2 ความสำนึกในหน้าที่</p>
      <div>
        <label className="point-container table-container" htmlFor="sense-1">
          <input
            type="radio"
            id="sense-1"
            name="sense"
            value="10"
            checked={formValues.sense === "10"}
            onChange={handleChange}
          />
          มีความรับผิดชอบสูงในหน้าที่ งานสำเร็จโดยไม่ต้องกำกับดูแล (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="sense-2">
          <input
            type="radio"
            id="sense-2"
            name="sense"
            value="9"
            checked={formValues.sense === "9"}
            onChange={handleChange}
          />
          มีความรับผิดชอบต่องานในหน้าที่ งานสำเร็จโดยกำกับดูแลเล็กน้อย (9)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="sense-3">
          <input
            type="radio"
            id="sense-3"
            name="sense"
            value="7"
            checked={formValues.sense === "7"}
            onChange={handleChange}
          />
          มีความรับผิดชอบต่องานส่วนใหญ่ในหน้าที่ ต้องกำกับดูแลตามสมควร (7)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="sense-4">
          <input
            type="radio"
            id="sense-4"
            name="sense"
            value="5"
            checked={formValues.sense === "5"}
            onChange={handleChange}
          />
          มีความรับผิดชอบต่องานในหน้าที่บางเรื่อง งานสำเร็จถ้ามีการกำกับดูแล (5)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="sense-5">
          <input
            type="radio"
            id="sense-5"
            name="sense"
            value="3"
            checked={formValues.sense === "3"}
            onChange={handleChange}
          />
          ไม่มีความรับผิดชอบ งานไม่สำเร็จเป็นประจำ (3)
        </label>
      </div>
    </div>
  );
};

export default FormP3twofive;
