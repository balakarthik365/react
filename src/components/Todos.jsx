import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TodoCards from "./TodoCards";
import Loader from "./Loader";

const firebaseUrl =
  "https://react-projects-545a4-default-rtdb.asia-southeast1.firebasedatabase.app/";
const Todos = () => {
  let [status, setStatus] = useState(false);
  let [todos, setTodos] = useState([]);
  let [buttonCss, setButtonCSS] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  const taskInput = useRef(null);
  const addTaskHandler = () => {
    let task = taskInput.current.value;
    if (task != "") {
      setStatus(true);
      axios.post(`${firebaseUrl}todos.json`, { title: task }).then(() => {
        setStatus(false);
        fetchTodos();
        taskInput.current.value = "";
      });
    } else {
      setErrorMsg("Please enter your task to continue");
      setButtonCSS(
        "rounded-md mb-2 p-2 border border-red-700 focus:outline-none inline w-full focus:outline-red-800 focus:shadow-sm focus:shadow-red-800"
      );
    }
  };
  const fetchTodos = () => {
    setErrorMsg("Enter your task here");
    setButtonCSS(
      "rounded-md mb-2 p-2 border border-violet-700 focus:outline-none inline w-full focus:outline-violet-800 focus:shadow-sm focus:shadow-violet-800"
    );
    axios.get(`${firebaseUrl}todos.json`).then((todos) => {
      let tempTodos = [];
      for (let key in todos.data) {
        let todo = {
          id: key,
          ...todos.data[key],
        };
        tempTodos.push(todo);
      }
      setTodos(tempTodos);
    });
  };
  const deleteHandler = (id) => {
    axios.delete(`${firebaseUrl}todos/${id}.json`).then(() => {
      fetchTodos();
    });
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
      <div
        className="container
  "
      >
        <div className="mt-5 w-[450px] mx-auto">
          <h1 className="text-2xl font-bold text-black">
            Manage your tasks{" "}
            <span className="text-neutral-700">@Balakarthik</span>
          </h1>
          <p className="text-neutral-700 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            minus at illo.
          </p>
          <input
            type="text"
            ref={taskInput}
            placeholder={errorMsg}
            className={buttonCss}
          />
          <button
            onClick={addTaskHandler}
            className="text-sm rounded-md border font-bold py-2 px-4 bg-violet-600 text-white hover:cursor-pointer hover:shadow-md hover:shadow-violet-800 hover:bg-violet-400 hover:border-violet-800 flex gap-4 items-center"
          >
            Create Todos
            {status ? <Loader /> : ""}
          </button>
          <div className="mt-10">
            {todos.map((todo) => (
              <TodoCards
                deleteHandler={deleteHandler}
                key={todo.id}
                title={todo.title}
                id={todo.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
