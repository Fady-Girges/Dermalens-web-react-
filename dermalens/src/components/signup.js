
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      navigate('/home');
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
        <div className="Signup" style={{ left: 874 * fem, top: 36 * fem, position: 'absolute', color: 'white', fontSize: 80 * ffem, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word' }}>Signup</div>
        <div className="PleaseSignupToContinue" style={{ left: 781 * fem, top: 156 * fem, position: 'absolute', color: '#AFAFAF', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>Please Signup to continue</div>
        <input className="Email" style={{ width: 698 * fem, height: 80 * fem, left: 652 * fem, top: 240 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none' }} type="email" placeholder="Email"
         name="email" value={formData.email} onChange={handleChange} />
        <input className="first" style={{ width: 335 * fem, height: 80 * fem, left: 652 * fem, top: 336 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none' }} type="text" placeholder="First name"
         name="firstName" value={formData.firstName} onChange={handleChange} />
        <input className="Password" style={{ width: 698 * fem, height: 80 * fem, left: 652 * fem, top: 432 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none' }} type="password" placeholder="Password"
         name="password" value={formData.password} onChange={handleChange} />
        <input className="last" style={{ width: 335 * fem, height: 80 * fem, left: 1015 * fem, top: 336 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none' }} type="text" placeholder="Last name"
         name="lastName" value={formData.lastName} onChange={handleChange} />
        <input className="confirm" style={{ width: 698 * fem, height: 80 * fem, left: 652 * fem, top: 528 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none' }} type="password" placeholder="Confirm password"
         name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        <input className="phone" style={{ width: 485 * fem, height: 80 * fem, left: 865 * fem, top: 624 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 400, border: 'none', outline: 'none' }} type="tel" placeholder="Phone number"
         name="phone" value={formData.phone} onChange={handleChange} />

        <div className="radio" style={{ width: 165 * fem, height: 73 * fem, left: 655 * fem, top: 624 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 9.14 }} />
        <button  type="submit"  className="Continue" style={{ width: 472 * fem, height: 104 * fem, left: 766 * fem, top: 750 * fem, position: 'absolute', background: 'linear-gradient(267deg, #023994 0%, #12AAFF 100%)', borderRadius: 66 * fem, border: 'none', padding: '0', cursor: 'pointer' }} >
          <div  style={{ color: 'white', fontSize: 50 * ffem, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Continue</div>
        </button>
        <div className="AlreadyHaveAnAccount" style={{ left: 714 * fem, top: 863 * fem, position: 'absolute', color: '#AFAFAF', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>already have an account?</div>
        <Link to="/login">  <button className="ClickHere" style={{ left: 1113 * fem, top: 867 * fem, position: 'absolute', color: '#11A3F8', fontSize: 35 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word', border: 'none', background: 'none', cursor: 'pointer' }}>Click here</button> </Link>

      </form>
    </div>
  );
};

export default Signup;
