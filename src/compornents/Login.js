// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/User.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        // ตรวจสอบข้อมูลล็อกอิน (คุณสามารถเปลี่ยนเป็นการตรวจสอบจริงจากเซิร์ฟเวอร์)
        if (username.toLowerCase() === "admin" && password === "admin123456") {
            onLogin(true);
            navigate("/form");
        } else {
            setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;