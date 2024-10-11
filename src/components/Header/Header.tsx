import { useEffect, useState } from 'react';
import './Header.css';

function Header({inputText, setInputText, addTodo, deleteAllTodo, deleteLastTodo, showCompletedTodo, allTodoCount, completedTodoCount, searchText, setSearchText, showSearchResults, showAllTodo }: 
    {
        inputText: string, 
        setInputText: (value: string) => void, 
        addTodo: () => void, 
        deleteAllTodo: () => void,
        deleteLastTodo: () => void,
        showAllTodo: () => void,
        showCompletedTodo: () => void,
        allTodoCount: number,
        completedTodoCount: number,
        searchText: string,
        setSearchText: (value: string) => void,
        showSearchResults: (searchText: string) => void
    }) {
    return ( 
        <div className='header'>
            <div className='header_top'>
                <div className='delete_buttons'>
                <button className='header__button' onClick={deleteAllTodo}>Delete All</button>
                <button className='header__button' onClick={deleteLastTodo}>Delete Last</button>
                </div>
                
                <input 
                    placeholder='Add todo' 
                    className='header__input' 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}>
                    </input>
                <button className='header__button' onClick={addTodo}>Add</button>
                
            </div>
            <div className='header_bottom'>
                <div className='header_bottom_all'>All: {allTodoCount}</div>
                <div className='header_bottom_active'>Completed: {completedTodoCount}</div>
                <button className='header__button' onClick={() => {setSearchText(''); showAllTodo();}}>Show All</button>
                <button className='header__button' onClick={showCompletedTodo}>Show Active</button>
                <input 
                    className='header_bottom__input' 
                    placeholder='Search'
                    value={searchText}
                    onChange={(e) => {setSearchText(e.target.value); showSearchResults(e.target.value)}}></input>
            </div>
        </div>
    )
}

export default Header;