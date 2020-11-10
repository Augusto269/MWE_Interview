import React, { useEffect, useState } from 'react';
import SelectTable from '../JediSelector/SelectTable';
import AppointmentTable from '../table/AppointmentTable';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns'; 
import {
    DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';



function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    buttons: {
          margin: theme.spacing(1),
        },
    paper: {
      position: 'absolute',
      width: 500,
      height: 250,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
const JEDI_STRESS_MANAGEMENT = [
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Joda)", wednesday :"Free", thursday : "Closed", friday:"Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Jhan)", wednesday :"Free", thursday : "Closed",friday :"Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday:"Free",saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
]
const LIGHTSABER_SKILLS = [
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Joda)", wednesday :"Free", thursday : "Closed", friday:"Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Jhan)", wednesday :"Free", thursday : "Closed",friday :"Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday:"Free",saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:45AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:30AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:15AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:45PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:30PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
]
const FIGHTING_THE_DARK_SIDE = [
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Joda)", wednesday :"Free", thursday : "Closed", friday:"Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Jhan)", wednesday :"Free", thursday : "Closed",friday :"Free", saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday:"Free",saturday: "Closed", sunday:"Closed"},
    {time:'09:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'10:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'11:00AM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'12:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:00PḾ' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'13:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'14:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'14:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'14:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'14:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'15:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'15:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'15:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'15:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'16:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'16:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'16:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},
    {time:'16:00PM' ,monday:"Free",tuesday:" Booked (Libra)", wednesday :"Free", thursday : "Closed", friday: "Free", saturday: "Closed", sunday:"Closed"},

]


export default function TableContainer() {
    const classes = useStyles();
    const [reload, setReload] = useState(false)
    useEffect(()=>{
        //Call to get the schedule
    },[reload])
    const [tableData , setTableData] = useState(JEDI_STRESS_MANAGEMENT)
    const [data ,setData] = useState ([]);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());

  const SelectAppointment = (data,open) => {
    setData(data)
    setOpen(open)
    console.log(data)
}
    const handleDelete = (data) => {
            //Call api whit data an update the register, start spinner
        //Spected returns
        //await , show erroes or succefully msg , close modal
        setOpen(false);
        setReload(!reload)
    }
    const createdAppointment = (data) => {
          //Call api whit data an update the register, start spinner
        //Spected returns
        //await , show erroes or succefully msg , close modal
        setOpen(false);
        setReload(!reload)
    }
    const ChangedDate =  async (data) => {
        //Call api whit data an update the register, start spinner
        //Spected returns
        //await , show erroes or succefully msg , close modal
        setOpen(false);
        setReload(!reload)
        }
    //On the dataPicker , have to select correct time for schedule
  const handleClose = () => {
    setOpen(false);
    setReload(!reload)
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 >{(data[0] !== "Free") ? 
      <div>{data[0]} , do you wan to changed your appointment?
      <p>Select your new Date</p>
      <p><MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider></p>
      <div>
      <Button variant="contained" color="primary" className={classes.buttons} onClick={ChangedDate}>
       Accepted Changed
       </Button>
       <Button variant="contained" color="primary" onClick = {handleClose} className={classes.buttons}>
       Canceled
       </Button>
       <Button variant="contained" color="primary" onClick = {handleDelete}>
       Delete
       </Button>
       </div>
      </div>
      : 
      <div>
      <p>Confirm new appointment on  {data[1]}   </p>
      <Button variant="contained" color="primary" className={classes.buttons} onClick={createdAppointment}>
       Accepted Changed
       </Button>
       <Button variant="contained" color="primary" onClick = {handleClose}>
       Canceled
       </Button>
      </div> }</h2>

    </div>
  );
    const SelectTableDataHandler = (selectedValue) => {
        switch (selectedValue) {
            case 0:
                setTableData(JEDI_STRESS_MANAGEMENT)
                break;
            case 1:
                setTableData(LIGHTSABER_SKILLS)
                break;
            case 2:
                setTableData(FIGHTING_THE_DARK_SIDE)
                break;        
            default:
                break;
        }
    }
  return (
    <>
    <SelectTable handler = {SelectTableDataHandler}/>
    <AppointmentTable tableData= {tableData} handler = {SelectAppointment} />
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}


