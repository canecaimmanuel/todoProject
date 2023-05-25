import { useState } from 'react'

function TodoForm({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className=' d-flex col-md-12 gap-3 p-3'>
            <input className='form-control'
                type="text"
                value={task}
                placeholder='Write your new task here...'
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='btn btn-secondary col-md-3' type="submit">Enter</button>
        </form>
    );
}

export default TodoForm;