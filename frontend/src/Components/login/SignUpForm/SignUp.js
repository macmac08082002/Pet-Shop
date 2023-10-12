import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import styles from './SignUp.module.css'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện xử lý đăng ký
  };

  useEffect(() => {
    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp nhau không
    if (password !== confirmPassword) {
      setConfirmPassword("");
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
    }
  }, [password, confirmPassword]);

  return (
    <div className={styles.formSingup}>
      <h1>Đăng ký</h1>
      <div className={styles.inputUser}>
        <label htmlFor="username">Tên đăng nhập</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputEmail}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputPassword}>
        <label className={styles.label} htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.confirmPassword}>
        <label className={styles.label} htmlFor="confirmPassword">Xác nhận mật khẩu</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className={styles.buttonEvens}> 
        <button className={styles.buttonSingup} type="submit" onClick={handleSubmit}>Đăng ký</button>
        <Link to="/login"> {/* Điều hướng đến trang Đăng nhập */}
          <button className={styles.buttonLogin}>Đăng Nhập</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
