import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IntroductionSection1 from '../../Components/QuizzDashboard/intro1';
import IntroductionSection2 from '../../Components/QuizzDashboard/intro2';
import NavBarBottom from '../../Components/QuizzDashboard/NavBarBottom';
import ExamListE from '../../Components/QuizzDashboard/ExamListEasy';
import ExamListH1 from '../../Components/QuizzDashboard/ExamListHard';
import ExamListH2 from '../../Components/QuizzDashboard/ExamListHardest';
import IntroductionSection3 from '../../Components/QuizzDashboard/intro3';
import SimuE from '../../Components/QuizzDashboard/simuEasy';
import SimuH1 from '../../Components/QuizzDashboard/simuHard';
import SimuH2 from '../../Components/QuizzDashboard/simuHardest';
import '../../Components/QuizzDashboard/ContainerStyles.css'
import NavBarTop from '../../Components/Utils/NavBarTop';


function CarExamDashboard() {
    const [exams, setExams] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    // Styles...
    
  }));

  useEffect(() => {
    const fetchExams = async () => {
      const dummyExams = [
        { _id: 1, name: 'Easy Exam 1', level: 'easy' },
        { _id: 2, name: 'Easy Exam 2', level: 'easy' },
        { _id: 3, name: 'Hard Exam 1', level: 'hard' },
        { _id: 4, name: 'Hardest Exam 1', level: 'hardest' },
        // Add more exams with different difficulty levels
      ];
      setExams(dummyExams);
    };

    fetchExams();
  }, []);

    return (
        <div>
            
            <NavBarBottom />

            <IntroductionSection1 title="Introduction 1" content="This is the first introduction section." />
            <IntroductionSection2 title="Introduction 2" content="This is the second introduction section." /> 


            <div className="container" style={{ marginTop: '80px' }}>
          <Stack spacing={2}>
            <Item>
              <div className="difficulty-container">
                <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Easy</h3>
                <ExamListE exams={exams.filter((exam) => exam.level === 'easy')} />
              </div>
            </Item>

            <Item>
              <div className="difficulty-container">
                <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hard</h3>
                <ExamListH1 exams={exams.filter((exam) => exam.level === 'hard')} />
              </div>
            </Item>

            <Item>
              <div className="difficulty-container">
                <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hardest</h3>
                <ExamListH2 exams={exams.filter((exam) => exam.level === 'hardest')} />
              </div>
            </Item>
          </Stack>
        </div>

        <IntroductionSection3 title="Introduction 3" content="This is the third introduction section." />

        <div className="container" style={{ marginTop: '80px' }}>
          <Stack spacing={2}>
            <Item>
              <div className="difficulty-container">
                <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Easy</h3>
                <SimuE exams={exams.filter((exam) => exam.level === 'easy')} />
              </div>
            </Item>

            <Item>
              <div className="difficulty-container">
                <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hard</h3>
                <SimuH1 exams={exams.filter((exam) => exam.level === 'hard')} />
              </div>
            </Item>

            <Item>
              <div className="difficulty-container">
                <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hardest</h3>
                <SimuH2 exams={exams.filter((exam) => exam.level === 'hardest')} />
              </div>
            </Item>
          </Stack>
        </div>
        </div>
    )
}

export default CarExamDashboard;