import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { TaskProvider } from "./TaskContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import TaskManager from "./TaskManager";
import AddEditTask from "./AddEditTask";
import DisplayTask from "./DisplayTask";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/tasks/add" element={<AddEditTask />} />
          <Route path="/tasks/edit/:id" element={<AddEditTask />} />
          <Route path="/display" element={<DisplayTask />} />
        </Routes>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;