import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
        textAlign:'center'
      },
    },
  }));
const Dummy = () =>{
    const classes = useStyles();
    return(
        <TextField disabled id="outlined-basic" label=""/>
    )
   
}

export default Dummy;