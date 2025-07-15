import { useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description:
        "Estudar programação para me tornar um desenvolvedor completo",
      isCompletede: false,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar ingles para me tornar um Dev na gringa",
      isCompletede: false,
    },
    {
      id: 3,
      title: "Estudar Java",
      description: "Estudar Java para complementar meu conhecimentos",
      isCompletede: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center ">
          Gerenciador de tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
