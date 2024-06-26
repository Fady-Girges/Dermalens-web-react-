import React from 'react'
import { Link } from 'react-router-dom';
import Setting from '../pages/setting';




export default function Settingbar() {
    const baseWidth = 1920;
    const fem = window.innerWidth / baseWidth;
    const ffem = fem * 0.97;
  return <>
  
  
  <Link to="/setting">
    <button style={{ left: 77 * fem, top: 753 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#12AAFF', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Setting()}>
     <img src={require("../image/Vector.png")} alt="Setting"/>
     <span>Setting</span></button></Link>
  
  
  
  </>
}