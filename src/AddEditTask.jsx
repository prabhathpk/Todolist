import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "./TaskContext";
import "./App.css";

export default function AddEditTask() {
  const { id } = useParams();
  const { tasks, addTask, updateTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const existing = tasks.find((t) => t.id === id) || { name: "", date: "", description: "" };

  const [name, setName] = useState(existing.name);
  const [date, setDate] = useState(existing.date);
  const [description, setDescription] = useState(existing.description);

  useEffect(() => {
    if (id && existing) {
      setName(existing.name);
      setDate(existing.date);
      setDescription(existing.description);
    }
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault();
    const payload = { name, date, description };
    if (id) updateTask(id, payload);
    else addTask(payload);
    navigate("/tasks");
  };
  const handleClick= (e) =>{
navigate("/display");

  }


  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSave}>
        <h1>{id ? "Edit Task" : "Add Task"}</h1>

        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task name" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" rows={4} />

        <div className="form-actions">
          <button className="btn" type="submit">Save</button>
          <button className="btn btn-secondary" type="button" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
      <button className="btn" id="pdf" onClick={handleClick}></button>
    </div>
  );
}
