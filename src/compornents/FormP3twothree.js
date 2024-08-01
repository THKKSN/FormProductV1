import React from "react";
import "../style/P3.css";
import RadioOption from "./RadioOption"; // Adjust the import path as needed

const FormP3twothree = ({ formValues, handleChange }) => {
  const conductOptions = [
    { value: "10", label: "มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรมซื่อสัตย์สุจริต เชื่อถือได้และเป็นแบบอย่างที่ดีให้แก่ผู้อื่น (10)" },
    { value: "9", label: "มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรม ซื่อสัตย์สุจริต เชื่อถือได้ (9)" },
    { value: "7", label: "มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรม ซื่อสัตย์สุจริต (7)" },
    { value: "5", label: "มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรม ซื่อสัตย์สุจริต โดยมีการว่ากล่าว ตักเตือนบ้างเป็นบางครั้ง (5)" },
    { value: "3", label: "มีการประพฤติปฏิบัติตนไม่เหมาะสม มีการว่ากล่าวตักเตือนเป็นประจำ (3)" }
  ];

  const punctualityOptions = [
    { value: "10", label: "มาทำงานก่อนเวลาและทำงานจนเสร็จ แม้จะเลยเวลาปฏิบัติงานไปแล้วเป็นประจำ (10)" },
    { value: "9", label: "มาทำงานก่อนเวลาและทำงานจนเสร็จ แม้จะเลยเวลาปฏิบัติงานบางโอกาส (9)" },
    { value: "7", label: "มาทำงานสม่ำเสมอตลอดเวลา เริ่มและเลิกงานตามเวลาที่ทางหน่วยงานกำหนด (7)" },
    { value: "5", label: "มาทำงานตามเวลาเป็นส่วนใหญ่ มีการมาสาย และกลับก่อนในบางโอกาส (5)" },
    { value: "3", label: "มาทำงานต่ำกว่ามาตรฐาน มาสาย หรือกลับก่อนเวลาเป็นประจำ (3)" }
  ];

  return (
    <div>
      <p className="form-group">2.3 คุณธรรมและจริยธรรม</p>

      <p>2.3.1 การปฏิบัติตน</p>
      {conductOptions.map(option => (
        <RadioOption
          key={option.value}
          id={`conduct-${option.value}`}
          name="conduct"
          value={option.value}
          checked={formValues.conduct === option.value}
          onChange={handleChange}
          label={option.label}
        />
      ))}

      <p>2.3.2 การตรงต่อเวลา</p>
      {punctualityOptions.map(option => (
        <RadioOption
          key={option.value}
          id={`punctuality-${option.value}`}
          name="punctuality"
          value={option.value}
          checked={formValues.punctuality === option.value}
          onChange={handleChange}
          label={option.label}
        />
      ))}
    </div>
  );
};

export default FormP3twothree;
