import React, { useState } from "react";
import "../style/P3.css";

const FormP3 = () => {
  const [formValues, setFormValues] = useState({
    Name: "",
    Department: "",
    Agency: "",
    quantity: 0,
    achievement: 0,
    reliability: 0,
    justinTime: 0,
    saving: 0,
    finally: 0,
    qualityOfWork: 0,
    reliabilityOfTheWork: 0,

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
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h5>ตอนที่ 3 การประเมินค่า ฯ (ผู้ประเมินเป็นผู้กรอก)</h5>
      <p>ผลสัมฤทธิ์ของงาน</p>
      <p>1.1 กลุ่มงานประจำ</p>
      <div>
        <p>1.1.1 ปริมาณงาน</p>
        <div>
          <label
            className="point-container table-container"
            htmlFor="quantity-1"
          >
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
          <label
            className="point-container table-container"
            htmlFor="quantity-2"
          >
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
          <label
            className="point-container table-container"
            htmlFor="quantity-3"
          >
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
          <label
            className="point-container table-container"
            htmlFor="quantity-4"
          >
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
          <label
            className="point-container table-container"
            htmlFor="quantity-5"
          >
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
        <label
          className="point-container table-container"
          htmlFor="achievement-1"
        >
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
        <label
          className="point-container table-container"
          htmlFor="achievement-2"
        >
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
        <label
          className="point-container table-container"
          htmlFor="achievement-3"
        >
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
        <label
          className="point-container table-container"
          htmlFor="achievement-4"
        >
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
        <label
          className="point-container table-container"
          htmlFor="achievement-5"
        >
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
        <label
          className="point-container table-container"
          htmlFor="reliability-1"
        >
          <input
            type="radio"
            id="reliability-1"
            name="reliability"
            value="20"
            checked={formValues.reliability === "20"}
            onChange={handleChange}
          />
          ผลงานเชื่อถือได้
          และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งทั้งหมด (20)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="reliability-2"
        >
          <input
            type="radio"
            id="reliability-2"
            name="reliability"
            value="17"
            checked={formValues.reliability === "17"}
            onChange={handleChange}
          />
          ผลงานส่วนใหญ่เชื่อถือได้
          และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (17)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="reliability-3"
        >
          <input
            type="radio"
            id="reliability-3"
            name="reliability"
            value="14"
            checked={formValues.reliability === "14"}
            onChange={handleChange}
          />
          ผลงานส่วนใหญ่เชื่อถือได้พอสมควร
          และค่อนข้างจะถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (14)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="reliability-4"
        >
          <input
            type="radio"
            id="reliability-4"
            name="reliability"
            value="10"
            checked={formValues.reliability === "10"}
            onChange={handleChange}
          />
          ผลงานส่วนน้อยเชื่อถือได้ และใช้หลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง
          บ้าง (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="reliability-5"
        >
          <input
            type="radio"
            id="reliability-5"
            name="reliability"
            value="6"
            checked={formValues.reliability === "6"}
            onChange={handleChange}
          />
          ผลงานเชื่อถือไม่ค่อยได้ ไม่ใช้หลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่งใด ๆ
          (6)
        </label>
      </div>
      <p>1.1.4 ความทันเวลา</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="justinTime-1"
        >
          <input
            type="radio"
            id="justinTime-1"
            name="justinTime"
            value="20"
            checked={formValues.justinTime === "20"}
            onChange={handleChange}
          />
          ทำงานสำเร็จก่อนเวลาที่กำหนดมาก และมีเวลาเหลือเพื่อพิจารณาทบทวน (20)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="justinTime-2"
        >
          <input
            type="radio"
            id="justinTime-2"
            name="justinTime"
            value="17"
            checked={formValues.justinTime === "17"}
            onChange={handleChange}
          />
          ทำงานสำเร็จก่อนเวลาที่กำหนด (17)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="justinTime-3"
        >
          <input
            type="radio"
            id="justinTime-3"
            name="justinTime"
            value="14"
            checked={formValues.justinTime === "14"}
            onChange={handleChange}
          />
          ทำงานสำเร็จตามระยะเวลาที่กำหนด (14)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="justinTime-4"
        >
          <input
            type="radio"
            id="justinTime-4"
            name="justinTime"
            value="10"
            checked={formValues.justinTime === "10"}
            onChange={handleChange}
          />
          ทำงานโดยใช้ระยะเวลาเกินกว่าเวลาที่กำหนดเล็กน้อย (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="justinTime-5"
        >
          <input
            type="radio"
            id="justinTime-5"
            name="justinTime"
            value="6"
            checked={formValues.justinTime === "6"}
            onChange={handleChange}
          />
          ทำงานโดยใช้ระยะเวลานาน เกินกว่าเวลาที่กำหนดเป็นอย่างมาก (6)
        </label>
      </div>
      <p>1.1.5 การประหยัด</p>
      <div>
        <label className="point-container table-container" htmlFor="saving-1">
          <input
            type="radio"
            id="saving-1"
            name="saving"
            value="20"
            checked={formValues.saving === "20"}
            onChange={handleChange}
          />
          ใช้ทรัพยากรอย่างประหยัดและคุ้มค่าเป็นอย่างมาก (20)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="saving-2">
          <input
            type="radio"
            id="saving-2"
            name="saving"
            value="17"
            checked={formValues.saving === "17"}
            onChange={handleChange}
          />
          ใช้ทรัพยากรอย่างประหยัดและคุ้มค่า (17)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="saving-3">
          <input
            type="radio"
            id="saving-3"
            name="saving"
            value="14"
            checked={formValues.saving === "14"}
            onChange={handleChange}
          />
          ใช้ทรัพยากรอย่างประหยัดตามที่ได้รับการแจกจ่าย (14)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="saving-4">
          <input
            type="radio"
            id="saving-4"
            name="saving"
            value="10"
            checked={formValues.saving === "10"}
            onChange={handleChange}
          />
          ใช้ทรัพยากรเกินกว่าที่ได้รับการแจกจ่ายเล็กน้อย (10)
        </label>
      </div>
      <div>
        <label className="point-container table-container" htmlFor="saving-5">
          <input
            type="radio"
            id="saving-5"
            name="saving"
            value="6"
            checked={formValues.saving === "6"}
            onChange={handleChange}
          />
          ใช้ทรัพยากรมาก เกิดการสูญเสียโดยไม่จำเป็น (6)
        </label>
      </div>
      <br></br>
      <p>1.2 กลุ่มงานมอบหมาย</p>
      <div>
        <p>1.2.1 ผลสำเร็จของงาน</p>
        <div>
          <label className="point-container table-container" htmlFor="finally-1">
            <input
              type="radio"
              id="finally-1"
              name="finally"
              value="100"
              checked={formValues.finally === "100"}
              onChange={handleChange}
            />
            ผลงานสำเร็จตามเป้าหมายโดยสมบูรณ์ (100)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="finally-2">
            <input
              type="radio"
              id="finally-2"
              name="finally"
              value="85"
              checked={formValues.finally === "85"}
              onChange={handleChange}
            />
            ผลงานส่วนใหญ่สำเร็จตรงตามเป้าหมาย (85)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="finally-3">
            <input
              type="radio"
              id="finally-3"
              name="finally"
              value="70"
              checked={formValues.finally === "70"}
              onChange={handleChange}
            />
            ผลงานโดยเฉลี่ยตรงตามเป้าหมาย (70)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="finally-4">
            <input
              type="radio"
              id="finally-4"
              name="finally"
              value="50"
              checked={formValues.finally === "50"}
              onChange={handleChange}
            />
            ผลงานส่วนน้อยที่ตรงตามเป้าหมาย (50)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="finally-5">
            <input
              type="radio"
              id="finally-5"
              name="finally"
              value="30"
              checked={formValues.finally === "30"}
              onChange={handleChange}
            />
            ผลงานไม่สำเร็จหรือผิดเป้าหมาย (30)
          </label>
        </div>
        <p>1.2.2 คุณภาพผลงาน</p>
        <div>
          <label className="point-container table-container" htmlFor="qualityOfWork-1">
            <input
              type="radio"
              id="qualityOfWork-1"
              name="qualityOfWork"
              value="50"
              checked={formValues.qualityOfWork === "50"}
              onChange={handleChange}
            />
            ผลงานมีความละเอียดรอบคอบ สมบูรณ์ครบถ้วนเกินกว่าที่คาดหวังเป็นอย่างมาก (50)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="qualityOfWork-2">
            <input
              type="radio"
              id="qualityOfWork-2"
              name="qualityOfWork"
              value="43"
              checked={formValues.qualityOfWork === "43"}
              onChange={handleChange}
            />
            ผลงานมีความละเอียดรอบคอบ สมบูรณ์ครบถ้วนเกินกว่าที่คาดหวัง (43)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="qualityOfWork-3">
            <input
              type="radio"
              id="qualityOfWork-3"
              name="qualityOfWork"
              value="35"
              checked={formValues.qualityOfWork === "35"}
              onChange={handleChange}
            />
            ผลงานมีความละเอียดรอบคอบ สมบูรณ์ครบถ้วนเป็นไปตามมาตรฐานที่คาดหวัง (35)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="qualityOfWork-4">
            <input
              type="radio"
              id="qualityOfWork-4"
              name="qualityOfWork"
              value="25"
              checked={formValues.qualityOfWork === "25"}
              onChange={handleChange}
            />
            ผลงานมีบกพร่องเพียงเล็กน้อย (25)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="qualityOfWork-5">
            <input
              type="radio"
              id="qualityOfWork-5"
              name="qualityOfWork"
              value="15"
              checked={formValues.qualityOfWork === "15"}
              onChange={handleChange}
            />
            ผลงานมีข้อบกพร่อง ต่ำกว่าเกณฑ์มาตรฐานในระดับต่ำสุดที่ยอมรับได้ และไม่ทำให้เกิดความเสียหายต่องาน (15)
          </label>
        </div>
        <p>1.2.3 ความเชื่อถือได้ของผลงาน</p>
        <div>
          <label className="point-container table-container" htmlFor="reliabilityOfTheWork-1">
            <input
              type="radio"
              id="reliabilityOfTheWork-1"
              name="reliabilityOfTheWork"
              value="50"
              checked={formValues.reliabilityOfTheWork === "50"}
              onChange={handleChange}
            />
            ผลงานเชื่อถือได้ และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง ทั้งหมด (50)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="reliabilityOfTheWork-2">
            <input
              type="radio"
              id="reliabilityOfTheWork-2"
              name="reliabilityOfTheWork"
              value="43"
              checked={formValues.reliabilityOfTheWork === "43"}
              onChange={handleChange}
            />
            ผลงานส่วนใหญ่เชื่อถือได้ และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (43)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="reliabilityOfTheWork-3">
            <input
              type="radio"
              id="reliabilityOfTheWork-3"
              name="reliabilityOfTheWork"
              value="35"
              checked={formValues.reliabilityOfTheWork === "35"}
              onChange={handleChange}
            />
            ผลงานส่วนใหญ่เชื่อถือได้พอสมควร และค่อนข้างจะถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (35)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="reliabilityOfTheWork-4">
            <input
              type="radio"
              id="reliabilityOfTheWork-4"
              name="reliabilityOfTheWork"
              value="25"
              checked={formValues.reliabilityOfTheWork === "25"}
              onChange={handleChange}
            />
            ผลงานมีบกพร่องเพียงเล็กน้อย (25)
          </label>
        </div>
        <div>
          <label className="point-container table-container" htmlFor="reliabilityOfTheWork-5">
            <input
              type="radio"
              id="reliabilityOfTheWork-5"
              name="reliabilityOfTheWork"
              value="15"
              checked={formValues.reliabilityOfTheWork === "15"}
              onChange={handleChange}
            />
            ผลงานมีข้อบกพร่อง ต่ำกว่าเกณฑ์มาตรฐานในระดับต่ำสุดที่ยอมรับได้ และไม่ทำให้เกิดความเสียหายต่องาน (15)
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default FormP3;
