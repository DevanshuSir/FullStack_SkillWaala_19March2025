import React, { useEffect, useRef, useState } from "react";
import TodoCss from "./todo.module.css";
import toast from "react-hot-toast";
import Task from "./Task";

const Todo = () => {
  const [task, setTask] = useState("");
  const [complete, setComplete] = useState("");
  const [remaing, setRemaing] = useState("");
  const [totalTask, setTotalTask] = useState("");
  const darkMode = useRef();
  const darkModeIcon = useRef();

  const todoData = JSON.parse(localStorage.getItem("todo_items")) || [
    { todoTask: "Buy Car", complete: false },
  ];

  const [alltodo, setAllTodo] = useState(todoData);

  function handleForm(e) {
    e.preventDefault();
    if (!task) {
      toast.error("Please Add Task 🫤");
    } else {
      let isVerfied = alltodo.some((value, index) => {
        return value.todoTask.toLowerCase() === task.toLowerCase();
      });

      if (isVerfied) {
        toast.error("Task Already Added ❌");
        setTask("");
      } else {
        setAllTodo([...alltodo, { todoTask: task, complete: false }]);
        toast.success("Task Added 💚");
        setTask("");
      }
    }
  }

  function handleCheck(id) {
    const copyOfAllTodo = [...alltodo];
    copyOfAllTodo[id].complete = !copyOfAllTodo[id].complete;
    setAllTodo(copyOfAllTodo);
  }

  function handleDelete(id) {
    const copyOfAllTodo = [...alltodo];
    const deletedValue = copyOfAllTodo.filter((value, index) => {
      return index !== id;
    });
    // console.log(deletedValue);
    setAllTodo(deletedValue);
  }

  function handleUpdate(id) {
    const copyOfAllTodo = [...alltodo];
    let oldTask = copyOfAllTodo[id].todoTask;
    let newTask = prompt(`Update Task :- ${oldTask}`, oldTask);

    const newObj = { todoTask: newTask, complete: false };

    copyOfAllTodo.splice(id, 1, newObj);

    setAllTodo(copyOfAllTodo);
  }

  useEffect(() => {
    const copyOfAllTodo = [...alltodo];
    const completeTasks = copyOfAllTodo.filter((value, index) => {
      return value.complete;
    });

    const remainingTasks = copyOfAllTodo.filter((value, index) => {
      return !value.complete;
    });

    const totalTask = copyOfAllTodo.filter((value, index) => {
      return value;
    });

    setComplete(completeTasks.length);
    setRemaing(remainingTasks.length);
    setTotalTask(totalTask.length);

    localStorage.setItem("todo_items", JSON.stringify(copyOfAllTodo));
  }, [alltodo]);

  function handleDarkMode() {
    const bgColor = darkMode.current.style.backgroundColor;
    if (bgColor === "" || bgColor === "white") {
      darkMode.current.style.backgroundColor = "black";
      darkMode.current.style.color = "white";
      darkModeIcon.current.className = "bi bi-toggle-on";
    } else {
      darkMode.current.style.backgroundColor = "white";
      darkMode.current.style.color = "black";
      darkModeIcon.current.className = "bi bi-toggle-off";
    }
  }

  function handleClearAll() {
    setAllTodo([]);
  }

  return (
    <div ref={darkMode}>
      <div className={TodoCss.main}>
        <div>
          <h1 className="text-center">
            Todo Application 🧾{" "}
            <i
              className="bi bi-toggle-off"
              ref={darkModeIcon}
              onClick={handleDarkMode}
            ></i>{" "}
          </h1>
          <Task ctask={complete} rtask={remaing} ttask={totalTask} />
          <form action="" onSubmit={handleForm}>
            <input
              type="text"
              name=""
              id=""
              className={TodoCss.input_box}
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <input type="submit" value="Add Task" className={TodoCss.btn} />

            {alltodo.length === 0 ? (
              <h5 className="text-center">No Task Added 🫤</h5>
            ) : (
              alltodo.map((items, index) => (
                <ul key={index}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="me-3"
                    checked={items.complete}
                    onClick={() => {
                      handleCheck(index);
                    }}
                  />
                  <span
                    className="fw-bold fs-4"
                    style={{
                      textDecoration: items.complete ? "line-through" : "none",
                    }}
                  >
                    {items.todoTask}
                  </span>

                  <i
                    className="bi bi-trash3-fill text-danger fs-4 float-end"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  ></i>
                  <i
                    className="bi bi-pencil-square text-success fs-4 float-end me-2"
                    onClick={() => {
                      handleUpdate(index);
                    }}
                  ></i>
                </ul>
              ))
            )}
          </form>
          <button className={TodoCss.btn_clear} onClick={handleClearAll}>
            Clear All Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
