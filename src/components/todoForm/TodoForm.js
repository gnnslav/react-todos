import React, {useState, useContext} from 'react';
import TodoContext from '../todoContext/TodoContext';
import priorityObj from '../util/priority';
import './todoForm.scss';

const TodoForm = (props) => {
    
    const {canselForm} = props;
    //console.log("form props", props);
    const [task, setTask] = useState({
        name: "",
        project: "",
        priority: "hight",
        description: "",
        id: 1
    });
    const {state, dispatch} = useContext(TodoContext);
    console.log("form state", state);
    //console.log("form dispatch", dispatch);
    //console.log(task);

    const handleChange = (e) =>{
        const { value, name } = e.target;
        const taskId = Math.floor(Math.random() * 1800);
        if( value === '' ){
            return;
        }
        setTask({...task, [name]: value, id: taskId});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(task.name === "" || task.project === "" || task.description === ""){
            return;
        }
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
        setTask({
            name: "",
            project: "",
            priority: "hight",
            description: "",
            id: 1
        });
    }

    return(
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="left-panel">
                    
                        <label htmlFor="priority" >Priority</label>
                        <select 
                            name="priority"
                            onChange={handleChange}
                        >
                            {Object.keys(priorityObj).map((item, index)=>{
                             return <option key={index}>{item}</option>
                            })}
                        </select>
                    
                </div>
                <div className="right-panel">
                    <div className="right-panel__block">
                        <label htmlFor="name" >Task Name</label>
                        <input 
                            type="text"
                            placeholder="Task name"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                        />
                    </div>
                    < div className="right-panel__block">
                        <label htmlFor="project" >Project</label>
                        <input 
                            type="text"
                            placeholder="Project"
                            name="project"
                            value={task.project}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="right-panel__block">
                        <label htmlFor="description" >Description</label>
                        <textarea 
                            placeholder="Description"
                            name="description"
                            value={task.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="right-panel__block">
                        <button type="submit">Submit</button>
                        <button type="button"
                                onClick={()=>canselForm(false)}>Cansel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;