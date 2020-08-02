import React, { useState, useContext} from 'react';
import TodoContext from '../todoContext/TodoContext';
import './controlPanel.scss';

const ControlPanel = (props) =>{
    const {showForm} = props;
    const {state, dispatch} = useContext(TodoContext);
    const [priority, setPriority] = useState(false);
    const todoProjects = state.projects;
    
    const filteredTasks = (e) => {
        dispatch({
            type: "FILTERED_TASKS",
            filterByProject: e.target.value,
            filterByPriority: priority
        });
    }
        
    
    return(
        <div className="panel">
            <button className="panel__btn"
                    type="button"
                    onClick={()=>{showForm(true)}}
                    >New Task</button>
            <label className="panel__label" htmlFor="prioriry">Priority</label>
            <input type="checkbox" 
                    name="prioriry" 
                    checked={priority} 
                    onChange={()=>setPriority(!priority)}
            />
            <label className="panel__label" htmlFor="project">Project</label>
            <select className="panel__project" name="project" onChange={filteredTasks}>
                {todoProjects.map((project, index)=>{
                    return(
                        <option key={index} value={project}>{project}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default ControlPanel;