import React, {useState} from 'react';
import TodoList from '../todoList/TodoList';
import ControlPanel from '../controlPanel/ControlPanel';
import TodoForm from '../todoForm/TodoForm';

import './todoApp.scss';

const TodoApp = (props) => {
    const [form, setToggleForm] = useState(false);
 
    return(
        <div className="app-container">           
            {(!form) 
                ? <ControlPanel showForm={setToggleForm}/> 
                : <TodoForm canselForm={setToggleForm}/>}
            <TodoList/>
        </div>
    )
}

export default TodoApp;