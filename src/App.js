// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import '../public/index.html'
// import './calculator.css'
// import './index.css';
function App() {
  const [result, setResult]= useState('')
  const clickHandler=(e)=>{
      // console.log('hellp')
      // try{
       setResult(result.concat(e.target.name))
      // }
      // catch(err) {
        // setResult("Error")
      }
  

// if

   const clear=()=>{
     setResult('')
  }
  const calculate=()=>{
    try{
      // setResult(result.concat(e.target.name))
      setResult(eval(result).toString());
    }
    catch(err) {
      setResult("Error")
    }
   }
   const backSpace=()=>{
    setResult(result.slice(0,result.length-1))
   }
  return (
    <div className="App">
    <div className="container">
    <form action="">
    <input value={result} type="text" />
    </form>
    <div class="keypad">
        <button className='clear' onClick={clear}>C</button>
        <button className='operations' onClick={backSpace}>{'<<'}</button>
        <button className='operations' name='/' onClick={clickHandler}>/</button>
        <button name='9' onClick={clickHandler}>9</button>
        <button name='8' onClick={clickHandler}>8</button>
        <button className='operations' name='*' onClick={clickHandler}>x</button>
        <button name='7' onClick={clickHandler}>7</button>
        <button name='6' onClick={clickHandler}>6</button>
        <button className='operations' name='+' onClick={clickHandler}>+</button>
        <button name='5' onClick={clickHandler}>5</button>
        <button name='4' onClick={clickHandler}>4</button>
        <button className='operations' name='-' onClick={clickHandler}>-</button>
        <button name='3' onClick={clickHandler}>3</button>
        <button name='2' onClick={clickHandler}>2</button>
        <button className='operations' name='.' onClick={clickHandler}>.</button>
        <button name='0' onClick={clickHandler}>0</button>
        <button name='1' onClick={clickHandler}>1</button>
        <button className='calculate' onClick={calculate}>=</button>
        </div>
        </div>
    </div>
  );
}

export default App;
