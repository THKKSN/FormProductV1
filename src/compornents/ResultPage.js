import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CircularGraph from "./CircularGraph";
import styles from "../style/Result.module.css";

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { initialFormValues } = location.state || {};

    console.log("ResultPage rendered with initialFormValues:", initialFormValues);

    if (!initialFormValues) {
        return (
            <div>
                <p>ไม่มีข้อมูลในการแสดงผล</p>
                <button onClick={() => navigate('/Home')}>กลับไปที่หน้าหลัก</button>
            </div>
        );
    }

    // Convert values to numbers
    const {
        quantity = 0,
        achievement = 0,
        reliability = 0,
        justinTime = 0,
        saving = 0,
        finally: finallyValue = 0,
        qualityOfWork = 0,
        reliabilityOfTheWork = 0,
        timeLiness = 0,
        personality = 0,
        maintaining = 0,
        communication = 0,
        relationship = 0,
        sacrifice = 0,
        cooperate = 0,
        conduct = 0,
        punctuality = 0,
        focus = 0,
        initiative = 0,
        knowledge = 0,
        sense = 0,
        development = 0,
        vision = 0
    } = initialFormValues;

    // Ensure values are numbers
    const totalQuantity = [
        Number(quantity),
        Number(achievement),
        Number(reliability),
        Number(justinTime),
        Number(saving)
    ];
    const dataQuantity = totalQuantity.reduce((acc, value) => acc + value, 0); 

    const totalPerformance = [
        Number(finallyValue),
        Number(qualityOfWork),
        Number(reliabilityOfTheWork),
        Number(timeLiness)
    ];
    const performanceQuantity = totalPerformance.reduce((acc, value) => acc + value, 0);

    const combinedTotal = dataQuantity + performanceQuantity; //A
    const combinedAverage = combinedTotal / 5; //C


    const totalCompetency = [
        Number(personality),
        Number(maintaining),
        Number(communication),
        Number(relationship),
        Number(sacrifice),
        Number(cooperate),
        Number(conduct),
        Number(punctuality),
        Number(focus),
        Number(initiative),
        Number(knowledge),
        Number(sense),
        Number(development),
        Number(vision)
    ];
    const competencyQuantity = totalCompetency.reduce((acc, value) => acc + value, 0); //B
    const competencyAverage = competencyQuantity/5; //D

    const data = [Number(combinedAverage), Number(competencyAverage)]; 
    const evaluation = (data[0] + data[1]);

    const getEvaluationCriteria = (score) => {
        if (score >= 90) return "ดีเด่น";
        if (score >= 80) return "ดีมาก";
        if (score >= 70) return "ดี";
        if (score >= 60) return "พอใช้";
        return "ต้องปรับปรุง";
    };

    const getEvaluationColor = (criteria) => {
        switch (criteria) {
            case "ดีเด่น":
                return "#108600c4";
            case "ดีมาก":
                return "#16be00c4";
            case "ดี":
                return "#f5c800";
            case "พอใช้":
                return "#ffa500";
            case "ต้องปรับปรุง":
                return "#f00";
            default:
                return "#000";
        }
    };

    const evaluationCriteria = getEvaluationCriteria(evaluation);
    const evaluationColor = getEvaluationColor(evaluationCriteria);

    return (
        <div>
            <h2>ผลการประเมิน</h2>
            <div className={styles.container}>
                <div className={styles.graphContainer}>
                    <CircularGraph data={data} labels={["ผลสัมฤทธิ์ของงาน", "สมรรถนะกำลังพล"]} evaluation={evaluation} />
                    <div
                        className={styles.evaluationText}
                        style={{ color: evaluationColor }} // Set color based on evaluation
                    >
                        <p>เกณฑ์การประเมิน: </p>
                        <h3>{evaluationCriteria}</h3>
                    </div>
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
                                <td className= {styles.rightContainer}>{quantity}</td>
                            </tr>
                            <tr>
                                <td>1.1.2 ผลสำเร็จของงาน</td>
                                <td className= {styles.rightContainer}>{achievement}</td>
                            </tr>
                            <tr>
                                <td>1.1.3 ความเร่งด่วนในการทำงาน</td>
                                <td className= {styles.rightContainer}>{reliability}</td>
                            </tr>
                            <tr>
                                <td>1.1.4 ความทันเวลา</td>
                                <td className= {styles.rightContainer}>{justinTime}</td>
                            </tr>
                            <tr>
                                <td>1.1.5 การประหยัด</td>
                                <td className= {styles.rightContainer}>{saving}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">1.2 กลุ่มงานมอบหมาย (เต็ม 250 คะแนน)</td>
                            </tr>
                            <tr>
                                <td>1.2.1 ผลสำเร็จของงาน</td>
                                <td className= {styles.rightContainer}>{finallyValue}</td>
                            </tr>
                            <tr>
                                <td>1.2.2 คุณภาพของผลงาน</td>
                                <td className= {styles.rightContainer}>{qualityOfWork}</td>
                            </tr>
                            <tr>
                                <td>1.2.3 ความเชื่อถือได้ของผลงาน</td>
                                <td className= {styles.rightContainer}>{reliabilityOfTheWork}</td>
                            </tr>
                            <tr>
                                <td>1.2.4 ความทันเวลา</td>
                                <td className= {styles.rightContainer}>{timeLiness}</td>
                            </tr>
                            <tr>
                                <td>รวมคะแนนผลสัมฤทธิ์ของงาน (เต็ม 350 คะแนน)</td>
                                <td className= {styles.rightContainer}>{combinedTotal}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">สมรรถนะกำลังพล</td>
                            </tr>
                            <tr>
                                <td>2.1.1 บุคลิกภาพ</td>
                                <td className= {styles.rightContainer}>{personality}</td>
                            </tr>
                            <tr>
                                <td>2.1.2 การรักษาวินัย</td>
                                <td className= {styles.rightContainer}>{maintaining}</td>
                            </tr>
                            <tr>
                                <td>2.2.1 ความสามารถในการติดต่อสื่อสาร</td>
                                <td className= {styles.rightContainer}>{communication}</td>
                            </tr>
                            <tr>
                                <td>2.2.2 มนุษยสัมพันธ์</td>
                                <td className= {styles.rightContainer}>{relationship}</td>
                            </tr>
                            <tr>
                                <td>2.2.3 ความเสียสละ</td>
                                <td className= {styles.rightContainer}>{sacrifice}</td>
                            </tr>
                            <tr>
                                <td>2.2.4 ความร่วมมือ</td>
                                <td className= {styles.rightContainer}>{cooperate}</td>
                            </tr>
                            <tr>
                                <td>2.3.1 การปฏิบัติตน</td>
                                <td className= {styles.rightContainer}>{conduct}</td>
                            </tr>
                            <tr>
                                <td>2.3.2 การตรงต่อเวลา</td>
                                <td className= {styles.rightContainer}>{punctuality}</td>
                            </tr>
                            <tr>
                                <td>2.4.1 ความมุ่งเน้นผลสัมฤทธิ์</td>
                                <td className= {styles.rightContainer}>{focus}</td>
                            </tr>
                            <tr>
                                <td>2.4.2 ความริเริ่ม</td>
                                <td className= {styles.rightContainer}>{initiative}</td>
                            </tr>
                            <tr>
                                <td>2.5.1 ความรอบรู้งานในหน้าที่</td>
                                <td className= {styles.rightContainer}>{knowledge}</td>
                            </tr>
                            <tr>
                                <td>2.5.2 ความสำนึกในหน้าที่</td>
                                <td className= {styles.rightContainer}>{sense}</td>
                            </tr>
                            <tr>
                                <td>2.6.1 การพัฒนาตนและผู้ใต้บังคับบัญชาหรือเพื่อนร่วมงาน</td>
                                <td className= {styles.rightContainer}>{development}</td>
                            </tr>
                            <tr>
                                <td>2.6.2 วิสัยทัศน์และความคิดในภาพรวม</td>
                                <td className= {styles.rightContainer}>{vision}</td>
                            </tr>
                            <tr>
                                <td>รวมคะแนนสมรรถนะที่คาดหวัง (เต็ม 150 คะแนน)</td>
                                <td className= {styles.rightContainer}>{competencyQuantity}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
