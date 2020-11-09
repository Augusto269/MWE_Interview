import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function SelectTable(props) {
  const classes = useStyles();
  const [appointment, setAppointment] = useState(0)

  const SelectHandler = (e) =>{
    props.handler(e.target.value) ;
    setAppointment(e.target.value);
  }
  return (
    <FormControl className={classes.formControl}>
    <Select
      value = {appointment}
      onChange = {SelectHandler}
      displayEmpty
      className={classes.selectEmpty}
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value="">
        <em>Select Table </em>
      </MenuItem>
      <MenuItem value={0}>JEDI STRESS MANAGEMENT</MenuItem>
      <MenuItem value={1}>LIGHTSABER SKILLS</MenuItem>
      <MenuItem value={2}>FIGHTING THE DARK SIDE</MenuItem>
    </Select>
    <FormHelperText>Without label</FormHelperText>
  </FormControl>
  );
}


