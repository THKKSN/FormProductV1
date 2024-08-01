import React from "react";
import "../style/P3.css";
import RadioOption from "./RadioOption";

const FormP3onetwo = ({ formValues, handleChange }) => {
  return (
    <div>

      <p className="form-group">1.2 กลุ่มงานมอบหมาย</p>

      {/* 1.2.1 ผลสำเร็จของงาน */}
      <p>1.2.1 ผลสำเร็จของงาน</p>
      {["100", "85", "70", "50", "30"].map((value, index) => (
        <RadioOption
          key={`finally-${index + 1}`}
          id={`finally-${index + 1}`}
          name="finally"
          value={value}
          checked={formValues.finally === value}
          onChange={handleChange}
          label={`ผลงาน${index === 0 ? "สำเร็จตามเป้าหมายโดยสมบูรณ์" : 
                  index === 1 ? "ส่วนใหญ่สำเร็จตรงตามเป้าหมาย" :
                  index === 2 ? "โดยเฉลี่ยตรงตามเป้าหมาย" :
                  index === 3 ? "ส่วนน้อยที่ตรงตามเป้าหมาย" :
                  "ไม่สำเร็จหรือผิดเป้าหมาย"} (${value})`}
        />
      ))}

      {/* 1.2.2 คุณภาพผลงาน */}
      <p>1.2.2 คุณภาพผลงาน</p>
      {["50", "43", "35", "25", "15"].map((value, index) => (
        <RadioOption
          key={`qualityOfWork-${index + 1}`}
          id={`qualityOfWork-${index + 1}`}
          name="qualityOfWork"
          value={value}
          checked={formValues.qualityOfWork === value}
          onChange={handleChange}
          label={`ผลงาน${index === 0 ? "มีความละเอียดรอบคอบ สมบูรณ์ครบถ้วนเกินกว่าที่คาดหวังเป็นอย่างมาก" : 
                  index === 1 ? "มีความละเอียดรอบคอบ สมบูรณ์ครบถ้วนเกินกว่าที่คาดหวัง" :
                  index === 2 ? "มีความละเอียดรอบคอบ สมบูรณ์ครบถ้วนเป็นไปตามมาตรฐานที่คาดหวัง" :
                  index === 3 ? "มีบกพร่องเพียงเล็กน้อย" :
                  "มีข้อบกพร่อง ต่ำกว่าเกณฑ์มาตรฐานในระดับต่ำสุดที่ยอมรับได้ และไม่ทำให้เกิดความเสียหายต่องาน"} (${value})`}
        />
      ))}

      {/* 1.2.3 ความเชื่อถือได้ของผลงาน */}
      <p>1.2.3 ความเชื่อถือได้ของผลงาน</p>
      {["50", "43", "35", "25", "15"].map((value, index) => (
        <RadioOption
          key={`reliabilityOfTheWork-${index + 1}`}
          id={`reliabilityOfTheWork-${index + 1}`}
          name="reliabilityOfTheWork"
          value={value}
          checked={formValues.reliabilityOfTheWork === value}
          onChange={handleChange}
          label={`ผลงาน${index === 0 ? "เชื่อถือได้ และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งทั้งหมด" : 
                  index === 1 ? "ส่วนใหญ่เชื่อถือได้ และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง" :
                  index === 2 ? "เชื่อถือได้พอสมควร และค่อนข้างจะถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง" :
                  index === 3 ? "มีบกพร่องเพียงเล็กน้อย" :
                  "มีข้อบกพร่อง ต่ำกว่าเกณฑ์มาตรฐานในระดับต่ำสุดที่ยอมรับได้ และไม่ทำให้เกิดความเสียหายต่องาน"} (${value})`}
        />
      ))}

      {/* 1.2.4 ความทันเวลา */}
      <p>1.2.4 ความทันเวลา</p>
      {["50", "43", "35", "25", "15"].map((value, index) => (
        <RadioOption
          key={`timeLiness-${index + 1}`}
          id={`timeLiness-${index + 1}`}
          name="timeLiness"
          value={value}
          checked={formValues.timeLiness === value}
          onChange={handleChange}
          label={`ทำงานสำเร็จก่อนเวลาที่กำหนด${index === 0 ? "มาก และมีเวลาเหลือเพื่อพิจารณาทบทวน" : 
                  index === 1 ? "สำเร็จก่อนเวลาที่กำหนด" :
                  index === 2 ? "ตามระยะเวลาที่กำหนด" :
                  index === 3 ? "โดยใช้ระยะเวลาเกินกว่าเวลาที่กำหนดเล็กน้อย" :
                  "โดยใช้ระยะเวลานาน เกินกว่าเวลาที่กำหนดเป็นอย่างมาก"} (${value})`}
        />
      ))}
    </div>
  );
};

export default FormP3onetwo;
