import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import "./App.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container dashboard">
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <div className="form-actions">
            <button className="btn" onClick={logout}>Logout</button>
            <Link to="/tasks"><button className="btn">Manage Tasks</button></Link>
          </div>
        </>
      ) : (
        <h1>Please log in first</h1>
      )}
    </div>
  );
}