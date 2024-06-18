import './App.css';
import AddTest from './Pages/AdminPage/AddTest';
import Payment from './Pages/PaymentPage/Payment';
import QuestionTextField from './Components/Admin/QuestionTextField';
import TestIdComponent from './Components/Admin/TestIDContainer';
import CarExamDashboard from './Pages/QuizzDashboardPage/CarExamDashboard';
import Login from './Pages/UserLogPage/Login';
import SocialSignIn from './Pages/UserLogPage/SocialSignIn';
import OTP from './Pages/UserLogPage/OTP';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/social-login" element={<SocialSignIn/>}></Route>
          {/* <Route path="/a"><AddTest /></Route>
          <Route path="/b"><Payment /></Route>
          <Route path="/c"><CarExamDashboard /></Route>
          <Route path="/verify"><OTP /></Route> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
