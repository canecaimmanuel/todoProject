function TodoItem({ task, completeTask, removeTask }) {


    const handleComplete = () => {
        completeTask(task.id);
    };

    const handleDelete = () => {
        removeTask(task.id);
    };

    return (
        <div className="container border">
            <div className="row">
                <li className="d-flex mt-2 p-2 gap-2">
                    <span className="col-md-9" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <b>{task.title}</b>
                    </span>
                    <button className="col-md-1 rounded border-0" onClick={handleComplete}>{task.completed ? '🔙' : '✅'}</button>
                    <button className="col-md-1 rounded border-0" onClick={handleDelete}>❎</button>
                </li>
            </div>
        </div>
    );
}

export default TodoItem;