import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  /* input */
  function onChange(e){
    setTodo(e.target.value);
  }
  /* form submit */
  function onSubmit(e){
    e.preventDefault();
    if(todo === ""){
      return;
    }
    setTodos( (current)=> [...current, todo] );
    setTodo("");
  }
  /* to-do delete */
  function deleteBtn(currentIndex){
    console.log(currentIndex);
    setTodos(todos.filter((item, index)=> currentIndex !== index));
  }


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>오늘 할 일({ todos.length })</h1>
        <form onSubmit={onSubmit}>
          <input className={styles.todo} type="text" value={todo} onChange={onChange} placeholder='Write your to do ... '/>
          <button className={styles.btn} > add </button>
        </form>
        <ul>
          { todos.map((item, index)=> <li className={styles.TodoList} key={index}> { item } <button className={styles.delete} onClick={()=> deleteBtn(index) }>x</button></li>) }
        </ul>
      </div>
    </div>
  );
}

export default App;
