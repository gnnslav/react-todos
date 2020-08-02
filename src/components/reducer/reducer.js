
const reducer =  (state, action)=>{
    switch (action.type) {
        case "ADD_TASK":
            const findProgect = state.projects.some((item=> item ===action.payload.project));
            if(findProgect){
                return{
                    todoTasks: [...state.todoTasks, action.payload],
                    projects: [...state.projects],
                    filterByProject: 'all',
                }
            } else{
                return{
                    todoTasks: [...state.todoTasks, action.payload],
                    projects: [...state.projects, action.payload.project],
                    filterByProject: 'all',
                }
            };
        case "CHANGE_TASK":
            const taskId = action.payload.id;
            const index = state.todoTasks.findIndex(el=> el.id === taskId);
            const item = action.payload;
            const firstPart = state.todoTasks.slice(0, index);
            const secondPart = state.todoTasks.slice(index + 1, state.todoTasks.length);
            const newTasks = [...firstPart, item, ...secondPart];
            return{
                ...state,
                todoTasks: newTasks,
            }
        case "DELETE":
            const taskIdDelete = action.payload.id;
            const projectDelete = action.payload.project;
            const filteredTasks = state.todoTasks.filter(item=> item.id !== taskIdDelete);
            const filteredProject = state.projects.filter((item=> item.project !== projectDelete));
            return {
                ...state,
                todoTasks: filteredTasks,
                projects: filteredProject
            }
        case "FILTERED_TASKS":
            const filter = action.filterByProject;
            const prioriry = action.filterByPriority;
            return{
                ...state,
                filterByProject: filter,
                filterByPriority: prioriry
            }
        default:
            return state;
    }
}

export default reducer;