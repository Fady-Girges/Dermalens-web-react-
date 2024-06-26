import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/reset-password', { email });
      alert('Password reset link sent to your email');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const baseWidth = 1920;
  const fem = window.innerWidth / baseWidth;
  const ffem = fem * 0.97;

  



  return(
    <div style={{width: 1920, height: 1080, position: 'relative', background: '#191919'}}>
      <form onSubmit={handleSubmit}>
      <div className="Login" style={{width: 247 * fem, height: 111 * fem, left: 892 * fem, top: 50 * fem, position: 'absolute', color: 'white', fontSize: 80 * ffem, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word'}}>Login</div>
      <div style={{ position: 'relative' }}>
  <input className="Email" style={{ width: 698 * fem, height: 80 * fem, left: 638 * fem, top: 280 * fem, position: 'absolute', background: '#272727', borderRadius: 9.14 * fem, padding: 10 * ffem, color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: 300, border: 'none', outline: 'none', paddingLeft: 60 * fem }} type="email" placeholder="Email"
    name="email"  value={email} onChange={handleChange}   />
  <img src={require("../image/email.png")} alt="Email" style={{ position: 'absolute', left: 650 * fem, top: 300 * fem, width: 40 * fem, height: 40 * fem }} />
</div>


<button type="submit" className="Continue" style={{ width: 472 * fem, height: 104 * fem, left: 751 * fem, top: 560 * fem, position: 'absolute', background: 'linear-gradient(267deg, #023994 0%, #12AAFF 100%)', borderRadius: 66 * fem, border: 'none', padding: '0', cursor: 'pointer' }}>
          <div style={{ color: 'white', fontSize: 50 * ffem, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Continue</div>
        </button>
  
    
    </form>
    </div>
  );
}

export default ForgotPassword;