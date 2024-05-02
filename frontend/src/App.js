import './App.css';
import AddTest from './Pages/AdminPage/AddTest';
import Payment from './Pages/PaymentPage/Payment';
import QuestionTextField from './Components/Admin/QuestionTextField';
import TestIdComponent from './Components/Admin/TestIDContainer';
import CarExamDashboard from './Pages/QuizzDashboardPage/CarExamDashboard';
import Loginpg1 from './Pages/UserLogPage/Loginpg1';
import Loginpg2 from './Pages/UserLogPage/Loginpg2';
import CustomizedDialogs from './Components/Admin/SaveDialog';
import NameCard from './Components/UserProfile/NameCard'
import UserProfilePage from './Pages/UserProfile'
import BasicPie from './Components/UserProfile/PieChart';
import PassRatioChart from './Components/UserProfile/PassRatioChart';
import StickyHeadTable from './Components/UserProfile/ExamTable';

function App() {
  return (
    <div className="App">
      
      {/* <Loginpg1 /> */}
      {/* <Loginpg2 /> */}
      <AddTest />
      {/* <CustomizedDialogs /> */}
      {/* <Payment /> */}
      {/* <CarExamDashboard /> */}
      {/* <UserProfilePage /> */}
      {/* <BasicPie /> */}
      {/* <PassRatioChart /> */}
      {/* <StickyHeadTable /> */}

    </div>
  );
}

export default App;
