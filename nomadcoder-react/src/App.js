import { useState, useEffect } from 'react';
import styles from './App.module.css';


function Hello(){
  useEffect(()=>{ //Cleanup Function 이라고 불리는데 앵간하면 안쓴다고 함 React에서는
    console.log('created 🥳'); //useEffect가 실행되는 시점에서 실행
    return ()=>{ console.log("die...☠️") } //useEffect가 종료되는 시점에서 return
  }, []);
  return <h1> Hello </h1>
}

function Bye(){
  return <h1> Bye.. </h1>
}


function App() {
  // console.log("대충이라도 하자");
  const [show, setShow] = useState(false);

  function onClick(){
    setShow((prev)=>!prev);
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <button onClick={onClick}> { show ? "hide" : "show" } </button>
        { show ? <Hello/> : <Bye /> }
      </div>
    </div>
  );
}

export default App;
