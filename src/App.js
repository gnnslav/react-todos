import React, {useEffect, useReducer} from 'react';
import TodoApp from './components/todoApp/TodoApp';
import TodoContext from './components/todoContext/TodoContext';
//import tasks from './components/util/tasks';
import reducer from './components/reducer/reducer';

import './App.css';


function App() {
  const initialState = {
    todoTasks: [],
    projects: ['all',],
    filterByProject: '',
    filterByPriority: ''
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("AppState", state);
  //console.log(dispatch);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(state))
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
