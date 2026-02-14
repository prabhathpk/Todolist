import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./TaskContext";
import "./App.css";

export default function TaskManager() {
  const { tasks, deleteTask } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header-row">
        <h1>Task Management</h1>
        <button className="btn" onClick={() => navigate("/tasks/add")}>Add Task</button>
         <button className="btn" id="pdf" onClick={() => navigate("/display")}>taskDu</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 && <p>No tasks yet.</p>}
        <ul className="task-ul">
          {tasks.map((t) => (
            <li key={t.id} className="task-item">
              <div>{t.name}</div>
              <div className="task-actions">
                <button className="btn" onClick={() => navigate(`/tasks/edit/${t.id}`)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteTask(t.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        
      </div>
    </div>
  );
}
