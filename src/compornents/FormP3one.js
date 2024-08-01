import React from "react";
import "../style/P3.css";
import RadioOption from "./RadioOption";

const FormP3one = ({ formValues, handleChange }) => {
  return (
    <div>
      <h5>ตอนที่ 3 การประเมินค่า ฯ</h5>
      <h6>ผลสัมฤทธิ์ของงาน</h6>

      <p className="form-group">1.1 กลุ่มงานประจำ</p>
      
      {/* Quantity Section */}
      <p>1.1.1 ปริมาณงาน</p>
      {["20", "17", "14", "10", "6"].map((value, index) => (
        <RadioOption
          key={`quantity-${index + 1}`}
          id={`quantity-${index + 1}`}
          name="quantity"
          value={value}
          checked={formValues.quantity === value}
          onChange={handleChange}
          label={`ปริมาณงานที่ทำได้${index === 0 ? "มากกว่าที่ได้รับตามหน้าที่เป็นอย่างมาก" : 
                  index === 1 ? "มากกว่าที่ได้รับตามหน้าที่" :
                  index === 2 ? "เป็นไปตามที่ได้รับตามหน้าที่" :
                  index === 3 ? "ต่ำกว่าที่ได้รับตามหน้าที่เล็กน้อย" :
                  "ต่ำกว่าที่ได้รับตามหน้าที่เป็นอย่างมาก"} (${value})`}
        />
      ))}

      {/* Achievement Section */}
      <p>1.1.2 ผลสำเร็จของงาน</p>
      {["20", "17", "14", "10", "6"].map((value, index) => (
        <RadioOption
          key={`achievement-${index + 1}`}
          id={`achievement-${index + 1}`}
          name="achievement"
          value={value}
          checked={formValues.achievement === value}
          onChange={handleChange}
          label={`ผลงาน${index === 0 ? "สำเร็จตามเป้าหมายโดยสมบูรณ์" : 
                  index === 1 ? "ส่วนใหญ่สำเร็จตรงตามเป้าหมาย" :
                  index === 2 ? "โดยเฉลี่ยตรงตามเป้าหมาย" :
                  index === 3 ? "ส่วนน้อยที่ตรงตามเป้าหมาย" :
                  "ไม่สำเร็จหรือผิดเป้าหมาย"} (${value})`}
        />
      ))}

      {/* Reliability Section */}
      <p>1.1.3 ความเชื่อถือได้ของผลงาน</p>
      {["20", "17", "14", "10", "6"].map((value, index) => (
        <RadioOption
          key={`reliability-${index + 1}`}
          id={`reliability-${index + 1}`}
          name="reliability"
          value={value}
          checked={formValues.reliability === value}
          onChange={handleChange}
          label={`ผลงาน${index === 0 ? "เชื่อถือได้และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งทั้งหมด" : 
                  index === 1 ? "ส่วนใหญ่เชื่อถือได้และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง" :
                  index === 2 ? "เชื่อถือได้พอสมควรและค่อนข้างจะถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง" :
                  index === 3 ? "ส่วนน้อยเชื่อถือได้ และใช้หลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งบ้าง" :
                  "เชื่อถือไม่ค่อยได้ ไม่ใช้หลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งใด ๆ"} (${value})`}
        />
      ))}

      {/* Timeliness Section */}
      <p>1.1.4 ความทันเวลา</p>
      {["20", "17", "14", "10", "6"].map((value, index) => (
        <RadioOption
          key={`justinTime-${index + 1}`}
          id={`justinTime-${index + 1}`}
          name="justinTime"
          value={value}
          checked={formValues.justinTime === value}
          onChange={handleChange}
          label={`ทำงานสำเร็จก่อนเวลาที่กำหนด${index === 0 ? "มาก และมีเวลาเหลือเพื่อพิจารณาทบทวน" : 
                  index === 1 ? "" :
                  index === 2 ? "ตามระยะเวลาที่กำหนด" :
                  index === 3 ? "โดยใช้ระยะเวลาเกินกว่าเวลาที่กำหนดเล็กน้อย" :
                  "โดยใช้ระยะเวลานาน เกินกว่าเวลาที่กำหนดเป็นอย่างมาก"} (${value})`}
        />
      ))}

      {/* Saving Section */}
      <p>1.1.5 การประหยัด</p>
      {["20", "17", "14", "10", "6"].map((value, index) => (
        <RadioOption
          key={`saving-${index + 1}`}
          id={`saving-${index + 1}`}
          name="saving"
          value={value}
          checked={formValues.saving === value}
          onChange={handleChange}
          label={`ใช้ทรัพยากร${index === 0 ? "อย่างประหยัดและคุ้มค่าเป็นอย่างมาก" : 
                  index === 1 ? "อย่างประหยัดและคุ้มค่า" :
                  index === 2 ? "อย่างประหยัดตามที่ได้รับการแจกจ่าย" :
                  index === 3 ? "เกินกว่าที่ได้รับการแจกจ่ายเล็กน้อย" :
                  "มาก เกิดการสูญเสียโดยไม่จำเป็น"} (${value})`}
        />
      ))}
    </div>
  );
};

export default FormP3one;
