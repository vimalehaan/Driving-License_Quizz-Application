import './App.css';
import AddTest from './Pages/AdminPage/AddTest';
import Payment from './Pages/PaymentPage/Payment';
import QuestionTextField from './Components/Admin/QuestionTextField';
import TestIdComponent from './Components/Admin/TestIDContainer';
import CarExamDashboard from './Pages/QuizzDashboardPage/CarExamDashboard';
import Loginpg1 from './Pages/UserLogPage/Loginpg1';
import Loginpg2 from './Pages/UserLogPage/Loginpg2';

function App() {
  return (
    <div className="App">
      
      {/* <Loginpg1 /> */}
      {/* <Loginpg2 /> */}
      {/* <AddTest /> */}
      {/* <Payment /> */}
       <CarExamDashboard /> 
      
    </div>
  );
}

export default App;
