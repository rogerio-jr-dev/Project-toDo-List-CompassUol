// server.ts (backend)
import express, { Request, Response } from "express";
import cors from "cors";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const app = express();
app.use(cors());
app.use(express.json());

let tasks: Task[] = [];

app.get("/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});

app.post("/tasks", (req: Request, res: Response) => {
  const { title }: { title: string } = req.body;
  const newTask: Task = {
    id: String(tasks.length + 1),
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed }: { title?: string; completed?: boolean } =
    req.body;

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title: title !== undefined ? title : tasks[taskIndex].title,
      completed:
        completed !== undefined ? completed : tasks[taskIndex].completed, 
    };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});
app.listen(3000, () => console.log("API rodando na porta 3000"));
