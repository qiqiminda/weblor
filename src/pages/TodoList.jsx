import React, { useState } from "react";
import AddTaskForm from "../components/AddTaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [allSelected, setAllSelected] = useState(false);

    const addTask = (title) => {
        const newTask = { id: Date.now(), title, completed: false, selected: false };
        setTasks([...tasks, newTask]);
    };

    const editTask = (id, title) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const clearTasks = () => {
        setTasks([]);
        setAllSelected(false);
    };

    const toggleAllSelected = () => {
        const newAllSelected = !allSelected;
        setAllSelected(newAllSelected);
        setTasks(tasks.map((task) => ({ ...task, selected: newAllSelected })));
    };

    const toggleSelect = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, selected: !task.selected } : task
            )
        );
    };

    const checkButton = (action) => {
        const selectedTasks = tasks.filter(task => task.selected);
        if (selectedTasks.length > 2) {
            if (action === 'delete') {
                setTasks(tasks.filter(task => !task.selected));
                setAllSelected(false);
            } else if (action === 'done') {
                setTasks(
                    tasks.map(task => task.selected ? { ...task, completed: true, selected: false } : task)
                );
                setAllSelected(false);
            }
        }
    };

    const getCompletedTasks = () => tasks.filter((task) => task.completed);
    const getRemainingTasks = () => tasks.filter((task) => !task.completed);

    return (
        <div className="md:min-h-full w-full m-auto flex flex-col items-center mt-0">
            <div className="flex flex-col space-y-6 w-[600px] mr-60 p-4">
                <div className="w-[800px] flex items-center justify-between">
                    <h1 className="uppercase text-4xl font-bold text-black tracking-widest mb-4 md:text-3xl">
                        My Tasks
                    </h1>
                </div>
                <div className="w-[800px] rounded-md border-b">
                    <AddTaskForm onAddTask={addTask} />
                </div>
                <div className={`w-[800px] h-[400px] md:h-[300px] p-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500`}>
                    <div className={`w-full flex flex-row items-center justify-between border-b text-gray-500 text-sm`}>
                        <p className="text-gray-500 p-2 py-3">
                            {getRemainingTasks().length} tasks left{" "}
                        </p>
                        <div className="w-[100px] flex items-center">
                            <input
                                type="checkbox"
                                checked={allSelected}
                                onChange={toggleAllSelected}
                                className=""
                            />
                            <span className="w-[200px]">Tick all</span>
                        </div>
                        
                        <button
                            className="p-1 w-[100px]  bg-blue-500 text-white rounded"
                            onClick={() => checkButton('done')}
                        >
                            Done
                        </button>
                        <button
                            className="p-1 w-[100px] bg-red-500 text-white rounded"
                            onClick={() => checkButton('delete')}
                        >
                            Delete
                        </button>
                    
                        <button className="p-1 w-[100px] bg-red-500 text-white rounded" onClick={clearTasks}>Clear all tasks</button>
                    </div>
                    
                    {tasks.length ? (
                        <TaskList
                            tasks={tasks}
                            onEditTask={editTask}
                            onDeleteTask={deleteTask}
                            onToggleCompleted={toggleCompleted}
                            onToggleSelect={toggleSelect}
                        />
                    ) : (
                        <div className="w-full h-[80%] flex items-center justify-center overflow-hidden">
                            <p className="text-gray-500 text-center z-10">Empty task</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
