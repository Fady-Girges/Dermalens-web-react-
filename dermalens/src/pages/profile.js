import React from 'react';
import Sidebar from '../bar/Sidebar';
import Profilebar from '../bar/Profilebar';

function Profile() {
  const baseWidth = 1920;
  const fem = window.innerWidth / baseWidth;
  const ffem = fem * 0.97;

  
  const myStyles = {color: '#EEEEEE', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'};
  const myDesign = {color: '#EEEEEE', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'};
  const myStyle = {color: '#12AAFF', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'};

  return (
    <div className="Frame4" style={{width: 1920, height: 1080, position: 'relative', background: '#191919'}}>
<Sidebar/>
<Profilebar/>
     <div className="Rectangle7" style={{width: 527 * fem, height: 854 * fem, left: 596 * fem, top: 29 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 24 * ffem}} />
  <div className="Rectangle8" style={{width: 527 * fem, height: 854 * fem, left: 1279 * fem, top: 29 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 24 * ffem}} />
  <div className="UserInfo" style={{left: 773 * fem, top: 90 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>User info:</div>
  <div className="Male" style={{left: 820 * fem, top: 230 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Male</div>
  <div className="YearsOld" style={{left: 777 * fem, top: 385 * fem, position: 'absolute'}}><span style={myStyles}>23</span><span style={myDesign}> </span><span style={myStyle}>Years old</span></div>
  <div className="Cm" style={{left: 805 * fem, top: 554 * fem, position: 'absolute'}}><span style={myStyles}>182</span><span style={myDesign}> </span><span style={myStyle}>Cm</span></div>
  <div className="Diagnosis" style={{left: 729 * fem, top: 723 * fem, position: 'absolute', color: '#12AAFF', fontSize: 35 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>Diagnosis:</div>
  <div className="Clear" style={{left: 905 * fem, top: 731 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Clear</div>
  <div className="PastResults" style={{left: 1427 * fem, top: 90 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>past results:</div>
  
  <button style={{ width: 373 * fem, height: 47 * fem, left: 1356 * fem, top: 252 * fem, position: 'absolute', background: '#2C2C2C', borderRadius: 10 * ffem, border: 'none', outline: 'none', padding: '0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
  <div className="Result12Pdf" style={{ width: 183 * fem, left: 64 * fem, top: 4 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 25 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word' }}>Result12.pdf</div>
  <img src={require("../image/auto.png")} alt="Result12Pdf" style={{ width: 40 * fem, height: 40 * fem, marginLeft: 10 * fem }} />
</button>

  <button style={{ width: 373 * fem, height: 47 * fem, left: 1356 * fem, top: 476 * fem, position: 'absolute', background: '#2C2C2C', borderRadius: 10 * ffem, border: 'none', outline: 'none', padding: '0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
  <div className="Result12Pdf" style={{ width: 183 * fem, left: 64 * fem, top: 4 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 25 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word' }}>Result12.pdf</div>
  <img src={require("../image/auto.png")} alt="Result12Pdf" style={{ width: 40 * fem, height: 40 * fem, marginLeft: 10 * fem }} />
</button>

<button style={{ width: 373 * fem, height: 47 * fem, left: 1356 * fem, top: 700 * fem, position: 'absolute', background: '#2C2C2C', borderRadius: 10 * ffem, border: 'none', outline: 'none', padding: '0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
  <div className="Result12Pdf" style={{ width: 183 * fem, left: 64 * fem, top: 4 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 25 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word' }}>Result12.pdf</div>
  <img src={require("../image/auto.png")} alt="Result12Pdf" style={{ width: 40 * fem, height: 40 * fem, marginLeft: 10 * fem }} />
</button>

    </div>
 
  );
}

export default Profile;
