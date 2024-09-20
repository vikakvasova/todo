import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Block from './components/Card/Block';
import { ITodo } from './data';

function App() {
const [arrayTodo, setArrayTodo] = useState([])
function handleChange(todos: any){
  setArrayTodo(todos)
}
function handleRemove(id: number){
  let newTodos = arrayTodo.filter((item: any)=> item.id !== id);
  setArrayTodo(newTodos)
}

function handleChangeTodo(id: number){
  let newTodos = [...arrayTodo]
  let current: any = newTodos.find((item: ITodo)=> item.id == id);
  if (current != undefined){
    current.isChecked = !current.isChecked;
  }
  setArrayTodo(newTodos)
}

  return (
    <>
    <div className='container'>
      <Header onChangeTodo={handleChange}></Header>
      
        {arrayTodo.length > 0 ? (
          <div className='blocks'>
            {arrayTodo.map((item, index) => <Block changeTodo={handleChangeTodo} remove={handleRemove} key ={index} onTodo = {item}></Block>)}
            </div>
        ) : null}
      
    </div>
    
    </>
  );
}

export default App;
