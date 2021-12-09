import {useState} from 'react'
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }
            setTodos([...todos,newItem])
        }
    }

    const removeTask = () => {

    }

    const handleToggle = () => {

    }

    return (
        <div className="App">
            <header>
                Список задачь: <span>{todos.length}</span>
            </header>
            <div className="wt-section_bg_dark">
                <div className="wt-container">
                    <div className="wt-row wt-row_size_m">
                        <div className="wt-col-6 wt-col-sm-12">
                            <ToDoForm addTask={addTask}/>
                        </div>
                    </div>
                </div>
            </div>
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todos.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
}

export default App;
