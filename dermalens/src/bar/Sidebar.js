import React from 'react'
import { Link } from 'react-router-dom';
import Result from '../pages/result';
import Profile from '../pages/profile';
import Setting from '../pages/setting';
import Home from '../pages/home';



export default function Sidebar() {
    const baseWidth = 1920;
    const fem = window.innerWidth / baseWidth;
    const ffem = fem * 0.97;
  return <>
    <div className="Rectangle4" style={{width: 863.87 * fem, height: 151.25 * fem, left: 210.46 * fem, top: 30.35 * fem, position: 'absolute', transform: 'rotate(90.51deg)', transformOrigin: '0 0', background: '#1D1D1D', borderRadius: 24 * ffem}} />
    <Link to="/result">
    <button style={{ left: 85 * fem, top: 93 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#898989', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Result()}>
     <img src={require("../image/resulthome.png")} alt="Result"/>
     <span>Results</span></button></Link>
     <Link to="/home">
     <button style={{ left: 89 * fem, top: 313 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#898989', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Home()}>
     <img src={require("../image/home1.png")} alt="Home"/>
     <span>Home</span></button></Link>
     <Link to="/profile">
    <button style={{ left: 84 * fem, top: 533 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#898989', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Profile()}>
     <img src={require("../image/profile home.png")} alt="Profile" />
     <span>Profile</span></button></Link>
     <Link to="/setting">
    <button style={{ left: 77 * fem, top: 753 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#898989', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Setting()}>
     <img src={require("../image/setting home.png")} alt="Setting"/>
     <span>Setting</span></button></Link>
   
     </>
}
