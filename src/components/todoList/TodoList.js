import React, {useEffect, useContext} from 'react';
import TodoItem from '../todoItem/TodoItem';
import TodoContext from '../todoContext/TodoContext';
//import EmptyList from '../emptyList/EmptyList';

import './todoList.scss';

const TodoList = (props) =>{
    //console.log("todolist", props);
    const {state, dispatch} = useContext(TodoContext);
    //console.log("dispatch", dispatch);
    //console.log("STATE", state);
    //const todoTasks = dispatch();
    //const todoTasks = state.todoTasks;
    
    //console.log("todoTasks", todoTasks);
    //const {todoTasks} = props;
    // useEffect(()=>{
    //     const newTodoList = filteredTodoList();
    // }, [newTodoList])

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
        //const priority = state.filterByPriority;
        //console.log(priority);
        if(filterTodo){
            return sortTasks(todo.filter((item => item.project === filterTodo)));
        } else{
            return todo;
        }
        
    }
    const newTodoList = filteredTodoList();
    //console.log(filteredTodoList());
   //console.log("new", newTodoList);
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
        // <TodoContext.Consumer>
        //     {
        //         tasks =>{
        //             return(                   
        //                 <ul className="container">
        //                     {tasks.map((task, index)=>{
        //                         return(
        //                             <li key={index}>
        //                                 <TodoItem task={task}/>
        //                             </li>
        //                         );
        //                     })}
        //                 </ul>
        //             )
        //         }
        //     }
        // </TodoContext.Consumer>
    )
}
export default TodoList;