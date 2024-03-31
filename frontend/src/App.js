import './App.css';
import Login from './Pages/UserLogPage/Login';
import AddTest from './Pages/AdminPage/AddTest';
import Payment from './Pages/PaymentPage/Payment';
import QuestionTextField from './Components/Admin/QuestionTextField';
import TestIdComponent from './Components/Admin/TestIDContainer';
import CarExamDashboard from './Pages/QuizzDashboardPage/CarExamDashboard';

function App() {
  return (
    <div className="App">
      
      {/* <Login /> */}
      {/* <AddTest /> */}
      {/* <Payment /> */}
      <CarExamDashboard />
    </div>
  );
}

export default App;
