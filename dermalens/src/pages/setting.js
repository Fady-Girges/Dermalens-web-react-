import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../bar/Sidebar';
import Settingbar from '../bar/Settingbar';
import axios from 'axios';

const Setting = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const baseWidth = 1920;
  const fem = window.innerWidth / baseWidth;
  const ffem = fem * 0.97;

  return (
    <div className="Frame4" style={{ width: 1920, height: 1080, position: 'relative', background: '#191919' }}>
      <Sidebar />
      <Settingbar />

      <button className="Rectangle2" style={{ width: 1151 * fem, height: 157 * fem, left: 596 * fem, top: 29 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 9.14 * ffem, border: 'none', outline: 'none' }} />

      <button className="LogOut" style={{ width: 218 * fem, height: 75 * fem, left: 1063 * fem, top: 70 * fem, position: 'absolute', color: '#AFAFAF', fontSize: 50 * ffem, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word', border: 'none', background: 'none', outline: 'none' }} onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Setting;
