import React from "react";
import "../style/P3.css";

const FormP3two = ({ formValues, handleChange }) => {
    return(
        <div>
            <br></br>
            <p className="p-header">2. สมรรถนะกำลังพล</p>
            <p className="form-group">2.1 คุณลักษณะ</p>
            <p>2.1.1 บุคลิกภาพ</p>
        <div>
          <label
            className="point-container table-container"
            htmlFor="personality-1"
          >
            <input
              type="radio"
              id="personality-1"
              name="personality"
              value="15"
              checked={formValues.personality === "15"}
              onChange={handleChange}
            />
            ปริมาณงานที่ทำได้มากกว่าที่ได้รับตามหน้าที่เป็นอย่างมาก (15)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="personality-2"
          >
            <input
              type="radio"
              id="personality-2"
              name="personality"
              value="13"
              checked={formValues.personality === "13"}
              onChange={handleChange}
            />
            มีการแสดงออก ทางกาย วาจา และอารมณ์ ดี (13)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="personality-3"
          >
            <input
              type="radio"
              id="personality-3"
              name="personality"
              value="11"
              checked={formValues.personality === "11"}
              onChange={handleChange}
            />
            มีการแสดงออก ทางกาย วาจา และอารมณ์ เหมาะสม (11)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="personality-4"
          >
            <input
              type="radio"
              id="personality-4"
              name="personality"
              value="8"
              checked={formValues.personality === "8"}
              onChange={handleChange}
            />
            มีการแสดงออก ทางกาย วาจา และอารมณ์ เหมาะสมบางส่วนและบางส่วนต้องได้รับการปรับปรุงแก้ไข (8)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="personality-5"
          >
            <input
              type="radio"
              id="personality-5"
              name="personality"
              value="5"
              checked={formValues.personality === "5"}
              onChange={handleChange}
            />
            มีการแสดงออก ทางกาย วาจา และอารมณ์ ต้องได้รับการปรับปรุง (5)
          </label>
        </div>
        <p>2.1.2 การรักษาวินัย</p>
        <div>
          <label
            className="point-container table-container"
            htmlFor="maintaining-1"
          >
            <input
              type="radio"
              id="maintaining-1"
              name="maintaining"
              value="15"
              checked={formValues.maintaining === "15"}
              onChange={handleChange}
            />
            เข้าใจคำสั่ง และปฏิบัติตามได้เป็นอย่างเคร่งครัด ด้วยความเต็มใจ และถูกต้องเสมอ (15)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="maintaining-2"
          >
            <input
              type="radio"
              id="maintaining-2"
              name="maintaining"
              value="13"
              checked={formValues.maintaining === "13"}
              onChange={handleChange}
            />
            เข้าใจคำสั่ง และปฏิบัติตาม ด้วยความเต็มใจ และถูกต้อง (13)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="maintaining-3"
          >
            <input
              type="radio"
              id="maintaining-3"
              name="maintaining"
              value="11"
              checked={formValues.maintaining === "11"}
              onChange={handleChange}
            />
            ปฏิบัติตามคำสั่ง ด้วยความเต็มใจ (11)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="maintaining-4"
          >
            <input
              type="radio"
              id="maintaining-4"
              name="maintaining"
              value="8"
              checked={formValues.maintaining === "8"}
              onChange={handleChange}
            />
            ปฏิบัติตามคำสั่ง คำแนะนำตามสมควร (8)
          </label>
        </div>
        <div>
          <label
            className="point-container table-container"
            htmlFor="maintaining-5"
          >
            <input
              type="radio"
              id="maintaining-5"
              name="maintaining"
              value="5"
              checked={formValues.maintaining === "5"}
              onChange={handleChange}
            />
            ไม่ใส่ใจต่อคำสั่งเท่าที่ควร ทำให้เกิดความผิดพลาดบ่อยครั้ง (5)
          </label>
        </div>
        </div>
    )
}
export default FormP3two;