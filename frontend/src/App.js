import './App.css';
import AddTest from './Pages/AdminPage/AddTest';
import Payment from './Pages/PaymentPage/Payment';
import QuestionTextField from './Components/Admin/QuestionTextField';
import TestIdComponent from './Components/Admin/TestIDContainer';
import CarExamDashboard from './Pages/QuizzDashboardPage/CarExamDashboard';
import Loginpg1 from './Pages/UserLogPage/Loginpg1';
import Loginpg2 from './Pages/UserLogPage/Loginpg2';
import Questionview from './Pages/Questionview/Questionview'


function App() {
  return (
    <div className="App">
      
      {/* <Loginpg1 /> */}
      <Loginpg2 />
      {/* <AddTest /> */}
      {/* <Payment /> */}
      {/* <CarExamDashboard /> */}

     <Questionview/>

      
    </div>
  );
}

export default App;
