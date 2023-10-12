import { useState } from "react";
import React from "react";
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom'; // Thêm vào để sử dụng React Router

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Thực hiện xử lý đăng nhập
    };
  
    return (
      <div className={styles.formLogin}>
        <h1 className={styles.title}>Đăng nhập</h1>
        <div className={styles.inputUser}>
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.inputPass}>
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.button} >
          <button type="submit" onClick={handleSubmit} className={styles.login}>Đăng nhập</button>
          <Link to="/signup"> {/* Điều hướng đến trang Đăng ký khi click */}
            <button className={styles.signup}>Đăng Ký</button>
          </Link>
          <Link to="/resetpass"> {/* Điều hướng đến trang Reset Mật Khẩu khi click */}
            <button className={styles.buttonresetPass}>Quên Mật Khẩu ?</button>
          </Link>
        </div>
      </div>
    );
};

export default LoginForm;
