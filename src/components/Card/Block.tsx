import './Block.css'
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { HiTrash } from "react-icons/hi";
import { useState } from 'react';
import { ITodo } from '../../data';

function Block({onTodo, remove, changeTodo}:{onTodo : ITodo, remove: (value:number) => void, changeTodo: (value:number) => void}) {

    return ( <>
    <div className='block'>
        <div className='block-left'>
            <div onClick={() => changeTodo(onTodo.id)} className='block-left_checkbox'>
                {onTodo.isChecked ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}
            </div>
            <div className='block-left_text'>{onTodo.text}</div>
        </div>
        <div className='block-right'>
            <div className='block-right_date'>{onTodo.date}</div>
            <div className='block-right_button' onClick={() => remove(onTodo.id)}><HiTrash /></div>
        </div>
    </div>
    </> );
}

export default Block;