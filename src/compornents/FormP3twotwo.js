import React from "react";
import "../style/P3.css";
import RadioOption from "./RadioOption";

const FormP3twotwo = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.2 การทำงานเป็นทีม</p>

      {/* 2.2.1 ความสามารถในการติดต่อสื่อสาร */}
      <p>2.2.1 ความสามารถในการติดต่อสื่อสาร</p>
      {["10", "9", "7", "5", "3"].map((value) => (
        <RadioOption
          key={`communication-${value}`}
          id={`communication-${value}`}
          name="communication"
          value={value}
          checked={formValues.communication === value}
          onChange={handleChange}
          label={
            value === "10"
              ? "มีทักษะในการสื่อความหมายได้อย่างกระชับชัดเจนดีเยี่ยม จนเป็นตัวอย่างที่ดีต่อเพื่อนร่วมงาน (10)"
              : value === "9"
              ? "มีทักษะในการสื่อความหมายได้อย่างกระชับ ชัดเจนดี (9)"
              : value === "7"
              ? "มีทักษะในการสื่อความหมายได้ชัดเจน (7)"
              : value === "5"
              ? "สื่อความหมายได้ แต่บางครั้งต้องมีการอธิบายเพิ่ม (5)"
              : "มีปัญหาในการสื่อความหมาย ต้องได้รับคำแนะนำให้ปรับปรุง (3)"
          }
        />
      ))}

      {/* 2.2.2 มนุษยสัมพันธ์ */}
      <p>2.2.2 มนุษยสัมพันธ์</p>
      {["10", "9", "7", "5", "3"].map((value) => (
        <RadioOption
          key={`relationship-${value}`}
          id={`relationship-${value}`}
          name="relationship"
          value={value}
          checked={formValues.relationship === value}
          onChange={handleChange}
          label={
            value === "10"
              ? "มีมนุษยสัมพันธ์ดีเยี่ยมและสามารถสร้างความสัมพันธ์ที่ดีกับเพื่อนร่วมงาน (10)"
              : value === "9"
              ? "มีมนุษยสัมพันธ์ดีและสามารถทำงานร่วมกับผู้อื่นได้ดี (9)"
              : value === "7"
              ? "มีมนุษยสัมพันธ์ที่ดี แต่ยังสามารถปรับปรุงได้ (7)"
              : value === "5"
              ? "มีมนุษยสัมพันธ์ที่พอใช้ แต่บางครั้งมีปัญหาในการทำงานร่วมกัน (5)"
              : "มีปัญหาในการสร้างความสัมพันธ์ที่ดีและทำงานร่วมกัน (3)"
          }
        />
      ))}

      {/* 2.2.3 ความเสียสละ */}
      <p>2.2.3 ความเสียสละ</p>
      {["10", "9", "7", "5", "3"].map((value) => (
        <RadioOption
          key={`sacrifice-${value}`}
          id={`sacrifice-${value}`}
          name="sacrifice"
          value={value}
          checked={formValues.sacrifice === value}
          onChange={handleChange}
          label={
            value === "10"
              ? "อาสาสมัครเข้าปฏิบัติงานในทุกโอกาสด้วยความเต็มใจ (10)"
              : value === "9"
              ? "ยินดีที่จะปฏิบัติงานเมื่อไม่มีคนสมัครใจ (9)"
              : value === "7"
              ? "ยินดีปฏิบัติงานตามคำสั่งทั้งในและนอกเวลางาน (7)"
              : value === "5"
              ? "ยินดีปฏิบัติงานถ้าไม่กระทบเรื่องส่วนตัว (5)"
              : "มีพฤติกรรมในการหลบเลี่ยงงาน (3)"
          }
        />
      ))}

      {/* 2.2.4 ความร่วมมือ */}
      <p>2.2.4 ความร่วมมือ</p>
      {["10", "9", "7", "5", "3"].map((value) => (
        <RadioOption
          key={`cooperate-${value}`}
          id={`cooperate-${value}`}
          name="cooperate"
          value={value}
          checked={formValues.cooperate === value}
          onChange={handleChange}
          label={
            value === "10"
              ? "มีความตั้งใจและเต็มใจให้ความร่วมมือในการปฏิบัติงานร่วมกันจนบรรลุผลอย่างมีประสิทธิภาพอย่างเต็มที่ (10)"
              : value === "9"
              ? "มีความตั้งใจและให้ความร่วมมือในการปฏิบัติงานร่วมกันจนบรรลุผลอย่างมีประสิทธิภาพ (9)"
              : value === "7"
              ? "มีความตั้งใจที่จะทำงานและร่วมมือปฏิบัติงานร่วมกับผู้อื่น (7)"
              : value === "5"
              ? "มีความร่วมมือในการปฏิบัติงานตามหน้าที่พอสมควร (5)"
              : "มักมีข้อขัดแย้งในการร่วมมือกับผู้อื่นอย่างไม่มีเหตุผล (3)"
          }
        />
      ))}
    </div>
  );
};

export default FormP3twotwo;
