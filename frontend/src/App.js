import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTest from './Pages/AdminPage/AddTest';
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
import ViewResultPage from './Pages/ViewResult';
import CheckoutForm from './Components/Payment/CheckoutForm';
import Return from './Components/Payment/Return';
import AttemptQuiz from './Pages/AttemptQuiz';



function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path="/loginpg1" element={<Loginpg1 />} />
        <Route path="/loginpg2" element={<Loginpg2 />} />
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
        <Route path="/quiz" element={<AttemptQuiz />} />


      </Routes>
    </Router>
      
      {/* <Loginpg1 /> */}
      {/* <Loginpg2 /> */}
      {/* <AddTest /> */}
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
