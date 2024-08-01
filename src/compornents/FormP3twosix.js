import React from "react";
import "../style/P3.css";
import RadioOption from "./RadioOption";

const FormP3twosix = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.6 การบริหารจัดการ</p>
      
      <p>2.6.1 การพัฒนาตนและผู้ใต้บังคับบัญชาหรือเพื่อนร่วมงาน</p>
      {[
        { value: "10", label: "มีการเรียนรู้อยู่ตลอดเวลา และแนะนำผู้ใต้บังคับบัญชา หรือเพื่อนร่วมงานได้อย่างดีเยี่ยม (10)" },
        { value: "9", label: "มีการเรียนรู้อยู่ตลอดเวลา และแนะนำผู้ใต้บังคับบัญชา หรือเพื่อนร่วมงานได้อย่างดี (9)" },
        { value: "7", label: "มีการเรียนรู้อยู่ตลอดเวลา และแนะนำผู้ใต้บังคับบัญชา หรือเพื่อนร่วมงาน (7)" },
        { value: "5", label: "มีความสนใจพัฒนาตนเอง และแนะนำผู้ใต้บังคับบัญชา หรือเพื่อนร่วมงานพอสมควร (5)" },
        { value: "3", label: "ไม่แสดงคุณลักษณะด้านนี้อย่างชัดเจน (3)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`development-${value}`}
          id={`development-${value}`}
          name="development"
          value={value}
          checked={formValues.development === value}
          onChange={handleChange}
          label={label}
        />
      ))}

      <p>2.6.2 วิสัยทัศน์และความคิดในภาพรวม</p>
      {[
        { value: "10", label: "มีการวางแผนจัดระบบงาน ก่อนการปฏิบัติงานทุกครั้ง (10)" },
        { value: "9", label: "มีการวางแผนจัดระบบงาน ก่อนการปฏิบัติงานเป็นส่วนใหญ่ (9)" },
        { value: "7", label: "มีการวางแผนจัดระบบงานพอสมควร และมีการแก้ไขเพิ่มเติม เป็นบางครั้ง (7)" },
        { value: "5", label: "มีการวางแผนจัดระบบงานบ้าง และผู้บังคับบัญชาแนะนำเป็นครั้งคราว (5)" },
        { value: "3", label: "ผู้บังคับบัญชาแนะนำและจัดระบบงานให้ทุกครั้ง (3)" },
      ].map(({ value, label }) => (
        <RadioOption
          key={`vision-${value}`}
          id={`vision-${value}`}
          name="vision"
          value={value}
          checked={formValues.vision === value}
          onChange={handleChange}
          label={label}
        />
      ))}
    </div>
  );
};

export default FormP3twosix;
