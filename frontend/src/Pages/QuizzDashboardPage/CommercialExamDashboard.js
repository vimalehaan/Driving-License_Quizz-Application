import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import NavBarBottom from '../../Components/QuizzDashboard/NavBarBottom';
import ExamListE from '../../Components/QuizzDashboard/ExamListEasy';
import ExamListH1 from '../../Components/QuizzDashboard/ExamListHard';
import ExamListH2 from '../../Components/QuizzDashboard/ExamListHardest';

import SimuE from '../../Components/QuizzDashboard/simuEasy';
import SimuH1 from '../../Components/QuizzDashboard/simuHard';
import SimuH2 from '../../Components/QuizzDashboard/simuHardest';
import '../../Components/QuizzDashboard/ContainerStyles.css';

function CommercialExamDashboard() {
    // State for exams and simulators
    const [cexams, setCExams] = useState([]);
    const [hardcExams , setHardCExams] = useState([]);
    const [hardestCExams , setHardestCExams] = useState([]);
    
    const [csimulators, setCSimulators] = useState([]);
    const [chardsimulators, setCHardSimulators] = useState([]);
    const [chardestsimulators, setCHardestSimulators] = useState([]);

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
        const dummyCExams = [
            {"examnumber":'1',"title": 'Practical Test 1',"image": '/images/ce1.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '1',"rangeEnd":'40' },
            {"examnumber":'2',"title": 'Practical Test 2',"image": '/images/ce2.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '41',"rangeEnd":'80' },
            {"examnumber":'3',"title": 'Practical Test 3',"image": '/images/ce3.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '81',"rangeEnd":'100' },
            {"examnumber":'4',"title": 'Practical Test 4',"image": '/images/ce4.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '101',"rangeEnd":'120' },
        ];

        const dummyHardCExams = [
            {"examnumber":'1',"title": 'Practical Test 1',"image": '/images/ce5.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '1',"rangeEnd":'40' },
            {"examnumber":'2',"title": 'Practical Test 2',"image": '/images/ce6.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '41',"rangeEnd":'80' },
            {"examnumber":'3',"title": 'Practical Test 3',"image": '/images/ce7.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '81',"rangeEnd":'100' },
            {"examnumber":'4',"title": 'Practical Test 4',"image": '/images/ce8.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '101',"rangeEnd":'120' },
        ];

        const dummyHardestCExams = [
            {"examnumber":'1',"title": 'Practical Test 1',"image": '/images/ce9.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '1',"rangeEnd":'40' },
            {"examnumber":'2',"title": 'Practical Test 2',"image": '/images/ce10.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '41',"rangeEnd":'80' },
            {"examnumber":'3',"title": 'Practical Test 3',"image": '/images/ce11.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '81',"rangeEnd":'100' },
            {"examnumber":'4',"title": 'Practical Test 4',"image": '/images/ce12.jpg', "description":'A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.',"rangeStart": '101',"rangeEnd":'120' },
        ];

        const dummyCSimulators = [
            {"examNumber":'1', "title":'Defensive Driving Hazard Simulator 1', "image":'/images/cs1.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
            {"examNumber":'2', "title":'Defensive Driving Hazard Simulator 2', "image":'/images/cs2.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},            
            {"examNumber":'3', "title":'Defensive Driving Hazard Simulator 3', "image":'/images/cs3.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},        
            {"examNumber":'4', "title":'Defensive Driving Hazard Simulator 4', "image":'/images/cs4.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
        ];

        const dummyCHardSimulators = [
            {"examNumber":'1', "title":'Defensive Driving Hazard Simulator 1', "image":'/images/cs5.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
            {"examNumber":'2', "title":'Defensive Driving Hazard Simulator 2', "image":'/images/cs6.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},            
            {"examNumber":'3', "title":'Defensive Driving Hazard Simulator 3', "image":'/images/cs7.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},        
            {"examNumber":'4', "title":'Defensive Driving Hazard Simulator 4', "image":'/images/cs8.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
        ];

        const dummyCHardestSimulators = [
            {"examNumber":'1', "title":'Defensive Driving Hazard Simulator 1', "image":'/images/cs9.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
            {"examNumber":'2', "title":'Defensive Driving Hazard Simulator 2', "image":'/images/cs10.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},            
            {"examNumber":'3', "title":'Defensive Driving Hazard Simulator 3', "image":'/images/cs11.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},        
            {"examNumber":'4', "title":'Defensive Driving Hazard Simulator 4', "image":'/images/cs12.jpg',"description": 'Watch a live action videoclip of real traffic situations and click (or tap) on the developing hazards. You’ll get points for spotting them as soon as they start to happen.',"hazards":' 15', "videoLength":'1.59 Min'},
        ];



        // Set the exams and simulators states with the dummy data
        setCExams(dummyCExams);
        setHardCExams(dummyHardCExams);
        setHardestCExams(dummyHardestCExams);
        setCSimulators(dummyCSimulators);
        setCHardSimulators(dummyCHardSimulators);
        setCHardestSimulators(dummyCHardestSimulators);

    }, []);

    // Paper styled component
    const Item = styled(Paper)(({ theme }) => ({
        // Styles...
    }));

    return (
        <div>
             
            {/* Exam Lists */}
            <div className="container" style={{ marginTop: '80px' }}>
                <Stack spacing={2}>
                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Easy</h3>
                            <ExamListE exams={cexams} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hard</h3>
                            <ExamListH1 exams={hardcExams} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hardest</h3>
                            <ExamListH2 exams={hardestCExams} />
                        </div>
                    </Item>
                </Stack>
            </div>

            {/* Simulators */}
            <div className="container" style={{ marginTop: '80px' }}>
                <Stack spacing={2}>
                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Easy</h3>
                            <SimuE simulators={csimulators} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hard</h3>
                            <SimuH1 simulators={chardsimulators} />
                        </div>
                    </Item>

                    <Item>
                        <div className="difficulty-container">
                            <h3 style={{ textAlign: 'center', backgroundColor: 'lavender', borderRadius: '80%', padding: '10px', width: '80px' }}>Hardest</h3>
                            <SimuH2 simulators={chardestsimulators} />
                        </div>
                    </Item>
                </Stack>
            </div>
        </div>
    );
}

export default CommercialExamDashboard;
