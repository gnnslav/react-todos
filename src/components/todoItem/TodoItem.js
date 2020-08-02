import React, {useState} from 'react';
//import TodoContext from '../todoContext/TodoContext';
import priorityObj from '../util/priority';


import './todoItem.scss';

const TodoItem = (props) => {
    const {task, saveTask, deleteTask} = props;
    const [change, setChange] = useState(false);
    const [description, setDescription] = useState(false);
    const [newTask, setNewTask] = useState({
        name: task.name,
        project: task.project,
        priority: task.priority,
        description: task.description,
        id: task.id
    });

    const changeField = (e) =>{
        const { value, name } = e.target;
        setNewTask({ ...newTask, [name]: value, id: task.id });
    }

    const priorityColor = ()=>{
        const style = (task.priority==='high') ? 'high' : 'low';
        return style;
    }


    return (
        <div className="todo-item">
            <span className={"ptiority-level " + priorityColor()}>{newTask.priority}</span>
            <div className="todo-item__block">
                <label htmlFor="name">Task name</label>
                {(change) 
                    ? <input 
                        type="text"
                        name="name"
                        value={newTask.name}
                        onChange={changeField}
                        />
                    : <span>{newTask.name}</span>
                }
            </div>
            <div className="todo-item__block">
                <label htmlFor="project">Project name</label>
                {(change)
                    ? <input 
                        type="text"
                        name="project"
                        value={newTask.project}
                        onChange={changeField}
                        />
                    : <span>{newTask.project}</span>
                }
            </div>
            <div className="todo-item__block">
                <label htmlFor="priority">Priority</label>
                {(change)
                    ? <select 
                        name="priority"
                        value={newTask.priority}
                        onChange={changeField}
                    >
                        {Object.keys(priorityObj).map((item, index)=>{
                            return <option key={index}>{item}</option>
                        })}
                    </select>
                    : <span>{newTask.priority}</span>
                }
            </div>
            {(description)
            ?
            <div className="todo-item__block">
                <label htmlFor="description">Task description</label>
                {(change)
                    ?<textarea 
                        type="text"
                        name="description"
                        value={newTask.description}
                        onChange={changeField}
                    />
                    :<span>{newTask.description}</span>
                }
            </div>
            : null}
            <div className="todo-item__block">
                {(!change)
                    ? <button
                        type="button"
                        onClick={()=>{
                            setChange(!change ? true : false)}}
                    >Change</button>
                    : <button
                        type="button"
                    onClick={()=>{
                        setChange(change ? false : true);
                        saveTask(newTask);
                    }}
                    >Save</button>
                }
                <button
                    type="button"
                    onClick={() => {
                        console.log('props', props.task.project);
                        deleteTask(props.task);
                    }}
                >Delete</button>
                <button 
                    type="button"
                    onClick={()=>{
                        setDescription(description ? false : true)
                    }}
                >{(!description ? "Show description" : "hide description")}</button>
            </div>
        </div>
     )
}
export default TodoItem;