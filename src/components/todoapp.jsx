import React, { useEffect, useState } from "react";
import add from "./resources/add.svg";
import deletebtn from "./resources/delete.svg";
import "../src/index.css";
let globalID = 0;
function getLocalItems() {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}
function Todos() {
  const [todo, setToDo] = useState(getLocalItems());
  const [task, setTask] = useState([]);
  function addTodo() {
    if (task == "") {
      alert("ENTER THE TASK");
    } else {
      setToDo(function (oldTodos) {
        setTask("");
        return [...oldTodos, { todo: task, id: globalID++ }];
      });
    }
  }
  function enterEvent(e) {
    if (e.keyCode === 13) {
      addTodo();
    }
  }
  function deleteItem(itemID) {
    setToDo((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center  bg-[#ecf0f1] absolute overflow-x-hidden">
      <div className=" relative top-[30vh] h-[50vh] w-[50vw]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-3xl">TO-DO</p>
            <p>
              <span className="animate-pulse">A design & code by </span>
              <a
                href="https://www.linkedin.com/in/arjun-prasad-080469230/"
                target="_blank"
                className="underline decoration-green-500  hover:text-green-500"
              >
                ARJUN
              </a>
            </p>
          </div>
          <div className="flex  mt-[8vh] ">
            <input
              className="  text-edit m-2 text-lg shadow-gray-300 shadow-lg bg-white rounded-md h-[5.5vh] sm:w-[25vw] w-[90vw] border outline-none text-center "
              onKeyDown={enterEvent}
              placeholder="Enter the task...."
              type="text"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
            ></input>
            <button onClick={addTodo} className=" ">
              <img
                src={add}
                className="h-[5.5vh] animate-bounce hover:animate-none"
              />
            </button>
          </div>

          <div className="flex  relative left-2 mt-4">
            <ul className="">
              {todo.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="flex justify-center items-center"
                  >
                    <p className=" bg-white rounded-md shadow-gray-300 shadow-lg h-[6vh] sm:w-[25vw] w-[90vw] border-4 border-white border-b-green-500 text-xl ">
                      {item.todo}
                    </p>
                    <button
                      className=" m-2 hover:scale-75 "
                      onClick={() => deleteItem(item.id)}
                    >
                      <img src={deletebtn} className="h-[6.5vh]" />
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
