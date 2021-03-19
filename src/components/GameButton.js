import React from 'react';
import {Button} from "@material-ui/core"

const GameButton =props=>{
    
    return(
        <Button variant="contained" color="secondary" onClick = {props.onButtonClicked}>
            {props.label}
        </Button>
    )
}
export default GameButton;