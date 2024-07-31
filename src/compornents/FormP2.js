import React from "react";
import "../style/P1.css";
import "../style/P2.css";

function FormP2({ form, handleChange }) {
  return (
    <div>
      <div className="form-container">
        <h5>
          ตอนที่ 2 : การลา การกระทำความผิดทางวินัยและอาญา
          (ธุรการหรือเจ้าหน้าที่ที่ปฏิบัติงานด้านกำลังพลของแต่ละหน่วยเป็นผู้กรอก)
        </h5>
        <div className="assessment-round">
          <label>
            <input
              type="radio"
              id="assessmentRound1"
              name="assessmentRound"
              value="ครั้งที่ 1 รอบ เม.ย."
              checked={form.assessmentRound === "ครั้งที่ 1 รอบ เม.ย."}
              onChange={handleChange}
            />
            ครั้งที่ 1 รอบ เม.ย.
          </label>
          <label>
            <input
              type="radio"
              id="assessmentRound2"
              name="assessmentRound"
              value="ครั้งที่ 2 รอบ ต.ค."
              checked={form.assessmentRound === "ครั้งที่ 2 รอบ ต.ค."}
              onChange={handleChange}
            />
            ครั้งที่ 2 รอบ ต.ค.
          </label>
        </div>

        <div className="form-group">
          <label>ลาป่วย/วัน</label>
          <input
            type="text"
            id="sickLeave"
            name="sickLeave"
            value={form.sickLeave}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>ลากิจ/วัน</label>
          <input
            type="text"
            id="businessLeave"
            name="businessLeave"
            value={form.businessLeave}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>มาสาย/วัน</label>
          <input
            type="text"
            id="lateArrival"
            name="lateArrival"
            value={form.lateArrival}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>ลาอื่น ๆ/วัน (ระบุ)</label>
          <input
            type="text"
            id="otherLeave"
            name="otherLeave"
            value={form.otherLeave}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>ขาดงาน /วัน</label>
          <input
            type="text"
            id="absence"
            name="absence"
            value={form.absence}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>รวม /วัน</label>
          <input
            type="text"
            id="totalLeave"
            name="totalLeave"
            value={form.totalLeave}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>ความผิด/การลงโทษ</label>
          <textarea
            id="offense"
            name="offense"
            value={form.offense}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FormP2;
