import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import "./App.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TaskPDF from "./TaskPDF";

export default function DisplayTask() {
  const { tasks, filterTask } = useContext(TaskContext);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  if (!tasks || tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  const handleFilter = () => {
    const filtered = filterTask(fromDate, toDate);
    setFilteredTasks(filtered);
  };

  const handleReset = () => {
    setFilteredTasks(tasks);
    setFromDate("");
    setToDate("");
  };

  return (
    <div className="App-container">
      <form>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        <button type="button" onClick={handleFilter}>
          Apply Filter
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id || task.name}>
              <td>{task.name}</td>
              <td>{task.date}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PDFDownloadLink
        document={<TaskPDF tasks={filteredTasks} />}
        fileName="tasks.pdf"
      >
        {({ loading }) =>
          loading ? "Preparing PDF..." : <button className="btn">Export to PDF</button>
        }
      </PDFDownloadLink>
    </div>
  );
}