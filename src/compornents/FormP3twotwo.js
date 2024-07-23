import React from "react";
import "../style/P3.css";

const FormP3twotwo = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.2 การทำงานเป็นทีม</p>
      <p>2.2.1 ความสามารถในการติดต่อสื่อสาร</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="communication-1"
        >
          <input
            type="radio"
            id="communication-1"
            name="communication"
            value="10"
            checked={formValues.communication === "10"}
            onChange={handleChange}
          />
          มีทักษะในการสื่อความหมายได้อย่างกระชับชัดเจนดีเยี่ยม
          จนเป็นตัวอย่างที่ดีต่อเพื่อนร่วมงาน (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="communication-2"
        >
          <input
            type="radio"
            id="communication-2"
            name="communication"
            value="9"
            checked={formValues.communication === "9"}
            onChange={handleChange}
          />
          มีทักษะในการสื่อความหมายได้อย่างกระชับ ชัดเจนดี (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="communication-3"
        >
          <input
            type="radio"
            id="communication-3"
            name="communication"
            value="7"
            checked={formValues.communication === "7"}
            onChange={handleChange}
          />
          มีทักษะในการสื่อความหมายได้ชัดเจน (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="communication-4"
        >
          <input
            type="radio"
            id="communication-4"
            name="communication"
            value="5"
            checked={formValues.communication === "5"}
            onChange={handleChange}
          />
          สื่อความหมายได้ แต่บางครั้งต้องมีการอธิบายเพิ่ม (5)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="communication-5"
        >
          <input
            type="radio"
            id="communication-5"
            name="communication"
            value="3"
            checked={formValues.communication === "3"}
            onChange={handleChange}
          />
          มีปัญหาในการสื่อความหมาย ต้องได้รับคำแนะนำให้ปรับปรุง (3)
        </label>
      </div>
      <p>2.2.2 มนุษยสัมพันธ์</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="relationship-1"
        >
          <input
            type="radio"
            id="relationship-1"
            name="relationship"
            value="10"
            checked={formValues.relationship === "10"}
            onChange={handleChange}
          />
          มีทักษะในการสื่อความหมายได้อย่างกระชับชัดเจนดีเยี่ยม
          จนเป็นตัวอย่างที่ดีต่อเพื่อนร่วมงาน (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="relationship-2"
        >
          <input
            type="radio"
            id="relationship-2"
            name="relationship"
            value="9"
            checked={formValues.relationship === "9"}
            onChange={handleChange}
          />
          มีทักษะในการสื่อความหมายได้อย่างกระชับ ชัดเจนดี (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="relationship-3"
        >
          <input
            type="radio"
            id="relationship-3"
            name="relationship"
            value="7"
            checked={formValues.relationship === "7"}
            onChange={handleChange}
          />
            มีทักษะในการสื่อความหมายได้ชัดเจน (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="relationship-4"
        >
          <input
            type="radio"
            id="relationship-4"
            name="relationship"
            value="5"
            checked={formValues.relationship === "5"}
            onChange={handleChange}
          />
          สื่อความหมายได้ แต่บางครั้งต้องมีการอธิบายเพิ่ม (5)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="relationship-5"
        >
          <input
            type="radio"
            id="relationship-5"
            name="relationship"
            value="3"
            checked={formValues.relationship === "3"}
            onChange={handleChange}
          />
          มีปัญหาในการสื่อความหมาย ต้องได้รับคำแนะนำให้ปรับปรุง (3)
        </label>
      </div>
      <p>2.2.3 ความเสียสละ</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="sacrifice-1"
        >
          <input
            type="radio"
            id="sacrifice-1"
            name="sacrifice"
            value="10"
            checked={formValues.sacrifice === "10"}
            onChange={handleChange}
          />
          อาสาสมัครเข้าปฏิบัติงานในทุกโอกาสด้วยความเต็มใจ (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="sacrifice-2"
        >
          <input
            type="radio"
            id="sacrifice-2"
            name="sacrifice"
            value="9"
            checked={formValues.sacrifice === "9"}
            onChange={handleChange}
          />
          ยินดีที่จะปฏิบัติงานเมื่อไม่มีคนสมัครใจ (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="sacrifice-3"
        >
          <input
            type="radio"
            id="sacrifice-3"
            name="sacrifice"
            value="7"
            checked={formValues.sacrifice === "7"}
            onChange={handleChange}
          />
          ยินดีปฏิบัติงานตามคำสั่งทั้งในและนอกเวลางาน (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="sacrifice-4"
        >
          <input
            type="radio"
            id="sacrifice-4"
            name="sacrifice"
            value="5"
            checked={formValues.sacrifice === "5"}
            onChange={handleChange}
          />
          ยินดีปฏิบัติงานถ้าไม่กระทบเรื่องส่วนตัว(เลือกงาน) (5)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="sacrifice-5"
        >
          <input
            type="radio"
            id="sacrifice-5"
            name="sacrifice"
            value="3"
            checked={formValues.sacrifice === "3"}
            onChange={handleChange}
          />
          มีพฤติกรรมในการหลบเลี่ยงงาน (3)
        </label>
      </div>
      <p>2.2.4 ความร่วมมือ</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="cooperation-1"
        >
          <input
            type="radio"
            id="cooperation-1"
            name="cooperation"
            value="10"
            checked={formValues.cooperation === "10"}
            onChange={handleChange}
          />
          มีความตั้งใจและเต็มใจให้ความร่วมมือในการปฏิบัติงานร่วมกันจนบรรลุผลอย่างมีประสิทธิภาพอย่างเต็มที่ (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="cooperation-2"
        >
          <input
            type="radio"
            id="cooperation-2"
            name="cooperation"
            value="9"
            checked={formValues.cooperation === "9"}
            onChange={handleChange}
          />
          ยินดีที่จะปฏิบัติงานเมื่อไม่มีคนสมัครใจ (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="cooperation-3"
        >
          <input
            type="radio"
            id="cooperation-3"
            name="cooperation"
            value="7"
            checked={formValues.cooperation === "7"}
            onChange={handleChange}
          />
          ยินดีปฏิบัติงานตามคำสั่งทั้งในและนอกเวลางาน (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="cooperation-4"
        >
          <input
            type="radio"
            id="cooperation-4"
            name="cooperation"
            value="5"
            checked={formValues.cooperation === "5"}
            onChange={handleChange}
          />
          ยินดีปฏิบัติงานถ้าไม่กระทบเรื่องส่วนตัว(เลือกงาน) (5)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="cooperation-5"
        >
          <input
            type="radio"
            id="cooperation-5"
            name="cooperation"
            value="3"
            checked={formValues.cooperation === "3"}
            onChange={handleChange}
          />
          มีพฤติกรรมในการหลบเลี่ยงงาน (3)
        </label>
      </div>
    </div>
  );
};

export default FormP3twotwo;
