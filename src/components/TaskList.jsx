import React from 'react';
import Task from './Task.jsx';

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleCompleted, onToggleSelect }) => (
    <ul className="space-y-2">
        {tasks.map((task) => (
            <Task
                key={task.id}
                task={task}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
                onToggleCompleted={onToggleCompleted}
                onToggleSelect={onToggleSelect}
            />
        ))}
    </ul>
);

export default TaskList;
