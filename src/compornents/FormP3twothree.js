import React from "react";
import "../style/P3.module.css";
const FormP3twothree = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.3 คุณธรรมและจริยธรรม</p>
      <p>2.3.1 การปฏิบัติตน</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="conduct-1"
        >
          <input
            type="radio"
            id="conduct-1"
            name="conduct"
            value="10"
            checked={formValues.conduct === "10"}
            onChange={handleChange}
          />
          มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรมซื่อสัตย์สุจริต เชื่อถือได้และเป็นแบบอย่างที่ดีให้แก่ผู้อื่น (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="conduct-2"
        >
          <input
            type="radio"
            id="conduct-2"
            name="conduct"
            value="9"
            checked={formValues.conduct === "9"}
            onChange={handleChange}
          />
          มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรม ซื่อสัตย์สุจริต เชื่อถือได้ (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="conduct-3"
        >
          <input
            type="radio"
            id="conduct-3"
            name="conduct"
            value="7"
            checked={formValues.conduct === "7"}
            onChange={handleChange}
          />
          มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรม ซื่อสัตย์สุจริต (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="conduct-4"
        >
          <input
            type="radio"
            id="conduct-4"
            name="conduct"
            value="5"
            checked={formValues.conduct === "5"}
            onChange={handleChange}
          />
          มีการประพฤติปฏิบัติตนตามระเบียบคำสั่งของหน่วยงาน มีคุณธรรม ซื่อสัตย์สุจริต โดยมีการว่ากล่าว ตักเตือนบ้างเป็นบางครั้ง (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="conduct-5"
        >
          <input
            type="radio"
            id="conduct-5"
            name="conduct"
            value="3"
            checked={formValues.conduct === "3"}
            onChange={handleChange}
          />
          มีการประพฤติปฏิบัติตนไม่เหมาะสม มีการว่ากล่าวตักเตือนเป็นประจำ (3)
        </label>
      </div>
      <p>2.3.2 การตรงต่อเวลา</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="punctuality-1"
        >
          <input
            type="radio"
            id="punctuality-1"
            name="punctuality"
            value="10"
            checked={formValues.punctuality === "10"}
            onChange={handleChange}
          />
          มาทำงานก่อนเวลาและทำงานจนเสร็จ แม้จะเลยเวลาปฏิบัติงานไปแล้วเป็นประจำ (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="punctuality-2"
        >
          <input
            type="radio"
            id="punctuality-2"
            name="punctuality"
            value="9"
            checked={formValues.punctuality === "9"}
            onChange={handleChange}
          />
          มาทำงานก่อนเวลาและทำงานจนเสร็จ แม้จะเลยเวลาปฏิบัติงานบางโอกาส (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="punctuality-3"
        >
          <input
            type="radio"
            id="punctuality-3"
            name="punctuality"
            value="7"
            checked={formValues.punctuality === "7"}
            onChange={handleChange}
          />
          มาทำงานสม่ำเสมอตลอดเวลา เริ่มและเลิกงานตามเวลาที่ทางหน่วยงานกำหนด (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="punctuality-4"
        >
          <input
            type="radio"
            id="punctuality-4"
            name="punctuality"
            value="5"
            checked={formValues.punctuality === "5"}
            onChange={handleChange}
          />
          มาทำงานตามเวลาเป็นส่วนใหญ่ มีการมาสาย และกลับก่อนในบางโอกาส (5)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="punctuality-5"
        >
          <input
            type="radio"
            id="punctuality-5"
            name="punctuality"
            value="3"
            checked={formValues.punctuality === "3"}
            onChange={handleChange}
          />
          มาทำงานต่ำกว่ามาตรฐาน มาสาย หรือกลับก่อนเวลาเป็นประจำ (3)
        </label>
      </div>
    </div>
  );
};

export default FormP3twothree;
