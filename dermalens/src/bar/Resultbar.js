import React from 'react'
import { Link } from 'react-router-dom';
import Result from '../pages/result';







export default function Resultbar() {
    const baseWidth = 1920;
    const fem = window.innerWidth / baseWidth;
    const ffem = fem * 0.97;
  return <>
  
  
  <Link to="/result">
    <button style={{ left: 85 * fem, top: 93 * fem, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', color:'#12AAFF', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => Result()}>
     <img src={require("../image/Vector (1).png")} alt="Result"/>
     <span>Results</span></button></Link>
  
  
  
  </>
}