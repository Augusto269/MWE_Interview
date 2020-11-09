import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    align: 'center',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(index,time, monday, tuesday, wednesday, thursday,friday,saturday,sunday) {
  return { index,time,monday,tuesday,wednesday,thursday,friday,saturday,sunday};
}
const days = [ 
  "Time", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AppointmentTable(props) {
  const classes = useStyles();
  const rows = props.tableData.map((aData,index) => {
      return createData(index,aData.time,aData.monday,aData.tuesday,aData.wednesday,aData.thursday,aData.friday,aData.saturday,aData.sunday);
    })  
  const handlerModal = (day,time) => {
    props.handler([day,time,1],true)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {days.map((day) => {
             return <StyledTableCell align="center">{day}</StyledTableCell>
            })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.index}>
              <StyledTableCell component="th" scope="row">
                {row.time}
              </StyledTableCell>
              <StyledTableCell onClick ={()=> handlerModal(row.monday,row.time)}align="center">{row.monday}</StyledTableCell>
              <StyledTableCell onClick ={()=> handlerModal(row.tuesday,row.time)}align="center">{row.tuesday}</StyledTableCell>
              <StyledTableCell onClick ={()=> handlerModal(row.wednesday,row.time)}align="center">{row.wednesday}</StyledTableCell>
              <StyledTableCell onClick ={()=> handlerModal(row.thursday,row.time)}align="center">{row.thursday}</StyledTableCell>
              <StyledTableCell onClick ={()=> handlerModal(row.friday,row.time)}align="center">{row.friday}</StyledTableCell>
              <StyledTableCell onClick ={()=> handlerModal(row.saturday,row.time)}align="center">{row.saturday}</StyledTableCell>
              <StyledTableCell onClick ={()=> handlerModal(row.sunday,row.time)}align="center">{row.sunday}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}