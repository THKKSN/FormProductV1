import React from "react";
import "../style/P3.css";

const FormP3twofour = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.4 มุ่งเน้นผลสัมฤทธิ์</p>
      <p>2.4.1 ความมุ่งเน้นผลสัมฤทธิ์</p>
      <div>
        <label className="point-container table-container" htmlFor="focus-1">
          <input
            type="radio"
            id="focus-1"
            name="focus"
            value="10"
            checked={formValues.focus === "10"}
            onChange={handleChange}
          />
          มีความมุ่งมั่นปฏิบัติหน้าที่จนบรรลุผลอย่างมีประสิทธิภาพอย่างเต็มที่
          (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="focus-2">
          <input
            type="radio"
            id="focus-2"
            name="focus"
            value="9"
            checked={formValues.focus === "9"}
            onChange={handleChange}
          />
          มีความมุ่งมั่นปฏิบัติงานจนบรรลุผลอย่างมีประสิทธิภาพ (9)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="focus-3">
          <input
            type="radio"
            id="focus-3"
            name="focus"
            value="7"
            checked={formValues.focus === "7"}
            onChange={handleChange}
          />
          มีความตั้งใจที่จะทำงาน และร่วมมือปฏิบัติงานร่วมกับผู้อื่น (7)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="focus-4">
          <input
            type="radio"
            id="focus-4"
            name="focus"
            value="5"
            checked={formValues.focus === "5"}
            onChange={handleChange}
          />
          มีความตั้งใจในการปฏิบัติงานตามหน้าที่พอสมควร (5)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="focus-5">
          <input
            type="radio"
            id="focus-5"
            name="focus"
            value="3"
            checked={formValues.focus === "3"}
            onChange={handleChange}
          />
          ละเลยการปฏิบัติหน้าที่ (3)
        </label>
      </div>
      <p>2.4.2 ความริเริ่ม</p>
      <div>
        <label className="point-container table-container" htmlFor="initiative-1">
          <input
            type="radio"
            id="initiative-1"
            name="initiative"
            value="10"
            checked={formValues.initiative === "10"}
            onChange={handleChange}
          />
          คิดและวางแผนการปฏิบัติงานได้เอง ไม่ต้องรอรับคำสั่ง/คำแนะนำจากผู้ใด (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="initiative-2">
          <input
            type="radio"
            id="initiative-2"
            name="initiative"
            value="9"
            checked={formValues.initiative === "9"}
            onChange={handleChange}
          />
          ปฏิบัติงานในความรับผิดชอบตามลำพังได้ดี (9)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="initiative-3">
          <input
            type="radio"
            id="initiative-3"
            name="initiative"
            value="7"
            checked={formValues.initiative === "7"}
            onChange={handleChange}
          />
          ปฏิบัติงานในความรับผิดชอบของตนเองได้พอใช้ (7)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="initiative-4">
          <input
            type="radio"
            id="initiative-4"
            name="initiative"
            value="5"
            checked={formValues.initiative === "5"}
            onChange={handleChange}
          />
          ปฏิบัติงานในความรับผิดชอบของตนเองได้เล็กน้อย (5)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="initiative-5">
          <input
            type="radio"
            id="initiative-5"
            name="initiative"
            value="3"
            checked={formValues.initiative === "3"}
            onChange={handleChange}
          />
          ต้องมีผู้แนะนำจึงทำงานได้ภายในกรอบ (3)
        </label>
      </div>
    </div>
  );
};

export default FormP3twofour;
