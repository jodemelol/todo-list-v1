import { useState } from "react";
import { Form } from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./components/Task";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ id: uuidv4(), text: "" });

  const { text } = task;

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Complete el campo");
    } else {
      addTask(task);
      setTask({ id: uuidv4(), text: "" });
    }
  };
  console.log(task);
  console.log(tasks);
  return (
    <>
      <body className="bg-red-100 flex justify-center " >
        <div className="bg-cyan-100  px-9 border-4 border-cyan-100 rounded-xl">
          <header className="">
            <h1 className="text-3xl font-bold text-center">Todo-list</h1>
            <Form onChange={onChange} task={task} onSubmit={onSubmit} />
          </header>
          <main>
            <Task tasks={tasks} deleteTask={deleteTask} />
          </main>
        </div>
      </body>
    </>
  );
}
