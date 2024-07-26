import React from "react";
import CircularGraph from "./CircularGraph"; // ตรวจสอบเส้นทางให้ถูกต้อง
import styles from "../style/Result.module.css";

const ResultPage = () => {
  const labels = [
    "ผลสัมฤทธิ์ของงาน (ร้อยละ) (C)",
    "สมรรถนะกำลังพล (ร้อยละ) (D)",
  ];
  const data = [70, 30]; // ข้อมูลตัวอย่างสำหรับ C และ D
  const evaluation = (data[0] + data[1]) / 2; // คำนวณเปอร์เซ็นต์รวมของการประเมิน

  return (
    <div>
      <h2>ตอนที่ 4 ผลการประเมิน</h2>
      <div className={styles.container}>
        <div className={styles.graphContainer}>
          <CircularGraph data={data} labels={labels} evaluation={evaluation} />
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>แบบประเมินค่า</th>
                <th>คะแนน</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">ผลสัมฤทธิ์ของงาน</td>
              </tr>
              <tr>
                <td colSpan="2">1.1 กลุ่มงานประจำ (เต็ม 100 คะแนน)</td>
              </tr>
              <tr>
                <td>1.1.1 ปริมาณงาน</td>
                <td></td>
              </tr>
              <tr>
                <td>1.1.2 ผลสำเร็จของงาน</td>
                <td></td>
              </tr>
              <tr>
                <td>1.1.3 ความเร่งด่วนในการทำงาน</td>
                <td></td>
              </tr>
              <tr>
                <td>1.1.4 ความละเอียด</td>
                <td></td>
              </tr>
              <tr>
                <td>1.1.5 การประพฤติงาน</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2">1.2 กลุ่มงานนอกแบบ (เต็ม 250 คะแนน)</td>
              </tr>
              <tr>
                <td>1.2.1 ผลสำเร็จของงาน</td>
                <td></td>
              </tr>
              <tr>
                <td>1.2.2 คุณภาพของงาน</td>
                <td></td>
              </tr>
              <tr>
                <td>1.2.3 ความเร่งด่วนในการทำงาน</td>
                <td></td>
              </tr>
              <tr>
                <td>1.2.4 ความละเอียด</td>
                <td></td>
              </tr>
              <tr>
                <td>รวมคะแนนผลสัมฤทธิ์ของงาน (A) (เต็ม 350 คะแนน)</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2">สมรรถนะที่คาดหวัง</td>
              </tr>
              <tr>
                <td>2.1.1 มุ่งศึกษา</td>
                <td></td>
              </tr>
              <tr>
                <td>2.1.2 การวิจัย</td>
                <td></td>
              </tr>
              <tr>
                <td>2.2.1 ความสามารถในการคิดเชิงสังเคราะห์</td>
                <td></td>
              </tr>
              <tr>
                <td>2.2.2 มุ่งผลงานผู้รับ</td>
                <td></td>
              </tr>
              <tr>
                <td>2.2.3 ความสามารถ</td>
                <td></td>
              </tr>
              <tr>
                <td>2.3.1 การปฏิสัมพันธ์</td>
                <td></td>
              </tr>
              <tr>
                <td>2.3.2 การทำงานเป็นทีม</td>
                <td></td>
              </tr>
              <tr>
                <td>2.4.1 ความซื่อสัตย์และมีสิทธิ์</td>
                <td></td>
              </tr>
              <tr>
                <td>2.4.2 การมองโลก</td>
                <td></td>
              </tr>
              <tr>
                <td>2.5.1 การมองโลกในเชิงบวก</td>
                <td></td>
              </tr>
              <tr>
                <td>2.5.2 การแก้ปัญหาที่เกิดขึ้น</td>
                <td></td>
              </tr>
              <tr>
                <td>2.6.1 การประสานความสัมพันธ์ระหว่างผู้รับคำแนะนำ</td>
                <td></td>
              </tr>
              <tr>
                <td>2.6.2 หลักเกณฑ์และมาตรการที่เกิดขึ้น</td>
                <td></td>
              </tr>
              <tr>
                <td>รวมคะแนนสมรรถนะที่คาดหวัง (B) (เต็ม 150 คะแนน)</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
