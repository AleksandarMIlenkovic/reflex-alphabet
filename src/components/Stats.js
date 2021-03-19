import React from 'react'

const Stats = props=>{
    const title = 'SCORE';
    const titleProps={
        alignContent: 'center',
        color:"#13eba2",
        
    }
    const entire={
        display:"grid",
        alignItems: 'center',
        fontWeight:"bold"
       
    }
    const stylesWrong = {
        color:"#f50057",
        disabled:"disabled",
        // color:"white"
    }
    const stylesRight = {
        color:"#13eba2",
        disabled:"disabled",
        fontWeight:"bold"
        // color:"white"
    }
    return(
        <div style={entire}>
            <p style={titleProps}>{title}</p>
            <p  style={stylesWrong} >{"Miss: "+ props.miss.length}</p> 
            <p  style={stylesRight} >{"Hit: "+ props.hit.length}</p>
            <p>{"Left: "+ (26-props.left)}</p>  
        </div>
        )
}
export default Stats;