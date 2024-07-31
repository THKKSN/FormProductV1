import React from "react";
import "../style/P3.module.css";
const FormP3onetwo = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">1.2 กลุ่มงานมอบหมาย</p>
      <div>
        <p>1.2.1 ผลสำเร็จของงาน</p>
        <div>
          <label
            className="point-container table-container"
            htmlFor="finally-1"
          >
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
          <label
            className="point-container table-container"
            htmlFor="finally-2"
          >
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
          <label
            className="point-container table-container"
            htmlFor="finally-3"
          >
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
          <label
            className="point-container table-container"
            htmlFor="finally-4"
          >
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
          <label
            className="point-container table-container"
            htmlFor="finally-5"
          >
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
          <label
            className="point-container table-container"
            htmlFor="qualityOfWork-1"
          >
            <input
              type="radio"
              id="qualityOfWork-1"
              name="qualityOfWork"
              value="50"
              checked={formValues.qualityOfWork === "50"}
              onChange={handleChange}
            />
            ผลงานมีความละเอียดรอบคอบ
            สมบูรณ์ครบถ้วนเกินกว่าที่คาดหวังเป็นอย่างมาก (50)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="qualityOfWork-2"
          >
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
          <label
            className="point-container table-container"
            htmlFor="qualityOfWork-3"
          >
            <input
              type="radio"
              id="qualityOfWork-3"
              name="qualityOfWork"
              value="35"
              checked={formValues.qualityOfWork === "35"}
              onChange={handleChange}
            />
            ผลงานมีความละเอียดรอบคอบ สมบูรณ์ครบถ้วนเป็นไปตามมาตรฐานที่คาดหวัง
            (35)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="qualityOfWork-4"
          >
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
          <label
            className="point-container table-container"
            htmlFor="qualityOfWork-5"
          >
            <input
              type="radio"
              id="qualityOfWork-5"
              name="qualityOfWork"
              value="15"
              checked={formValues.qualityOfWork === "15"}
              onChange={handleChange}
            />
            ผลงานมีข้อบกพร่อง ต่ำกว่าเกณฑ์มาตรฐานในระดับต่ำสุดที่ยอมรับได้
            และไม่ทำให้เกิดความเสียหายต่องาน (15)
          </label>
        </div>
        <p>1.2.3 ความเชื่อถือได้ของผลงาน</p>
        <div>
          <label
            className="point-container table-container"
            htmlFor="reliabilityOfTheWork-1"
          >
            <input
              type="radio"
              id="reliabilityOfTheWork-1"
              name="reliabilityOfTheWork"
              value="50"
              checked={formValues.reliabilityOfTheWork === "50"}
              onChange={handleChange}
            />
            ผลงานเชื่อถือได้ และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง
            ทั้งหมด (50)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="reliabilityOfTheWork-2"
          >
            <input
              type="radio"
              id="reliabilityOfTheWork-2"
              name="reliabilityOfTheWork"
              value="43"
              checked={formValues.reliabilityOfTheWork === "43"}
              onChange={handleChange}
            />
            ผลงานส่วนใหญ่เชื่อถือได้
            และถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (43)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="reliabilityOfTheWork-3"
          >
            <input
              type="radio"
              id="reliabilityOfTheWork-3"
              name="reliabilityOfTheWork"
              value="35"
              checked={formValues.reliabilityOfTheWork === "35"}
              onChange={handleChange}
            />
            ผลงานส่วนใหญ่เชื่อถือได้พอสมควร
            และค่อนข้างจะถูกต้องตามหลักการ/แบบธรรมเนียม/ระเบียบ/คำสั่ง (35)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="reliabilityOfTheWork-4"
          >
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
          <label
            className="point-container table-container"
            htmlFor="reliabilityOfTheWork-5"
          >
            <input
              type="radio"
              id="reliabilityOfTheWork-5"
              name="reliabilityOfTheWork"
              value="15"
              checked={formValues.reliabilityOfTheWork === "15"}
              onChange={handleChange}
            />
            ผลงานมีข้อบกพร่อง ต่ำกว่าเกณฑ์มาตรฐานในระดับต่ำสุดที่ยอมรับได้
            และไม่ทำให้เกิดความเสียหายต่องาน (15)
          </label>
        </div>
        <p>1.2.4 ความทันเวลา</p>
        <div>
          <label
            className="point-container table-container"
            htmlFor="timeLiness-1"
          >
            <input
              type="radio"
              id="timeLiness-1"
              name="timeLiness"
              value="50"
              checked={formValues.timeLiness === "50"}
              onChange={handleChange}
            />
            ทำงานสำเร็จก่อนเวลาที่กำหนดมาก และมีเวลาเหลือเพื่อพิจารณาทบทวน (50)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="timeLiness-2"
          >
            <input
              type="radio"
              id="timeLiness-2"
              name="timeLiness"
              value="43"
              checked={formValues.timeLiness === "43"}
              onChange={handleChange}
            />
            ทำงานสำเร็จก่อนเวลาที่กำหนด (43)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="timeLiness-3"
          >
            <input
              type="radio"
              id="timeLiness-3"
              name="timeLiness"
              value="35"
              checked={formValues.timeLiness === "35"}
              onChange={handleChange}
            />
            ทำงานสำเร็จตามระยะเวลาที่กำหนด (35)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="timeLiness-4"
          >
            <input
              type="radio"
              id="timeLiness-4"
              name="timeLiness"
              value="25"
              checked={formValues.timeLiness === "25"}
              onChange={handleChange}
            />
            ทำงานโดยใช้ระยะเวลาเกินกว่าเวลาที่กำหนดเล็กน้อย (25)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="timeLiness-5"
          >
            <input
              type="radio"
              id="timeLiness-5"
              name="timeLiness"
              value="15"
              checked={formValues.timeLiness === "15"}
              onChange={handleChange}
            />
            ทำงานโดยใช้ระยะเวลานาน เกินกว่าเวลาที่กำหนดเป็นอย่างมาก (15)
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormP3onetwo;
