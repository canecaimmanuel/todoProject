import TodoItem from './TodoItem';

function TodoList({ tasks, completeTask, removeTask }) {
    return (
        <ul className='mt-2 mb-5 card-body'>
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    removeTask={removeTask}
                />
            ))}
        </ul>
    );
}

export default TodoList;