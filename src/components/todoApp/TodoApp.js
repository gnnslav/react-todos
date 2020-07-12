import React, {useState} from 'react';
import TodoList from '../todoList/TodoList';
import ControlPanel from '../controlPanel/ControlPanel';
import TodoForm from '../todoForm/TodoForm';
//import EmptyList from '../emptyList/EmptyList';
//import TodoContext from '../todoContext/TodoContext';

import './todoApp.scss';

const TodoApp = (props) => {
    console.log("app", props);
    //const {todoTasks} = props;
    const [form, setToggleForm] = useState(false);
    //console.log(setToggleForm);

    return(
        <div className="app-container">
            
            {(!form) 
                ? <ControlPanel showForm={setToggleForm}/> 
                : <TodoForm canselForm={setToggleForm}/>}
            <TodoList/>
            
            {/* <TodoContext.Consumer>
                {
                    tasks => {
                        return(
                            <TodoList tasks={tasks}/>
                        )
                    }
                }
            </TodoContext.Consumer> */}
        </div>
    )
}

export default TodoApp;