import React, { useState } from 'react';
import '../Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [generalMessage, setGeneralMessage] = useState('');

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);

    if (passwordRegex.test(value)) {
      setPasswordMessage('Mật khẩu mạnh');
    } else {
      setPasswordMessage('Mật khẩu yếu');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);

    if (value === password) {
      setConfirmPasswordMessage('Mật khẩu khớp');
    } else {
      setConfirmPasswordMessage('Mật khẩu không khớp');
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (emailRegex.test(value)) {
      setEmailMessage('Email hợp lệ');
    } else {
      setEmailMessage('Email không hợp lệ');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    setUsernameMessage('');
    setEmailMessage('');
    setPasswordMessage('');
    setConfirmPasswordMessage('');
    setGeneralMessage('');

    if (!username) {
      setUsernameMessage('Vui lòng điền vào ô này');
      isValid = false;
    }
    if (!email) {
      setEmailMessage('Vui lòng điền vào ô này');
      isValid = false;
    } 
    if (!password) {
      setPasswordMessage('Vui lòng điền vào ô này');
      isValid = false;
    } 
    if (!confirmPassword) {
      setConfirmPasswordMessage('Vui lòng điền vào ô này');
      isValid = false;
    } 
    if (isValid) {
      alert('Form submitted');
    } else {
      setGeneralMessage('Vui lòng điền vào tất cả các ô');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameMessage && <span className="invalid">{usernameMessage}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailMessage && <span className={emailRegex.test(email) ? 'valid' : 'invalid'}>
            {emailMessage}
          </span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordMessage && <span className={passwordRegex.test(password) ? 'valid' : 'invalid'}>
            {passwordMessage}
          </span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordMessage && <span className={confirmPassword === password ? 'valid' : 'invalid'}>
            {confirmPasswordMessage}
          </span>}
        </div>
        {generalMessage && <p className="invalid">{generalMessage}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
