import React, {useEffect, useContext} from 'react';
import TodoItem from '../todoItem/TodoItem';
import TodoContext from '../todoContext/TodoContext';
//import EmptyList from '../emptyList/EmptyList';

import './todoList.scss';

const TodoList = (props) =>{
    const {state, dispatch} = useContext(TodoContext);

    const sortTasks = todos => {
        const priority = state.filterByPriority;
        if (priority) {
          return todos.sort((a, b) => (b.priority < a.priority ? 1 : -1));
        } else {
          return todos;
        }
      }

    const filteredTodoList = () =>{
        const todo = state.todoTasks;
        const filterTodo = state.filterByProject;
        if(filterTodo !== 'all'){
            return sortTasks(todo.filter((item => item.project === filterTodo)));
        } else if(filterTodo=== 'all'){
            return sortTasks(todo);
        } else if(filterTodo){
            console.log("todo", todo)
            return todo;
        }
        
    }
    const newTodoList = filteredTodoList();
    useEffect(()=>{
        //filteredTodoList();
    }, [newTodoList])

    const deleteTask = (item) => {
        console.log("TASK", item);
        dispatch({
            type: "DELETE",
            payload: item
        });
    }

    const saveTask = item =>{
        dispatch({
            type: "CHANGE_TASK",
            payload: item
        });
    }
    
    return(
        <ul className="list">
            {newTodoList.map((task)=>{
                return(
                    <li className="list__item" key={task.id}>
                        <TodoItem task={task}
                                  saveTask={saveTask}
                                  deleteTask={deleteTask}
                        />
                    </li>
                 );
            })}
    
        </ul>
    )
}
export default TodoList;