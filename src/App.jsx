import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import ShowTask from "./Components/ShowTask";
import "./App.css";
import { useEffect, useState } from "react";
export default function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || [],
  );
  const [task, setTask] = useState({});
  useEffect(() =>  {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
    return (
    <>
    <div className="App">
    <Header/>
    <AddTask 
    taskList={taskList} 
    setTaskList={setTaskList}
    task={task}
    setTask={setTask} 
    />
    <ShowTask
     taskList={taskList} 
     setTaskList={setTaskList} 
     task={task}
     setTask={setTask}
     />
    </div>
    </>
  );
}