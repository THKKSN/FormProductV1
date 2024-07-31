import React from "react";
import "../style/P3.module.css";
const FormP3twosix = ({ formValues, handleChange }) => {
  return (
    <div>
      <p className="form-group">2.6 การบริหารจัดการ</p>
      <p>2.6.1 การพัฒนาตนและผู้ใต้บังคับบัญชาหรือเพื่อนร่วมงาน</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="development-1"
        >
          <input
            type="radio"
            id="development-1"
            name="development"
            value="10"
            checked={formValues.development === "10"}
            onChange={handleChange}
          />
          มีการเรียนรู้อยู่ตลอดเวลา และแนะนำผู้ใต้บังคับบัญชา
          หรือเพื่อนร่วมงานได้อย่างดีเยี่ยม (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="development-2"
        >
          <input
            type="radio"
            id="development-2"
            name="development"
            value="9"
            checked={formValues.development === "9"}
            onChange={handleChange}
          />
          มีการเรียนรู้อยู่ตลอดเวลา และแนะนำผู้ใต้บังคับบัญชา
          หรือเพื่อนร่วมงานได้อย่างดี (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="development-3"
        >
          <input
            type="radio"
            id="development-3"
            name="development"
            value="7"
            checked={formValues.development === "7"}
            onChange={handleChange}
          />
          มีการเรียนรู้อยู่ตลอดเวลา และแนะนำผู้ใต้บังคับบัญชา
          หรือเพื่อนร่วมงาน (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="development-4"
        >
          <input
            type="radio"
            id="development-4"
            name="development"
            value="5"
            checked={formValues.development === "5"}
            onChange={handleChange}
          />
          มีความสนใจพัฒนาตนเอง และแนะนำผู้ใต้บังคับบัญชา หรือเพื่อนร่วมงานพอสมควร (5)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="development-5"
        >
          <input
            type="radio"
            id="development-5"
            name="development"
            value="3"
            checked={formValues.development === "3"}
            onChange={handleChange}
          />
          ไม่แสดงคุณลักษณะด้านนี้อย่างชัดเจน (3)
        </label>
      </div>
      <p>2.6.2 วิสัยทัศน์และความคิดในภาพรวม</p>
      <div>
        <label
          className="point-container table-container"
          htmlFor="vision-1"
        >
          <input
            type="radio"
            id="vision-1"
            name="vision"
            value="10"
            checked={formValues.vision === "10"}
            onChange={handleChange}
          />
          มีการวางแผนจัดระบบงาน ก่อนการปฏิบัติงานทุกครั้ง (10)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="vision-2"
        >
          <input
            type="radio"
            id="vision-2"
            name="vision"
            value="9"
            checked={formValues.vision === "9"}
            onChange={handleChange}
          />
          มีการวางแผนจัดระบบงาน ก่อนการปฏิบัติงานเป็นส่วนใหญ่ (9)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="vision-3"
        >
          <input
            type="radio"
            id="vision-3"
            name="vision"
            value="7"
            checked={formValues.vision === "7"}
            onChange={handleChange}
          />
          มีการวางแผนจัดระบบงานพอสมควร และมีการแก้ไขเพิ่มเติม เป็นบางครั้ง (7)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="vision-4"
        >
          <input
            type="radio"
            id="vision-4"
            name="vision"
            value="5"
            checked={formValues.vision === "5"}
            onChange={handleChange}
          />
          มีการวางแผนจัดระบบงานบ้าง และผู้บังคับบัญชาแนะนำเป็นครั้งคราว (5)
        </label>
      </div>
      <div>
        <label
          className="point-container table-container"
          htmlFor="vision-5"
        >
          <input
            type="radio"
            id="vision-5"
            name="vision"
            value="3"
            checked={formValues.vision === "3"}
            onChange={handleChange}
          />
          ผู้บังคับบัญชาแนะนำและจัดระบบงานให้ทุกครั้ง (3)
        </label>
      </div>
    </div>
  );
};
export default FormP3twosix;
