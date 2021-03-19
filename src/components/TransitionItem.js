import React from 'react'

const TransitionItem = props =>{

    return(
        props.gameOver? <p >GAME OVER</p>:<p></p>
    )
}
export default TransitionItem;