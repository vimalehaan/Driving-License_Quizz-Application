import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import AddTest from './Pages/AdminPage/AddTest';
import QuestionTextField from './Components/Admin/QuestionTextField';
import TestIdComponent from './Components/Admin/TestIDContainer';
import CarExamDashboard from './Pages/QuizzDashboardPage/CarExamDashboard';
import CustomizedDialogs from './Components/Admin/SaveDialog';
import NameCard from './Components/UserProfile/NameCard'
import UserProfilePage from './Pages/UserProfile'
import BasicPie from './Components/UserProfile/PieChart';
import PassRatioChart from './Components/UserProfile/PassRatioChart';
import StickyHeadTable from './Components/UserProfile/ExamTable';
import ViewResultPage from './Pages/ViewResult';
import CheckoutForm from './Components/Payment/CheckoutForm';
import Return from './Components/Payment/Return';
import Login from './Pages/UserLogPage/Login';
import SocialSignIn from './Pages/UserLogPage/SocialSignIn';
import Signup from './Pages/UserLogPage/Signup';
import ResetPassword from './Pages/UserLogPage/ResetPassword';




function App() {
  return (
    <div className="App">
    
    <GoogleOAuthProvider clientId="345006772496-uvo2kh85h9sn1g4pef686hgv180re52c">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/social-login" element={<SocialSignIn/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/reset" element={<ResetPassword/>}></Route>
          
          <Route path="/addtest" element={<AddTest />} />
          <Route path="/customdialog" element={<CustomizedDialogs />} />
          <Route path="/carexamdb" element={<CarExamDashboard />} />
          <Route path="/userpropage" element={<UserProfilePage />} />
          <Route path="/piechart" element={<BasicPie />} />
          <Route path="/passratiochart" element={<PassRatioChart />} />
          <Route path="/stickyheadtable" element={<StickyHeadTable />} />
          <Route path="/result" element={<ViewResultPage />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />

        </Routes>
      </Router>
    </GoogleOAuthProvider>
    </div>
  );
}

export default App;
