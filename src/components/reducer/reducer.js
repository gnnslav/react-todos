//import React from 'react';

const reducer =  (state, action)=>{
    switch (action.type) {
        case "ADD_TASK":
            const findProgect = state.projects.some((item=> item ===action.payload.project));
            if(findProgect){
                return{
                    todoTasks: [...state.todoTasks, action.payload],
                    projects: [...state.projects]
                }
            } else{
                return{
                    todoTasks: [...state.todoTasks, action.payload],
                    projects: [...state.projects, action.payload.project]
                }
            };
        case "CHANGE_TASK":
            const taskId = action.payload.id;
            const index = state.todoTasks.indexOf(taskId);
            const item = action.payload;
            //console.log(item);
            const firstPart = state.todoTasks.slice(0, index);
            const secondPart = state.todoTasks.slice(index + 2, state.todoTasks.length);
            const newTasks = [...firstPart, item, ...secondPart];
            return{
                todoTasks: newTasks
            }
        case "DELETE":
            const taskIddelete = action.payload.id;
            const filteredTasks = state.todoTasks.filter(item=> item.id !== taskIddelete);
            return {
                todoTasks: filteredTasks
            }
        case "FILTERED_TASKS":
            const filter = action.filterByProject;
            const prioriry = action.filterByPriority;
            console.log("filter", filter);
            console.log("priority", prioriry);
            return{
                ...state,
                filterByProject: filter,
                filterByPriority: prioriry
            }
            // console.log("filter", filter);
            // console.log("priority", prioriry);
            // const tasks = state.todoTasks.slice().filter(item=> item.project === filter);
            // if(filter === "all"){
            //     return {
            //         todoTasks: state.todoTasks,
            //         projects: state.projects
            //     }
            // } else{
            //     return {
            //         todoTasks: tasks,
            //         projects: state.projects
            //     }
            // }
        default:
            return state;
    }
}

export default reducer;