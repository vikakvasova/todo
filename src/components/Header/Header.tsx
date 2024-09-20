import { useEffect, useState } from 'react';
import './Header.css'
import { ITodo } from '../../data';

function Header({onChangeTodo}: {onChangeTodo: any}) {

    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() =>{
        onChangeTodo(todos)
    }, [todos])

    function addTodo() {
        if (inputText !== ''){
            let formatDate = String(new Date()).slice(4,10);
            let todoObject = {
                id: Date.now(),
                text: inputText,
                date: formatDate,
                isChecked: false
            }
            setTodos([...todos,todoObject]);
            setInputText('');
            onChangeTodo(todos)
        }
    }

    function deleteAllTodo(){
        setTodos([])
    }

    return (<>
    <div className='header'>
        <button className='header_button' onClick={deleteAllTodo}>Dalete All</button>
        <input placeholder='Add todo' className='header_input' value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
        <button className='header_button' onClick={addTodo}>Add</button>
    </div>
    </>  );
}



export default Header;