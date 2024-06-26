import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../pages/home';


export default function Homebar() {
    const baseWidth = 1920;
    const fem = window.innerWidth / baseWidth;
    const ffem = fem * 0.97;
  return <>

<Link to="/home">
     <button style={{ left: 89 * fem, top: 313 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#12AAFF', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Home()}>
     <img src={require("../image/home.png")} alt="Home"/>
     <span>Home</span></button></Link>




</>
}