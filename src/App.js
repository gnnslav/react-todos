import React, {useEffect, useReducer} from 'react';
import TodoApp from './components/todoApp/TodoApp';
import TodoContext from './components/todoContext/TodoContext';
import reducer from './components/reducer/reducer';

import './App.css';


function App() {
  
  const initialState = {
    todoTasks: JSON.parse(localStorage.getItem('todoTasks')) || [],
    projects: JSON.parse(localStorage.getItem('projects')) || ['all',] ,
    filterByProject: 'all',
    filterByPriority: false
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    localStorage.setItem('todoTasks', JSON.stringify(state.todoTasks));
    localStorage.setItem('projects', JSON.stringify(state.projects));
  }, [state])

  
  return (
    <div className="App">
      <TodoContext.Provider value={{state, dispatch}}>
        <TodoApp/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
