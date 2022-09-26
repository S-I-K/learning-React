import { useState, useEffect } from 'react';
import styles from './App.module.css';


function App() {
  // console.log("대충이라도 하자");
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");

  function onChange(e){
    setWord(e.target.value);
  }
  function onClick(){
    setCount( (current) => current+1 );
  }

  // console.log('i run all the time');

  useEffect(()=>{
    console.log('I run only once.');
  }, []);

  useEffect( ()=>{
    if( word !== "" &&  word.length > 5){
      console.log('I run when "word" changes.');
    }
  }, [word] );

  useEffect( ()=>{
    if( count > 0 ){
      console.log('I run when "count" changes.');
    }
  }, [count] );

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <input type="text" onChange={onChange} value={word} placeholder='Search here...'></input>
        <h1> { count } </h1>
        <button onClick={onClick}> click me </button>
      </div>
    </div>
  );
}

export default App;
