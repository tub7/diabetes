import React, { useState, useEffect } from "react";
import "./styleoftodo.css";
import Todo from "./todo.js";

function Todoapp() {
    const [input, setinput] = useState("");
    const [todos, settodos] = useState([]);
    const [status, setstatus] = useState("all");
    const [filtered, setfiltered] = useState([]);

    function handlechange(e) {
        setinput(e.target.value);
    }

    function handleclick() {
        if (input !== "") {
            settodos((todos) => [
                ...todos,
                { text: input, id: Math.random() * 1000, complete: false },
            ]);
            setinput("");
        }
    }

    function handlestatus(e) {
        setstatus(e.target.value);
    }

    function handleclear() {
        settodos([]);
    }

    useEffect(() => {
        getlocal();
    }, []);

    useEffect(() => {
        const setlocal = () => {
            localStorage.setItem("todos", JSON.stringify(todos));
        };
        handlefilter();
        setlocal();
        function handlefilter() {
            switch (status) {
                case "complete":
                    setfiltered(todos.filter((item) => item.complete === true));
                    break;
                case "uncomplete":
                    setfiltered(
                        todos.filter((item) => item.complete === false)
                    );
                    break;
                default:
                    setfiltered(todos);
                    break;
            }
        }
    }, [status, todos]);

    const getlocal = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }
        settodos(JSON.parse(localStorage.getItem("todos")));
    };

    return (
        <div className="aps">
            <h1 className="hello">Todo app</h1>
            <ul>
                {filtered.map((item) => (
                    <Todo
                        todo={item}
                        todos={todos}
                        settodos={settodos}
                        key={item.id}
                    />
                ))}
            </ul>
            <div className="entry">
                <input value={input} onChange={handlechange} />
                <button onClick={handleclick}>submit</button>
                <button onClick={handleclear}>clear</button>
                <select onChange={handlestatus}>
                    <option value="all">all</option>
                    <option value="complete">complete</option>
                    <option value="uncomplete">uncomplete</option>
                </select>
            </div>
        </div>
    );
}

export default Todoapp;
