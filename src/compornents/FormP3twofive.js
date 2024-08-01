import React from "react";
import "../style/P3.css";
import RadioOption from "./RadioOption";

const FormP3twofive = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.5 ความรู้ความสามารถการปฏิบัติงานในหน้าที่</p>

      <p>2.5.1 ความรอบรู้งานในหน้าที่</p>
      {[
        { value: "10", label: "มีความรู้ความสามารถปฏิบัติงานในหน้าที่อย่างดียิ่ง (10)" },
        { value: "9", label: "ความรู้ความสามารถปฏิบัติงานในหน้าที่เป็นอย่างดี (9)" },
        { value: "7", label: "มีความรู้ความสามารถปฏิบัติงานในหน้าที่พอสมควร (7)" },
        { value: "5", label: "มีความรู้ความสามารถปฏิบัติงานในหน้าที่น้อยมาก (5)" },
        { value: "3", label: "ไม่มีความรู้ความสามารถปฏิบัติงานในหน้าที่ (3)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`knowledge-${value}`}
          id={`knowledge-${value}`}
          name="knowledge"
          value={value}
          checked={formValues.knowledge === value}
          onChange={handleChange}
          label={label}
        />
      ))}

      <p>2.5.2 ความสำนึกในหน้าที่</p>
      {[
        { value: "10", label: "มีความรับผิดชอบสูงในหน้าที่ งานสำเร็จโดยไม่ต้องกำกับดูแล (10)" },
        { value: "9", label: "มีความรับผิดชอบต่องานในหน้าที่ งานสำเร็จโดยกำกับดูแลเล็กน้อย (9)" },
        { value: "7", label: "มีความรับผิดชอบต่องานส่วนใหญ่ในหน้าที่ ต้องกำกับดูแลตามสมควร (7)" },
        { value: "5", label: "มีความรับผิดชอบต่องานในหน้าที่บางเรื่อง งานสำเร็จถ้ามีการกำกับดูแล (5)" },
        { value: "3", label: "ไม่มีความรับผิดชอบ งานไม่สำเร็จเป็นประจำ (3)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`sense-${value}`}
          id={`sense-${value}`}
          name="sense"
          value={value}
          checked={formValues.sense === value}
          onChange={handleChange}
          label={label}
        />
      ))}
    </div>
  );
};

export default FormP3twofive;
