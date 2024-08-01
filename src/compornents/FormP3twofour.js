import React from "react";
import "../style/P3.css";

// Reusable RadioOption component
const RadioOption = ({ id, name, value, checked, onChange, label }) => (
  <div>
    <label
      className={`point-container ${checked ? "selected" : ""}`}
      htmlFor={id}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden-radio"
      />
      {label}
    </label>
  </div>
);

const FormP3twofour = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.4 มุ่งเน้นผลสัมฤทธิ์</p>
      
      <p>2.4.1 ความมุ่งเน้นผลสัมฤทธิ์</p>
      {[
        { value: "10", label: "มีความมุ่งมั่นปฏิบัติหน้าที่จนบรรลุผลอย่างมีประสิทธิภาพอย่างเต็มที่ (10)" },
        { value: "9", label: "มีความมุ่งมั่นปฏิบัติงานจนบรรลุผลอย่างมีประสิทธิภาพ (9)" },
        { value: "7", label: "มีความตั้งใจที่จะทำงาน และร่วมมือปฏิบัติงานร่วมกับผู้อื่น (7)" },
        { value: "5", label: "มีความตั้งใจในการปฏิบัติงานตามหน้าที่พอสมควร (5)" },
        { value: "3", label: "ละเลยการปฏิบัติหน้าที่ (3)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`focus-${value}`}
          id={`focus-${value}`}
          name="focus"
          value={value}
          checked={formValues.focus === value}
          onChange={handleChange}
          label={label}
        />
      ))}

      <p>2.4.2 ความริเริ่ม</p>
      {[
        { value: "10", label: "คิดและวางแผนการปฏิบัติงานได้เอง ไม่ต้องรอรับคำสั่ง/คำแนะนำจากผู้ใด (10)" },
        { value: "9", label: "ปฏิบัติงานในความรับผิดชอบตามลำพังได้ดี (9)" },
        { value: "7", label: "ปฏิบัติงานในความรับผิดชอบของตนเองได้พอใช้ (7)" },
        { value: "5", label: "ปฏิบัติงานในความรับผิดชอบของตนเองได้เล็กน้อย (5)" },
        { value: "3", label: "ต้องมีผู้แนะนำจึงทำงานได้ภายในกรอบ (3)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`initiative-${value}`}
          id={`initiative-${value}`}
          name="initiative"
          value={value}
          checked={formValues.initiative === value}
          onChange={handleChange}
          label={label}
        />
      ))}
    </div>
  );
};

export default FormP3twofour;
