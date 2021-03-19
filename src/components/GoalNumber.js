import React from 'react'
import TextField from '@material-ui/core/TextField'

const GoalNumber = props =>{
    return(
        props.visible?
        <TextField id="filled-basic" disabled variant="filled" value = {props.value}></TextField>:
        <TextField id="filled-basic" disabled variant="filled" value = {''}></TextField>
    )
}
export default GoalNumber;