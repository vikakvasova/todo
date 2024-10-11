import './Card.css'
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { HiTrash } from "react-icons/hi";
import { ITodo } from '../../interfaces';

function Card({oneTodo, remove, changeTodo}: {oneTodo: ITodo, remove: (value:number) => void, changeTodo: (value:number) => void}) {
    return ( 
        <div className='card'>
            <div className='card-left'>
                <div className='card-left__checkbox' onClick={() => changeTodo(oneTodo.id)}>
                    {oneTodo.isChecked ? <RiCheckboxBlankCircleFill /> : <RiCheckboxBlankCircleLine />}
                </div>
                <div className='card-left__text'>
                    <p>{oneTodo.text}</p>
                </div>
            </div>
            <div className='card-right'>
                <div className='card-right__date'>{oneTodo.date}</div>
                <div className='card-right__button' onClick={() => remove(oneTodo.id)}><HiTrash /></div>
            </div>
        </div>
    );
}

export default Card;


