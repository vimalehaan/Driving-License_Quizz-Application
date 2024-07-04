import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { typographyTheme } from './Components/Utils/TypographyTheme';

import Quizdashboard from './Components/Admin/AddQuestion.js/quizDashboard'
import ViewQuestions from './Pages/AdminPage/ViewQuestions'

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
import AttemptQuiz from './Pages/AttemptQuiz';
import FileUploadSample from './FileUpload';
import PremiumAd from './Pages/PremiumAdPage';
import Certificate from './Pages/CertificatePage/Certificatepage';

import DummyPage from './Pages/Dummy';
import ProtectedRoute from './Components/Utils/ProtectedRoutes';

import { useAuth } from './Components/AuthContext_Handle/Auth_Context'
import { AuthProvider } from './Components/AuthContext_Handle/Auth_Context';



function RouteMain() {
    const { userRole } = useAuth();
    return (
        <ThemeProvider theme={typographyTheme}>
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/social-login" element={<SocialSignIn />}></Route>
                        <Route exact path="/signup" element={<Signup />}></Route>
                        <Route exact path="/reset" element={<ResetPassword />}></Route>

                        {userRole === 'user' ? (
                            <>
                                <Route path="/carexamdb" element={<CarExamDashboard />} />
                                <Route path="/result/:attemptId" element={<ViewResultPage />} />
                                <Route path="/profile" element={<UserProfilePage />} />
                                <Route path="/checkout" element={<CheckoutForm />} />
                                <Route path="/quiz/:attemptId" element={<AttemptQuiz />} />
                                <Route path="/upload" element={<FileUploadSample />} />
                                <Route path="/premium" element={<PremiumAd />} />
                            </>
                        ) : userRole === 'admin' ? (
                            <>
                                <Route path="/addtest" element={<AddTest />} />
                                <Route path="/return" element={<Return />} />
                                <Route path="/questions" element={<ViewQuestions />} />
                                <Route path="/quiz-dashboard" element={<Quizdashboard />} />
                            </>
                        ) : null}

                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default RouteMain;