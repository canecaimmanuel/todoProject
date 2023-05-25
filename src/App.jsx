import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  const [state, setState] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setState([...state, newTask]);
  };

  const completeTask = (taskId) => {
    setState((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setState((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='container border mt-5 p-3 bg-warning-subtle'>
      <div className="row">
        <div className='p-3'>
          <h1 className='fw-bold text-secondary' data-aos="fade-right" data-aos-duration="2000">TODO LIST APPLICATION</h1>
        </div>
        <div className="col-md-8 mx-auto mt-4 mb-5" data-aos="fade-up" data-aos-duration="2000">
          <div className='card shadow'>
            <TodoForm addTask={addTask} />
            <TodoList tasks={state} completeTask={completeTask} removeTask={removeTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
