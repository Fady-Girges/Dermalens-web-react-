import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './pages/home';
import Result from './pages/result';
import Profile from './pages/profile';
import Setting from './pages/setting';
import Forgotpassword from './components/forgot-password';


function App() {
 return(
<Router>
 <Routes>
  <Route exact path="/" element={<Login />} />
  <Route exact path="/login" element={<Login />} />
  <Route exact path="/signup" element={<Signup/>} />
  <Route exact path="/home" element={<Home/>} />
  <Route exact path="/result" element={<Result />} />
  <Route exact path="/profile" element={<Profile />} />
  <Route exact path="/setting" element={<Setting />} />
  <Route exact path="/forgot-password" element={<Forgotpassword />} />
 </Routes>
</Router>
 );

}
export default App;
