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
import '../../Components/QuizzDashboard/ContainerStyles.css';

function CarExamDashboard() {
    // State for exams and simulators
    const [exams, setExams] = useState([]);
    const [hardExams , setHardExams] = useState([]);
    const [hardestExams , setHardestExams] = useState([]);
    
    const [simulators, setSimulators] = useState([]);
    const [hardsimulators, setHardSimulators] = useState([]);
    const [hardestsimulators, setHardestSimulators] = useState([]);

    useEffect(() => {
        // Function to create exam cards
        const ExamCard = (examnumber, title, image, description, rangeStart, rangeEnd) => {
            return {
                examnumber,
                title,
                image,
                description,
                rangeStart,
                rangeEnd
            };
        };

        // Function to create simulator cards
        const SimulatorCard = (examNumber, title, image, description, hazards, videoLength) => {
            return {
                examNumber,
                title,
                image,
                description,
                hazards,
                videoLength
            };
        };

        // Data for exams
        const dummyExams = [
            {"examnumber":'1',"title": 'Practical Test 1',"image": '/images/im1.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '1',"rangeEnd":'40' },
            {"examnumber":'2',"title": 'Practical Test 2',"image": '/images/im2.jpg', "description":'Questions cover roundabouts, intersections, overtaking other vehicles, and driving on highways. Two sections: Road Signs and Road Rules.',"rangeStart": '41',"rangeEnd":'80' },
            {"examnumber":'3',"title": 'Practical Test 3',"image": '/images/im3.jpg', "description":'Questions cover roundabouts, intersections, overtaking other vehicles, and driving on highways. Two sections: Road Signs and Road Rules.',"rangeStart": '81',"rangeEnd":'100' },
            {"examnumber":'4',"title": 'Practical Test 4',"image": '/images/im4.jpg', "description":'This test challenges you on distracted driving fines, traffic lights, maximum speed limits, cell phone use, blood alcohol levels, and more.',"rangeStart": '101',"rangeEnd":'120' },
        ];

        const dummyHardExams = [
            {"examnumber":'1',"title": 'Road Rules',"image": '/images/im5.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '1',"rangeEnd":'40' },
            {"examnumber":'2',"title": 'G1 Fines, Limits and Demerit Points',"image": '/images/img6.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '41',"rangeEnd":'80' },
            {"examnumber":'3',"title": 'Hardest Marathon',"image": '/images/img7.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '81',"rangeEnd":'100' },
            {"examnumber":'4',"title": 'G1 Fines, Limits and Demerit Points',"image": '/images/img8.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '101',"rangeEnd":'120' },
        ];

        const dummyHardestExams = [
            {"examnumber":'1',"title": 'Road Rules',"image": '/images/img9.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '1',"rangeEnd":'40' },
            {"examnumber":'2',"title": 'G1 Fines, Limits and Demerit Points',"image": '/images/img10.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '41',"rangeEnd":'80' },
            {"examnumber":'3',"title": 'Hardest Marathon',"image": '/images/img11.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '81',"rangeEnd":'100' },
            {"examnumber":'4',"title": 'G1 Fines, Limits and Demerit Points',"image": '/images/img12.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '101',"rangeEnd":'120' },
        ];

        const dummySimulators = [
            {"examNumber":'1', "title":'Defensive Driving Hazard Simulator 1', "image":'/images/s1.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
            {"examNumber":'2', "title":'Defensive Driving Hazard Simulator 2', "image":'/images/s2.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'2.59 Min'},            
            {"examNumber":'3', "title":'Defensive Driving Hazard Simulator 3', "image":'/images/s3.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.30 Min'},        
            {"examNumber":'4', "title":'Defensive Driving Hazard Simulator 4', "image":'/images/s4.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'2.02 Min'},
        ];

        const dummyHardSimulators = [
            {"examNumber":'1', "title":'Defensive Driving Hazard Simulator 1', "image":'/images/s5.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.39 Min'},
            {"examNumber":'2', "title":'Defensive Driving Hazard Simulator 2', "image":'/images/s6.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'2.00 Min'},            
            {"examNumber":'3', "title":'Defensive Driving Hazard Simulator 3', "image":'/images/s7.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'2.30 Min'},        
            {"examNumber":'4', "title":'Defensive Driving Hazard Simulator 4', "image":'/images/s8.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'2.58 Min'},
        ];

        const dummyHardestSimulators = [
            {"examNumber":'1', "title":'Defensive Driving Hazard Simulator 1', "image":'/images/s9.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
            {"examNumber":'2', "title":'Defensive Driving Hazard Simulator 2', "image":'/images/s10.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},            
            {"examNumber":'3', "title":'Defensive Driving Hazard Simulator 3', "image":'/images/s11.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},        
            {"examNumber":'4', "title":'Defensive Driving Hazard Simulator 4', "image":'/images/s12.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
        ];





            // Set the exams and simulators states with the dummy data
        setExams(dummyExams);
        setHardExams(dummyHardExams);
        setHardestExams(dummyHardestExams);
        setSimulators(dummySimulators);
        setHardSimulators(dummyHardSimulators);
        setHardestSimulators(dummyHardestSimulators);

        console.log(simulators);
    }, []);

    // Paper styled component
    const Item = styled(Paper)(({ theme }) => ({
        // Styles...
    }));

    return (
        <div>
            
            <NavBarBottom />

            {/* Introduction Sections */}
            <IntroductionSection1 title="Introduction 1" content="This is the first introduction section." />
            <IntroductionSection2 title="Introduction 2" content="This is the second introduction section." />
            

            {/* Exam Lists */}
            <div className="container" style={{ marginTop: '80px' }}>
                <Stack spacing={2}>
                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Easy</h3>
                            <ExamListE exams={exams} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hard</h3>
                            <ExamListH1 exams={hardExams} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hardest</h3>
                            <ExamListH2 exams={hardestExams} />
                        </div>
                    </Item>
                </Stack>
            </div>
            <IntroductionSection3 title="Introduction 3" content="This is the third introduction section." />
            {/* Simulators */}
            <div className="container" style={{ marginTop: '80px' }}>
                <Stack spacing={2}>
                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Easy</h3>
                            <SimuE simulators={simulators} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hard</h3>
                            <SimuH1 simulators={hardsimulators} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hardest</h3>
                            <SimuH2 simulators={hardestsimulators} />
                        </div>
                    </Item>
                </Stack>
            </div>
        </div>
    );
}

export default CarExamDashboard;
