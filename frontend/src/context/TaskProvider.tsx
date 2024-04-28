import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

export interface Task {
  id?: number;
  taskName: string;
  createdAt?: string;
  priority: number;
  status: number;
}

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string;
  addTask: (task: Task) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
  removeTask: (taskId: number) => Promise<void>;
  filterTasksByStatusId: (tasks: Task[], ids: number[]) => Task[];
  filterByLatestAdded: (count: number) => Task[];
  beforeModifiedTask: Task[];
  setBeforeModifiedTask: (task: Task[]) => void;
  afterModifiedTask: Task[];
  setAfterModifiedTask: (task: Task[]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/tasks`);
        setTasks(response.data.tasks);
        setError("");
      } catch (error) {
        setError("Erro ao buscar tarefas");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (task: Task) => {
    try {
      const response = await axios.post(`${BASE_URL}/tasks`, task);
      setTasks([...tasks, response.data.item]);
      setError("");
    } catch (error) {
      setError("Erro ao adicionar tarefa");
    }
  };

  const updateTask = async (task: Task) => {
    try {
      const response = await axios.put(`${BASE_URL}/tasks/${task.id}`, task);
      const updatedTask: Task = response.data;
      const updatedTasks = tasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      );
      setTasks(updatedTasks);
      setError("");
    } catch (error) {
      setError("Erro ao atualizar tarefa");
    }
  };

  const removeTask = async (taskId: number) => {
    try {
      await axios.delete(`${BASE_URL}/tasks/${taskId}`);
      const updatedTasks = tasks.filter((t) => t.id !== taskId);
      setTasks(updatedTasks);
      setError("");
    } catch (error) {
      setError("Erro ao remover tarefa");
    }
  };

  const filterTasksByStatusId = (tasks: Task[], ids: number[]) => {
    const filtered = tasks.filter((task) => ids.includes(task.status));
    return filtered;
  };

  const filterByLatestAdded = (count: number) => {
    const latestTasks = tasks.slice(-count);
    return latestTasks;
  };

  const [beforeModifiedTask, setBeforeModifiedTask] = useState<Task[]>([]);
  const [afterModifiedTask, setAfterModifiedTask] = useState<Task[]>([]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        updateTask,
        removeTask,
        filterTasksByStatusId,
        filterByLatestAdded,
        beforeModifiedTask,
        setBeforeModifiedTask,
        afterModifiedTask,
        setAfterModifiedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
