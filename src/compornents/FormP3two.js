import React from "react";
import "../style/P3.css";
import RadioOption from "./RadioOption"; // Adjust the import path as needed

const FormP3two = ({ formValues, handleChange }) => {
  return (
    <div>
      <br />
      <h6>2. สมรรถนะกำลังพล</h6>
      <p className="form-group">2.1 คุณลักษณะ</p>

      {/* 2.1.1 บุคลิกภาพ */}
      <p>2.1.1 บุคลิกภาพ</p>
      {[
        { value: "15", label: "ปริมาณงานที่ทำได้มากกว่าที่ได้รับตามหน้าที่เป็นอย่างมาก (15)" },
        { value: "13", label: "มีการแสดงออก ทางกาย วาจา และอารมณ์ ดี (13)" },
        { value: "11", label: "มีการแสดงออก ทางกาย วาจา และอารมณ์ เหมาะสม (11)" },
        { value: "8", label: "มีการแสดงออก ทางกาย วาจา และอารมณ์ เหมาะสมบางส่วนและบางส่วนต้องได้รับการปรับปรุงแก้ไข (8)" },
        { value: "5", label: "มีการแสดงออก ทางกาย วาจา และอารมณ์ ต้องได้รับการปรับปรุง (5)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`personality-${value}`}
          id={`personality-${value}`}
          name="personality"
          value={value}
          checked={formValues.personality === value}
          onChange={handleChange}
          label={label}
        />
      ))}

      {/* 2.1.2 การรักษาวินัย */}
      <p>2.1.2 การรักษาวินัย</p>
      {[
        { value: "15", label: "เข้าใจคำสั่ง และปฏิบัติตามได้เป็นอย่างเคร่งครัด ด้วยความเต็มใจ และถูกต้องเสมอ (15)" },
        { value: "13", label: "เข้าใจคำสั่ง และปฏิบัติตาม ด้วยความเต็มใจ และถูกต้อง (13)" },
        { value: "11", label: "ปฏิบัติตามคำสั่ง ด้วยความเต็มใจ (11)" },
        { value: "8", label: "ปฏิบัติตามคำสั่ง คำแนะนำตามสมควร (8)" },
        { value: "5", label: "ไม่ใส่ใจต่อคำสั่งเท่าที่ควร ทำให้เกิดความผิดพลาดบ่อยครั้ง (5)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`maintaining-${value}`}
          id={`maintaining-${value}`}
          name="maintaining"
          value={value}
          checked={formValues.maintaining === value}
          onChange={handleChange}
          label={label}
        />
      ))}
    </div>
  );
};

export default FormP3two;
