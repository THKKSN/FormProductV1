import React from "react";
import "../style/P1.css";

const FormP1 = ({ formValues, handleChange }) => {
  return (
    <div>
      <h5>ตอนที่ 1 : ข้อมูลผู้รับการประเมิน (ผู้รับการประเมินเป็นผู้กรอก)</h5>
      <div className="form-group">
        <label htmlFor="Name">ยศ-ชื่อ-สกุล</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="โปรดระบุ"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Department">ตำแหน่ง</label>
        <input
          type="text"
          id="Department"
          name="Department"
          value={formValues.department}
          onChange={handleChange}
          placeholder="โปรดระบุ"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Agency">หน่วยงาน</label>
        <input
          type="text"
          id="Agency"
          name="Agency"
          value={formValues.agency}
          onChange={handleChange}
          placeholder="โปรดระบุ"
          required
        />
      </div>
    </div>
  );
};

export default FormP1;
