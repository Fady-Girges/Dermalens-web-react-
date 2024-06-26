import React from 'react'
import { Link } from 'react-router-dom';
import Profile from '../pages/profile';








export default function Profilebar() {
    const baseWidth = 1920;
    const fem = window.innerWidth / baseWidth;
    const ffem = fem * 0.97;
  return <>
  
  <Link to="/profile">
    <button style={{ left: 84 * fem, top: 533 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#12AAFF', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Profile()}>
     <img src={require("../image/Group 3.png")} alt="Profile" />
     <span>Profile</span></button></Link>
  
  
  
  </>
}