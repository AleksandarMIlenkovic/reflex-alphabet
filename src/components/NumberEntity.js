import React from 'react';
import TextField from '@material-ui/core/TextField'

const NumberEntity = props =>{
   
    return(
        <TextField id="filled-basic" label="Input letter" variant="filled" focused={props.started} onChange={props.onChanged} autoFocus/>
    )
   
}

export default NumberEntity;