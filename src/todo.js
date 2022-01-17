import React from "react";

function Todo({ todo, todos, settodos }) {
    function handledel() {
        settodos(todos.filter((item) => item.id !== todo.id));
    }
    function handlecomplete() {
        settodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        complete: !item.complete,
                    };
                }
                return item;
            })
        );
    }

    return (
        <>
            <li key={todo.id} className="listitem">
                {todo.text}
                <button onClick={handledel} className="del"></button>
                <input
                    onChange={handlecomplete}
                    type="checkbox"
                    className="check"
                    checked={todo.complete}
                />
            </li>
        </>
    );
}

export default Todo;
