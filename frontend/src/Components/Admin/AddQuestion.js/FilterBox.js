import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { CusButtonPurp } from "../../Utils/StyledComponents";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteBox from "./DeleteBox";
import AddQuiz from './addquiz';
import UpdateBox from './UpdateBox';
import axios from 'axios';

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [openUpdateBox, setOpenUpdateBox] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/questions/listOfQuestions');
        setRows(response.data.map((question, index) => ({
          id: question._id,
          tableId: index + 1,
          Questions: question.question_text,
          difficulty: question.difficulty,
          questionType: question.questionType ? 'Car' : 'Commercial Vehicle'
        })));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection.map(id => {
      const selectedRow = rows.find(row => row.id === id);
      return {
        id: selectedRow.id,
        questionText: selectedRow.Questions
      };
    }));
  };

  const handleQuiz = () => {
    setOpenQuiz(true);
  };

  const handleDelete = () => {
    setOpen(true);
  };

  const handleDeleteConfirm = async () => {

    try {
      await Promise.all(selectedRows.map(async (selectedRow) => {
        await axios.delete(`http://localhost:3000/questions/deleteQuestion/${selectedRow.id}`);
      }));

      const remainingRows = rows.filter(row => !selectedRows.some(selected => selected.id === row.id));
      setRows(remainingRows);
      setSelectedRows([]);
      setOpen(false);
    } catch (error) {
      console.error('Error deleting questions:', error);
    }

    const remainingRows = rows.filter(row => !selectedRows.some(selected => selected.id === row.id));
    setRows(remainingRows);
    setSelectedRows([]);
    setOpen(false);
  };


  const handleUpdate = () => {
    if (selectedRows.length === 1) {
      const updatedRows = rows.map(row =>
        row.id === selectedRows[0].id ? { ...row, Questions: newQuestion } : row
      );
      setRows(updatedRows);
      setSelectedRows([]);
      setOpenUpdateBox(false);
    }
  };

  const handleQuestionClick = (questionId) => {
    setExpandedQuestion(questionId === expandedQuestion ? null : questionId);
  };
 
  const columns = [
    { field: 'tableId', headerName: 'ID', width: 250 },
    {
      field: 'Questions',
      headerName: 'Questions',
      width: 500,
    },
    { field: 'difficulty', headerName: 'Difficulty', width: 120 },
    { field: 'questionType', headerName: 'Question Type', width: 120 }
  ];

  return (
    <div>
      <div>
        <div style={{ marginBottom: '-35px', position: 'fixed' }}>
          <CusButtonPurp
            onClick={handleQuiz}
            disabled={selectedRows.length === 0}
            sx={{ backgroundColor: '#6070D4', width: '120px', fontWeight: '40px', marginLeft: '1100px' }}
          >
            <Typography fontSize={16} sx={{ margin: '-2px -6px 0px 0px' }}>Create Quiz</Typography>
            <NavigateNextIcon sx={{ marginRight: '-8px' }} />
          </CusButtonPurp>

          <AddQuiz
            state={openQuiz}
            setOpen={setOpenQuiz}
            selectedRows={selectedRows}
          />
        </div>

        <div style={{ marginBottom: '-35px', marginTop: '60px', position: 'fixed' }}>
          <CusButtonPurp
            disabled={selectedRows.length === 0}
            sx={{ backgroundColor: '#6070D4', width: '120px', fontWeight: '40px', marginLeft: '1100px' }}
            onClick={handleDelete}
          >
            <Typography fontSize={16} sx={{ margin: '-2px -6px 0px 0px' }}>Delete</Typography>
            <NavigateNextIcon sx={{ marginRight: '-8px' }} />
          </CusButtonPurp>
          <DeleteBox
            state={open}
            setOpen={setOpen}
            selectedRows={selectedRows}
            handleDeleteConfirm={handleDeleteConfirm}
          />
        </div>

        <div style={{ marginBottom: '-35px', marginTop: '120px', position: 'fixed' }}>
          <CusButtonPurp
            disabled={selectedRows.length === 0 || selectedRows.length > 1}
            sx={{ backgroundColor: '#6070D4', width: '120px', fontWeight: '40px', marginLeft: '1100px' }}
            onClick={() => setOpenUpdateBox(true)}
          >
            <Typography fontSize={16} sx={{ margin: '-2px -6px 0px 0px' }}>Update</Typography>
            <NavigateNextIcon sx={{ marginRight: '-8px' }} />
          </CusButtonPurp>
          <UpdateBox
            state={openUpdateBox}
            setOpen={setOpenUpdateBox}
            newQuestion={newQuestion}
            setNewQuestion={setNewQuestion}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>

      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
          }}
          pageSizeOptions={[5, 10, 100]}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) => handleSelectionChange(newSelection)}
        />
      </div>
    </div>
  );
};

export default DataTable;
