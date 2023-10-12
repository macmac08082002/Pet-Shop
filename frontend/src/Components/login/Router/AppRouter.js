import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm'; // Trang Đăng nhập
import SignUp from '../SignUpForm/SignUp';
import ForgotPasswordForm from '../ResetPassForm/ResetPassForm';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} exact /> {/* Đặt trang Đăng nhập làm trang mặc định */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpass" element={<ForgotPasswordForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
