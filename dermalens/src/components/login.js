import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  
  const baseWidth = 1920;
  const fem = window.innerWidth / baseWidth;
  const ffem = fem * 0.97;
 
  

  

  
  return (
    <div style={{ width: 1920, height: 1080, position: 'relative', background: '#191919' }}>
       <form onSubmit={handleSubmit}>
        <div className="Login" style={{ width: 247 * fem, height: 111 * fem, left: 892 * fem, top: 50 * fem, position: 'absolute', color: 'white', fontSize: 80 * ffem, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word' }}>Login</div>
        <div style={{ position: 'relative' }}>
          <input className="Email" style={{ width: 698 * fem, height: 80 * fem, left: 638 * fem, top: 280 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none', paddingLeft: 60 * fem }} type="email" placeholder="Email"
           name="email" value={formData.email} onChange={handleChange} />
          <img src={require("../image/email.png")} alt="Email" style={{ position: 'absolute', left: 650 * fem, top: 300 * fem, width: 40 * fem, height: 40 * fem }} />
        </div>

        <div className="PleaseLoginToContinue" style={{ width: 493 * fem, height: 60 * fem, left: 800 * fem, top: 170 * fem, position: 'absolute', color: '#AFAFAF', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>Please login to continue</div>
        <div style={{ position: 'relative' }}>
          <input className="Password" style={{ width: 698 * fem, height: 80 * fem, left: 638 * fem, top: 410 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none', paddingLeft: 60 * fem }} type="password" placeholder="Password"
           name="password" value={formData.password} onChange={handleChange} />
          <img src={require("../image/pass.png")} alt="Password" style={{ position: 'absolute', left: 650 * fem, top: 430 * fem, width: 40 * fem, height: 40 * fem }} />
        </div>

        <button type="submit" className="Continue" style={{ width: 472 * fem, height: 104 * fem, left: 751 * fem, top: 560 * fem, position: 'absolute', background: 'linear-gradient(267deg, #023994 0%, #12AAFF 100%)', borderRadius: 66 * fem, border: 'none', padding: '0', cursor: 'pointer' }}>
          <div style={{ color: 'white', fontSize: 50 * ffem, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Continue</div>
        </button>
        <Link to="/forgot-password"> <button className="ForgetPassword" style={{ left: 880 * fem, top: 700 * fem, position: 'absolute', color: '#11A3F8', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word', border: 'none', background: 'none', cursor: 'pointer' }}>Forget password?</button> </Link>

        <div className="YouDonTHaveAnAccount" style={{ left: 825 * fem, top: 770 * fem, position: 'absolute', color: '#AFAFAF', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>You don’t have an account?</div>
        <Link to="/signup"> <button className="ClickHere" style={{ left: 915 * fem, top: 850 * fem, position: 'absolute', color: '#11A3F8', fontSize: 35 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word', border: 'none', background: 'none', cursor: 'pointer' }}>Click here</button> </Link>
      </form>
    </div>
  );
}

export default Login;
