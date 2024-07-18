import React, { useState } from "react";
import "../style/P3.css";

const FormP3 = () => {
  const [formValues, setFormValues] = useState({
    quantity: 0,
    achievement: 0,
    reliability: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit form data
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h5>ตอนที่ 3 การประเมินค่า ฯ (ผู้ประเมินเป็นผู้กรอก)</h5>
      <p>ผลสัมฤทธิ์ของงาน</p>
      <p>1.1 กลุ่มงานประจำ</p>
      <div>
        <p>1.1.1 ปริมาณงาน</p>
      <div>
        <label className="point-container table-container" htmlFor="quantity-1">
          <input
            type="radio"
            id="quantity-1"
            name="quantity"
            value="20"
            checked={formValues.quantity === "20"}
            onChange={handleChange}
          />
          ปริมาณงานที่ทำได้มากกว่าที่ได้รับตามหน้าที่เป็นอย่างมาก (20)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="quantity-2">
          <input
            type="radio"
            id="quantity-2"
            name="quantity"
            value="17"
            checked={formValues.quantity === "17"}
            onChange={handleChange}
          />
          ปริมาณงานที่ทำได้มากกว่าที่ได้รับตามหน้าที่ (17)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="quantity-3">
          <input
            type="radio"
            id="quantity-3"
            name="quantity"
            value="14"
            checked={formValues.quantity === "14"}
            onChange={handleChange}
          />
          ปริมาณงานที่ทำได้เป็นไปตามที่ได้รับตามหน้าที่ (14)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="quantity-4">
          <input
            type="radio"
            id="quantity-4"
            name="quantity"
            value="10"
            checked={formValues.quantity === "10"}
            onChange={handleChange}
          />
          ปริมาณงานที่ทำได้ต่ำกว่าที่ได้รับตามหน้าที่เล็กน้อย (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="quantity-5">
          <input
            type="radio"
            id="quantity-5"
            name="quantity"
            value="6"
            checked={formValues.quantity === "6"}
            onChange={handleChange}
          />
          ปริมาณงานที่ทำได้ต่ำกว่าที่ได้รับตามหน้าที่เป็นอย่างมาก (6)
        </label>
      </div>
      </div>
      
      {/* ... add other radio buttons for quantity */}

      <p>1.1.2 ผลสำเร็จของงาน</p>
      <div>
        <label className="point-container table-container" htmlFor="achievement-1">
          <input
            type="radio"
            id="achievement-1"
            name="achievement"
            value="20"
            checked={formValues.achievement === "20"}
            onChange={handleChange}
          />
          ผลงานสำเร็จตามเป้าหมายโดยสมบูรณ์ (20)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="achievement-2">
          <input
            type="radio"
            id="achievement-2"
            name="achievement"
            value="17"
            checked={formValues.achievement === "17"}
            onChange={handleChange}
          />
          ผลงานส่วนใหญ่สำเร็จตรงตามเป้าหมาย (17)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="achievement-3">
          <input
            type="radio"
            id="achievement-3"
            name="achievement"
            value="14"
            checked={formValues.achievement === "14"}
            onChange={handleChange}
          />
          ผลงานโดยเฉลี่ยตรงตามเป้าหมาย (14)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="achievement-4">
          <input
            type="radio"
            id="achievement-4"
            name="achievement"
            value="10"
            checked={formValues.achievement === "10"}
            onChange={handleChange}
          />
          ผลงานส่วนน้อยที่ตรงตามเป้าหมาย (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="achievement-5">
          <input
            type="radio"
            id="achievement-5"
            name="achievement"
            value="6"
            checked={formValues.achievement === "6"}
            onChange={handleChange}
          />
          ผลงานไม่สำเร็จหรือผิดเป้าหมาย (6)
        </label>
      </div>
      
      {/* ... add other radio buttons for achievement */}

      <p>1.1.3 ความเชื่อถือได้ของผลงาน</p>
      <div>
        <label className="point-container table-container" htmlFor="reliability-1">
          <input
            type="radio"
            id="reliability-1"
            name="reliability"
            value="20"
            checked={formValues.reliability === "20"}
            onChange={handleChange}
          />
          ผลงานเชื่อถือได้ และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งทั้งหมด (20)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="reliability-2">
          <input
            type="radio"
            id="reliability-2"
            name="reliability"
            value="17"
            checked={formValues.reliability === "17"}
            onChange={handleChange}
          />
          ผลงานส่วนใหญ่เชื่อถือได้ และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (17)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="reliability-3">
          <input
            type="radio"
            id="reliability-3"
            name="reliability"
            value="14"
            checked={formValues.reliability === "14"}
            onChange={handleChange}
          />
          ผลงานส่วนใหญ่เชื่อถือได้พอสมควร และค่อนข้างจะถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (14)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="reliability-4">
          <input
            type="radio"
            id="reliability-4"
            name="reliability"
            value="10"
            checked={formValues.reliability === "10"}
            onChange={handleChange}
          />
          ผลงานส่วนน้อยเชื่อถือได้ และใช้หลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง บ้าง (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="reliability-5">
          <input
            type="radio"
            id="reliability-5"
            name="reliability"
            value="6"
            checked={formValues.reliability === "6"}
            onChange={handleChange}
          />
          ผลงานเชื่อถือไม่ค่อยได้ ไม่ใช้หลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งใด ๆ (6)
        </label>
      </div>
      {/* ... add other radio buttons for reliability */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormP3;
