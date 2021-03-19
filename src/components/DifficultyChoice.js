import React,{useState,useCallback} from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
const DifficultyChoice = props =>{
    const radioStyle ={
        justifyContent:"center",

    }
    const [diffState, setDifficulty]= useState(
        'easy'
    );
   
    const inputHandler = useCallback(
        (e) => {
             setDifficulty(e.target.value);
             props.onSelectedChoice(e.target.value); 
        }
    )
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend" style = {{textAlign:"center"}}></FormLabel>
            <RadioGroup style={radioStyle} row aria-label="position" defaultValue="top" name="diff1" value={diffState} onChange={inputHandler}>
                <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
        </FormControl>
        
    )
}
export default DifficultyChoice;