import React from 'react';

const Board = (props) =>{
  const boardStyle={
    listStyle : 'none',
    columns:"3",
  }
    //return <Button color="primary">Start</Button>;
    const items = props.items;
    let colorRight = 'green';
    let colorWrong = 'red';
    let listItems = []; 
    let rights = props.right;
    let wrongs = props.wrong;

    for(let i=0;i<props.items.length;i++){
        let key=props.items[i][0].toUpperCase();
        let value=props.items[i][1];
        listItems.push(<li  key={key}>{key+'('+value+')'}</li>)
        for(let j=0;j<wrongs.length;j++){
          if(wrongs[j]===value)
          listItems[listItems.length-1]=<li style={{ color:colorWrong}}key={key}>{key+'('+value+')'}</li>
        }
        for(let k=0;k<rights.length;k++){
          if(rights[k]===value)
          listItems[listItems.length-1]=<li style={{ color:colorRight}} key={key}>{key+'('+value+')'}</li>
        }
       
    }
    
    
  return (
    <ul style={boardStyle}>{listItems}</ul>
  );
}


export default Board;