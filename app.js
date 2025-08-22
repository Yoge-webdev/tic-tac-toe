import React,{useState}from 'react';
import ReactDOM from 'react-dom';
import Boxes from './boxes.js'

const App=()=>{
  const[isXO,setisXO]=useState(false)
  const [text,setText]=useState('')
  const [value,setValue]=useState('')
  const [squares,setSquares]=useState(Array(9).fill(null))
  const [history, setHistory]=useState([Array(9).fill(null)])
  const [currentMove,setCurrentMove]=useState(0)

  return(
    <main >
     {/* {!isXO &&<p>select the mode</p>}*/}
      <Boxes
        value={value}
        squares={squares}
        setSquares={setSquares}
        isXO={isXO}
        setisXO={setisXO}
        history={history}
        setHistory={setHistory}
        currentMove={currentMove}
        setCurrentMove={setCurrentMove}
      />
    </main>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('react-app')
);
