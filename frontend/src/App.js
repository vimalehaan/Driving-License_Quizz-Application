import './App.css';
import React, { useState } from 'react';
import AddTest from './Pages/AdminPage/AddTest';
import Payment from './Pages/PaymentPage/Payment';
import QuestionTextField from './Components/Admin/QuestionTextField';
import TestIdComponent from './Components/Admin/TestIDContainer';
import CarExamDashboard from './Pages/QuizzDashboardPage/CarExamDashboard';
import Loginpg1 from './Pages/UserLogPage/Loginpg1';
import Loginpg2 from './Pages/UserLogPage/Loginpg2';
import CommercialExamDashboard from './Pages/QuizzDashboardPage/CommercialExamDashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBarBottom from './Components/QuizzDashboard/NavBarBottom';


function App() {
  const [showCommercialDashboard, setShowCommercialDashboard] = useState(false);

  const handleCommercialClick = () => {
    setShowCommercialDashboard(true);
  };
  return (
    <Router> 
      <div className="App">
        {/* <Loginpg1 /> */}
        {/* <Loginpg2 /> */}
        {/* <AddTest /> */}
        {/* <Payment /> */}
        <CarExamDashboard />
        {showCommercialDashboard && <CommercialExamDashboard />}
        <NavBarBottom handleCommercialClick={handleCommercialClick} />
        
      </div>
    </Router>
  );
}

export default App;
