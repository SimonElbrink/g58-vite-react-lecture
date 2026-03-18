import React, { useReducer, useState } from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';
import {ACTIONS, initialState, taskReducer} from "./TaskReducer.jsx";

function TaskApp() {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
            setNewTask('');
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0 ">Task Manager</h4>
                </div>

                {/* Add Task Form */}
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                placeholder="Add new task..."
                            />
                            <button type="submit" className="btn btn-primary">
                                Add Task
                            </button>
                        </div>
                    </form>

                    {/* Task List */}
                    <div className="list-group">
                        {state.tasks.map(task => (
                            <div
                                key={task.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <div className="d-flex align-items-center">
                                    <button
                                        className={`btn btn-sm me-2 ${
                                            task.completed ? 'btn-success' : 'btn-outline-secondary'
                                        }`}
                                        onClick={() => dispatch({
                                            type: ACTIONS.TOGGLE_TASK,
                                            payload: task.id
                                        })}
                                    >
                                        <FaCheck />
                                    </button>
                                    <span style={{
                                        textDecoration: task.completed ? 'line-through' : 'none'
                                    }}>
                    {task.text}
                  </span>
                                </div>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => dispatch({
                                        type: ACTIONS.DELETE_TASK,
                                        payload: task.id
                                    })}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Clear Completed Button */}
                    {state.tasks.some(task => task.completed) && (
                        <button
                            className="btn btn-outline-danger mt-3"
                            onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}
                        >
                            Clear Completed
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TaskApp;