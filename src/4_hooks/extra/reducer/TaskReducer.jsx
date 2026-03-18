export const ACTIONS = {
    ADD_TASK: 'ADD_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED'
};

export const initialState = {
    tasks: []
};

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }]
            };

        case ACTIONS.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                )
            };

        case ACTIONS.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        case ACTIONS.CLEAR_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.completed)
            };

        default:
            return state;
    }
};

