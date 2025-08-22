import React from 'react'
import Square from './square.js'
export default function Boxes({squares,setSquares,isXO,setisXO,history,setHistory,currentMove,setCurrentMove}){
  const currentSquares = history[currentMove];
  const winner=CalculateWinner(squares)
  //functions starts
 const handleClick=(i)=>{
   if(squares[i] || winner)
    return
 const slice=[...squares]
  !isXO?slice[i]='X':slice[i]='O'
  setSquares(slice)
  Game(slice)
 }
 function CalculateWinner(squares){
   const lines=[
     [0,1,2], 
     [3,4,5], 
     [6,7,8], 
     [6,4,2], 
     [0,4,8], 
     [1,4,7], 
     [0,3,6], 
     [2,5,8]
     ]
    for(let i=0;i<lines.length;i++){
    const [x,y,z]=lines[i]
    if(squares[x]
    &&squares[x]===squares[y]
    && squares[x]===squares[z]){
    return squares[x]
    } 
    }
   return null // oto avoid the undefined
}
const Game=(slice)=>{
const newHistory=[...history.slice(0,currentMove+1),slice]
setHistory(newHistory)
   console.log(history)
   setCurrentMove(newHistory.length-1)
  setisXO(!isXO)
}
// functions ends
// logics''
const status= winner?`The winner is ${winner}`: `the Next player is ${isXO?'O':'X'}`
  return(
  <section>
    
  <div className='container'>
      <Square 
      values={squares[0]}
      handleClick={()=>handleClick(0)}
      
      />
      <Square
      values={squares[1]}
      handleClick={()=>handleClick(1)}
      />
      <Square 
      values={squares[2]}
     handleClick={()=>handleClick(2)}
      />
      <Square
      values={squares[3]}
      handleClick={()=>handleClick(3)}
      />
      <Square 
      values={squares[4]}
     handleClick={()=>handleClick(4)}
      /> 
      <Square 
      values={squares[5]}
      handleClick={()=>handleClick(5)}
      />
      <Square 
      values={squares[6]}
     handleClick={()=>handleClick(6)}
      /> 
      <Square 
      values={squares[7]}
      handleClick={()=>handleClick(7)}
      /> 
      <Square
      values={squares[8]}
      handleClick={()=>handleClick(8)}
      />
  </div>
          <h1 className='status'>{status}</h1>
        
</section>

  ) 
  
}

