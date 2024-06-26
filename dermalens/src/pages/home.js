import React from 'react';
import Sidebar from '../bar/Sidebar';
import Homebar from '../bar/homebar';


function Home() {
  const baseWidth = 1920;
  const fem = window.innerWidth / baseWidth;
  const ffem = fem * 0.97;

  return (
  <div className="Frame4" style={{width: 1920, height: 1080, position: 'relative', background: '#191919'}}>
<Sidebar/>
<Homebar/>
 <div className="Rectangle5" style={{width: 1186 * fem, height: 354 * fem, left: 596 * fem, top: 29 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 24 * ffem}} />
    <div className="Rectangle6" style={{width: 1186 * fem, height: 354 * fem, left: 596 * fem, top: 540 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 24 * ffem}} />
    <div className="PastResult" style={{left: 662 * fem, top: 77 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>past result:</div>
    <button style={{ width: 997 * fem, height: 136 * fem, left: 698 * fem, top: 169 * fem, position: 'absolute', background: '#2C2C2C', borderRadius: 10 * ffem, border: 'none', outline: 'none', padding: '100', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
  <img src={require("../image/auto.png")} alt="Result12Pdf" style={{ width: 40 * fem, height: 40 * fem, marginRight: 10 * fem }} />
  <div className="Result12Pdf" style={{ color: '#EEEEEE', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word' }}>Result12.pdf</div>
</button>

    <div className="NewAnalysis" style={{left: 391 * fem, top: 417 * fem, position: 'absolute', color: 'white', fontSize: 60 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>New analysis</div>
    <div className="PleaseProvideADocumentOfYourXRay" style={{width: 813 * fem, left: 662 * fem, top: 597 * fem, position: 'absolute', color: '#EEEEEE', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>Please provide a document of your x-ray</div>
    <button className="TakePhoto" style={{ width: 380 * fem, height: 117 * fem, left: 731 * fem, top: 707 * fem, position: 'absolute', background: 'linear-gradient(267deg, #023994 0%, #12AAFF 100%)', borderRadius: 49.89 * ffem, border: 'none', padding: '0', cursor: 'pointer' }}>
     <div style={{color: 'white', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Take photo</div>
    </button>
    <button className="Upload" style={{ width: 380 * fem, height: 117 * fem, left: 1274 * fem, top: 707 * fem, position: 'absolute', borderRadius: 49.89 * fem, border: '1px #12AAFF solid', background: 'none', padding: '0', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("../image/group.png")} alt="Upload" style={{ width: 40 * fem, height: 40 * fem, marginRight: 10 * fem }} /><div style={{ color: '#12AAFF', fontSize: 30 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word' }}>Upload</div></button>
  </div>
  );
}

export default Home;
