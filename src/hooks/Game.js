import React, {useState, useEffect} from 'react'
import DifficultyChoice from "../components/DifficultyChoice"
import GameButton from '../components/GameButton'
import NumberEntity from '../components/NumberEntity'
import GoalNumber from '../components/GoalNumber'
import Board from '../components/Board'
import Dummy from '../components/Dummy'
import Stats from '../components/Stats'
import TransitionItem from '../components/TransitionItem'
let intervalTO = null;
let intervalGO = null;
let countdownTIme = 0;
let usedNumbers = [];
let usedRight = [];
let usedWrong = [];
let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
let goal =0;
const Game = () =>{
    const finishGame=()=>{
        setGameOver(true);
        intervalGO=setTimeout(()=>{
            setGameOver(false);
        }, 1000)
    }
    const missed = () =>{
        usedNumbers.push(goal);
        usedWrong.push(goal);
        if(numbers.length<1){
            
            finishGame();
            setStarted(false);
            clearInterval(intervalTO);
            return;
        }
        
        changeGoal(makeRandomNumber());
        clearInterval(intervalTO);
        intervalTO = setTimeout(missed, countdownTIme);
           
     }
   const startCountdown = ()=> {
       
       switch(diffChoiceData){
           default:
                countdownTIme = 5000;
                break;
           case 'easy':
                countdownTIme = 5000;
               break;
            case 'medium':
                countdownTIme = 3500;
                break;
            case 'hard':
                countdownTIme = 300;
                break;   
       }
       intervalTO = setTimeout(missed, countdownTIme);
   }
  
   const makeRandomNumber =()=>{
       
        const num = Math.floor(Math.random() * (numbers.length-1));
        let item = numbers[num];
        numbers.splice(num, 1);
        console.log("numbers", goal,numbers);
        return item;
   }
   
   const makeLetterNumberMap = () =>{
    let a = 97;
    let charArray = {};
    for (let i = 0; i<26; i++)
        charArray[String.fromCharCode(a + i)] = i+1;
        return(charArray);
   }
   const lettNumObject = Object.entries(makeLetterNumberMap());
  
    const handleDifficultyChoice=value=>{
        console.log('diff', value)
       setDiffData(value);
    }
    const[diffChoiceData, setDiffData] = useState({
        "difficulty":"easy"
    })
    const[gameStarted, setStarted] = useState(false);
    const [goalNo, changeGoal] = useState(0);
    const[gameOver, setGameOver] = useState(false);
    useEffect(() => {
       goal = goalNo;
      }, [goalNo]);
    const startGame = () =>{
        if(gameStarted){
            clearInterval(intervalTO);
            setStarted(!gameStarted);
            usedNumbers=[];
            usedRight=[];
            usedWrong=[];
        }else{
            if(numbers.length ===0){
                console.log("gameOver");
                setStarted(false);
                return;
            }
            changeGoal(makeRandomNumber());
            setStarted(!gameStarted);
            startCountdown();
        }
       
    }
    const checkChanges = (e) =>{
        let val= e.target.value;
        clearTimeout(intervalTO);
        if(numbers.length ===0){
            usedNumbers.push(goal);
            usedRight.push(goal);
            console.log("gameOver");
            setStarted(false);
            return;
        }
        for(let i=0;i<lettNumObject.length;i++){
            if(lettNumObject[i][1]===goal){
                if(lettNumObject[i][0]===val){
                    usedNumbers.push(goal);
                    usedRight.push(goal);
                    console.log('right', usedRight);
                }else{
                    usedNumbers.push(goal);
                    usedWrong.push(goal);
                    console.log('wrong', usedWrong);    
                }
                changeGoal(makeRandomNumber());
                intervalTO = setTimeout(missed, countdownTIme);
            }
        }
        e.target.value = '';
    }
   
    
    return (
        <div className="mainDiv">
            <DifficultyChoice  onSelectedChoice={handleDifficultyChoice}/>
            <GameButton  label = {gameStarted?"STOP":"START"} onButtonClicked={startGame}/>
            <GoalNumber visible = {gameStarted} value = {goalNo} />
            {gameStarted?<NumberEntity gameInProgress={gameStarted} onChanged={checkChanges} />:<Dummy/>}
            <Board items={lettNumObject} used = {usedNumbers} right={usedRight} wrong={usedWrong}/> 
            <Stats hit={usedRight} miss={usedWrong} left={usedNumbers.length}/>
            <TransitionItem  gameOver={gameOver}/>
        </div>
       
    )
}

export default Game;