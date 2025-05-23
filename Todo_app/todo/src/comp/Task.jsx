import React from "react";
import TaskCss from "./task.module.css";

const Task = (props) => {
  const { ctask, ttask } = props;
  return (
    <div>
      <section className={TaskCss.task_container}>
        <div className={TaskCss.task_heading}>
          <p>Task Done 😍</p>
        </div>

        <div className={TaskCss.task_complete}>
          {ctask}/{ttask}
        </div>
      </section>
    </div>
  );
};

export default Task;
