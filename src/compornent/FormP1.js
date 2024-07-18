import React from "react";
import "../style/P1.css";

function FormP1({ form, handleChange, handleSubmit }) {
  return (
    <div>
      <h3>
        แบบประเมินผลการปฏิบัติงานของพนักงาน อผศ.
        และลูกจ้างประจำหน่วยงานกิจการพิเศษ
      </h3>
      <form onSubmit={handleSubmit} className="form-container">
        <h5>ตอนที่ 1 : ข้อมูลผู้รับการประเมิน (ผู้รับการประเมินเป็นผู้กรอก)</h5>
        <div className="form-group">
          <label htmlFor="name">ยศ-ชื่อ-สกุล</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">ตำแหน่ง</label>
          <input
            type="text"
            id="department"
            name="department"
            value={form.department}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="agency">หน่วยงาน</label>
          <input
            type="text"
            id="agency"
            name="agency"
            value={form.agency}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default FormP1;