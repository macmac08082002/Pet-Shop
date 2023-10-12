import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import styles from './ResetPassForm.module.css'

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xem email đã được nhập chưa
    if (!email) {
      setError("Vui lòng nhập email.");
      return;
    }

    try {
      // Gửi yêu cầu lấy lại mật khẩu
      const response = await axios.post("/api/forgot-password", { email });

      if (response.status === 200) {
        setError("Chúng tôi đã gửi email hướng dẫn lấy lại mật khẩu cho bạn.");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.formressetpass}>
      <h1>Lấy lại mật khẩu</h1>
      <div className={styles.inputresetpass}>
      <label className={styles.labletitle} htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      {error && <p className="error">{error}</p>}
      <div className={styles.buttoneven}>
      <button className={styles.buttonreset} type="submit" onClick={handleSubmit}>Gửi</button>
      <Link to="/login">
        <button className={styles.buttonlogin} type="submit">Đăng Nhập</button>
      </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
