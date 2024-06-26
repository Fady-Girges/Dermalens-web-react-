import React from 'react';
import Sidebar from '../bar/Sidebar';
import Resultbar from '../bar/Resultbar';


function Result() {

  const baseWidth = 1920;
  const fem = window.innerWidth / baseWidth;
  const ffem = fem * 0.97;

  return (
<div className="Frame4" style={{width: 1920, height: 1080, position: 'relative', background: '#191919'}}>
     <Sidebar/>
     <Resultbar/>
     <div className="Rectangle8" style={{width: 1208 * fem, height: 321 * fem, left: 596 * fem, top: 29 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 24 * ffem}} />
  <div className="Photo" style={{left: 1129 * fem, top: 135 * fem, position: 'absolute', color: '#12AAFF', fontSize: 50 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>Photo</div>
  <div className="Rectangle9" style={{width: 591 * fem, height: 448 * fem, left: 596 * fem, top: 442 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 24 * ffem}} />
  <div className="Rectangle10" style={{width: 591 * fem, height: 448 * fem, left: 1213 * fem, top: 442 * fem, position: 'absolute', background: '#1D1D1D', borderRadius: 24 * ffem}} />
  <div className="RiskAssessment" style={{left: 749 * fem, top: 516 * fem, position: 'absolute', color: '#12AAFF', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Risk assessment</div>
  <div className="LoremIpsumSampleParagraphTextHereToShowcaseSampleTextInApp" style={{width: 574 * fem, left: 643 * fem, top: 576 * fem, position: 'absolute', color: '#8E8E8E', fontSize: 27 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>Lorem Ipsum sample paragraph text here<br/>to showcase sample text in app.</div>
  <div className="Result" style={{left: 664 * fem, top: 756 * fem, position: 'absolute', color: '#8E8E8E', fontSize: 35 * ffem, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Result<br/></div>
  <div className="BenginLesions" style={{left: 646 * fem, top: 821 * fem, position: 'absolute', color: '#12AAFF', fontSize: 27 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>60% bengin lesions </div>
  <div className="Diagnosis" style={{left: 975 * fem, top: 756 * fem, position: 'absolute', color: '#8E8E8E', fontSize: 35 * ffem, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Diagnosis</div>
  <div className="Disease" style={{left: 1022 * fem, top: 821 * fem, position: 'absolute', color: '#12AAFF', fontSize: 27 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>Disease </div>
  <div className="Advice" style={{left: 1448 * fem, top: 516 * fem, position: 'absolute', color: '#8E8E8E', fontSize: 40 * ffem, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Advice</div>
  <div className="PleaseSeekDermatologistHelp" style={{left: 1346 * fem, top: 606 * fem, position: 'absolute', color: '#8E8E8E', fontSize: 27 * ffem, fontFamily: 'Poppins', fontWeight: '275', wordWrap: 'break-word'}}>Please seek dermatologist help</div>
  <button style={{width: 314 * fem, height: 79 * fem, left: 1352 * fem, top: 739 * fem, position: 'absolute', background: 'linear-gradient(267deg, #023994 0%, #12AAFF 100%)', borderRadius: 49.89 * ffem, border: 'none', outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
   <div className="FindNearestDoctor" style={{color: '#EEEEEE', fontSize: 30 * fem, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Find nearest doctor</div>
  </button>


</div>
 
  );
}

export default Result;
