import React from "react";
import style from "../style/Result.module.css";

const ResultPage = ({ initialFormValues }) => {
  return (
    <div>
      <h3>ตอนที่ 4 ผลการประเมิน</h3>
      <div className={style.tableContainer}>
        <h5>ผลการประเมิน (ร้อยละ) (C)+(D)</h5>
        <h1>400</h1>
      </div>
      <div className={style.tableContainer}>
        <h5>ผลสัมฤทธิ์ของงาน(ร้อยละ) (C) (A÷5)</h5>
        <h5>สมรรถนะกำลังพล (ร้อยละ) (D) (B÷5)</h5>
      </div>
      <div className={style.tableContainer}>
        <h6>400</h6>
        <h6>400</h6>
      </div>

      <br></br>
      <div className={style.tableContainer}>
        <h5>แบบประเมินค่า</h5>
        <h5>ค่าคะแนน</h5>
      </div>
      <div className={style.centerContainer}>
        <p className={style.center}>ผลสัมฤทธิ์ของงาน</p>
      </div>
      <div className={style.centerContainer}>
        <p className={style.center}>1.1 กลุ่มงานประจำ (เต็ม 100 คะแนน)</p>
      </div>
      <div className={style.sectionContent}>
        <div className={style.sectionItem}>
          <p>1.1.1 ปริมาณงาน</p>
          <p>500</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
