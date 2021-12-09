import {useState, useEffect } from "react";

function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState(() => {
        const saved = localStorage.getItem("userInput");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    useEffect(() => {
        // storing input name
        localStorage.setItem("userInput", JSON.stringify(userInput));
    }, [userInput]);

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter'){
          handleSubmit(e)
      }
    }
    
    return (
        <form className='formToDo wt-offset-top-24' onSubmit={handleSubmit}>
            <div className="title">Введите задачу</div>
            <input
                className='wt-offset-top-12'
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Вводить сюда...'
            />
            <button className='wt-offset-top-12'>Сохранить</button>
        </form>
    )
}

export default ToDoForm;