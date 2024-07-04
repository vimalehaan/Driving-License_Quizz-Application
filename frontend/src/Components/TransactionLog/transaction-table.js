import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3001/transaction');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Created At</StyledTableCell>
            <StyledTableCell align="center">Session ID</StyledTableCell>
            <StyledTableCell align="center">Customer ID</StyledTableCell>
            <StyledTableCell align="center">Amount Total</StyledTableCell>
            <StyledTableCell align="center">Currency</StyledTableCell>
            <StyledTableCell align="center">Payment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => (
            <StyledTableRow key={transaction._id}>
              <StyledTableCell component="th" scope="row">{new Date(transaction.createdAt).toLocaleString()}</StyledTableCell>
              <StyledTableCell align="center">{transaction.sessionId}</StyledTableCell>
              <StyledTableCell align="center">{transaction.customerId}</StyledTableCell>
              <StyledTableCell align="center">{transaction.amountTotal}</StyledTableCell>
              <StyledTableCell align="center">{transaction.currency}</StyledTableCell>
              <StyledTableCell align="center">{transaction.paymentStatus}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;


