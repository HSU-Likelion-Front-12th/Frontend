import { createContext, useContext, useReducer, useRef } from "react";

const initialTodo = [
    
]

function todoReducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            })
        default:
            throw new Error(`Unhandled Action Type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const NextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodo);
    const nextId = useRef(1);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <NextIdContext.Provider value={nextId}>
                    {children}
                </NextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error("State Provider가 없음");
    }

    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error("Dispatch Provider가 없음");
    }

    return context;
}

export function useNextId(){
    const context = useContext(NextIdContext);
    if (!context) {
        throw new Error("Nextid Provider가 없음");
    }

    return context;
}