import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { CusButtonPurp } from "../../Utils/StyledComponents";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteBox from "./DeleteBox";
import AddQuiz from './addquiz';
import UpdateBox from './UpdateBox';

const initialRows = [
  { id: '8', firstName: 'Who discovered penicillin?', age: 'Motor-Bike', questionType: 'Science' },
  { id: '9', firstName: 'What is the smallest prime number?', age: 'Van', questionType: 'Mathematics' },
  { id: '10', firstName: 'What is the main ingredient in guacamole?', age: 'Car', questionType: 'Food' },
  { id: '11', firstName: 'What is the square root of 64?', age: 'Motor-Bike', questionType: 'Mathematics' },
  { id: '12', firstName: 'Who developed the theory of relativity?', age: 'Van', questionType: 'Science' },
  { id: '13', firstName: 'What is the largest ocean on Earth?', age: 'Car', questionType: 'Geography' },
  { id: '14', firstName: 'Who is known as the father of computers?', age: 'Van', questionType: 'Technology' },
  { id: '15', firstName: 'What is the capital of Japan?', age: 'Car', questionType: 'Geography' },
  { id: '16', firstName: 'What is the primary ingredient in hummus?', age: 'Car', questionType: 'Food' },
  { id: '17', firstName: 'Who invented the telephone?', age: 'Motor-Bike', questionType: 'Technology' },
];

export default function DataTable() {
  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [openUpdateBox, setOpenUpdateBox] = useState(false);
  const [newQuestion, setNewQuestion] = useState(''); // State for the new question text

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection.map(id => rows.find(row => row.id === id)));
  };

  const handleDelete = () => {
    setOpen(true);
  };

  const handleQuiz = () => {
    setOpenQuiz(true);
  };

  const handleDeleteConfirm = () => {
    const remainingRows = rows.filter(row => !selectedRows.some(selected => selected.id === row.id));
    setRows(remainingRows);
    setSelectedRows([]);
    setOpen(false);
  };

  const handleUpdate = () => {
    if (selectedRows.length === 1) {
      const updatedRows = rows.map(row =>
        row.id === selectedRows[0].id ? { ...row, firstName: newQuestion } : row
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
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'firstName',
      headerName: 'Questions',
      width: 650,
      renderCell: (params) => (
        <div>
          <Typography
            onClick={() => handleQuestionClick(params.row.id)}
            style={{ cursor: 'pointer'}}
          >
            {params.value}
          </Typography>
          {expandedQuestion === params.row.id && (
            <ul>
              <li>answer 1</li>
              <li>answer 2</li>
              <li>answer 3</li>
              <li>answer 4</li>
            </ul>
          )}
        </div>
      ),
    },
    { field: 'age', headerName: 'Vehicle Type', width: 120 },
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
            handleDeleteConfirm={handleDeleteConfirm}
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
}
