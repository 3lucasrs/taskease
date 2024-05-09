import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  ButtonTrash,
  Form,
  FormGroup,
  FormRow,
  FormSingle,
  FormWrapper,
  Input,
  Label,
  Select,
} from "./styles";
import Header from "../../components/Header";
import { FaTrash } from "react-icons/fa";
import List from "../../components/List";
import { Task, useTaskContext } from "../../context/TaskProvider";
import { Container, ErrorMessage } from "../../styles/GlobalStyle";
import { MdEditNote } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  taskName: z.string().min(3, "A tarefa deve ter no mínimo 3 caracteres"),
  priority: z.coerce.number().int().min(1).max(4),
  status: z.coerce.number().int().min(1).max(4),
});

const TaskModifier = () => {
  const {
    removeTask,
    updateTask,
    tasks,
    beforeModifiedTask,
    afterModifiedTask,
    setBeforeModifiedTask,
    setAfterModifiedTask,
  } = useTaskContext();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [taskData, setTaskData] = useState<Task | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  const updateFormValues = (task: Task) => {
    setValue("taskName", task.taskName);
    setValue("priority", task.priority);
    setValue("status", task.status);
    setTaskData(task);
  };

  const handleTaskSelect = (taskId: number) => {
    const selected = tasks.find((task) => task.id === taskId);
    setSelectedTask(selected || null);
    if (selected) {
      updateFormValues(selected);
    } else {
      setTaskData(null);
    }
  };

  const handleSaveTask = (data: Task) => {
    if (!selectedTask) return;
    const updatedTask = { ...selectedTask, ...data };

    if (data.status === 3) {
      updatedTask.finishDate = new Date().toISOString();
    } else {
      updatedTask.finishDate = null;
    }

    updateTask(updatedTask);
    setBeforeModifiedTask([selectedTask]);
    setAfterModifiedTask([updatedTask]);
    setSelectedTask(null);
    setTaskData(null);
  };

  const handleDeleteTask = () => {
    if (!selectedTask) return;
    if (selectedTask.id === undefined) return;
    removeTask(selectedTask.id);
    setSelectedTask(null);
    setTaskData(null);
  };

  const icon = <MdEditNote />;

  return (
    <Container>
      <Header icon={icon} title="Editar tarefa" />
      <FormWrapper>
        <Form onSubmit={handleSubmit(handleSaveTask)}>
          <h1>Modificar Tarefa</h1>
          <FormRow>
            <FormGroup>
              <Label>Selecione a tarefa a ser editada</Label>
              <Select
                onChange={(e) => handleTaskSelect(Number(e.target.value))}
              >
                <option value="">Selecione uma tarefa</option>
                {tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.taskName}
                  </option>
                ))}
              </Select>
            </FormGroup>
            {selectedTask && (
              <FormSingle>
                <ButtonTrash type="button" onClick={handleDeleteTask}>
                  <FaTrash />
                </ButtonTrash>
              </FormSingle>
            )}
          </FormRow>

          {selectedTask && (
            <div>
              <FormRow>
                <FormGroup>
                  <Label>Nova tarefa</Label>
                  <Input
                    type="text"
                    defaultValue={selectedTask.taskName}
                    {...register("taskName")}
                  />
                  {errors.taskName && (
                    <ErrorMessage>{errors.taskName.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <Label>Nova prioridade</Label>
                  <Select
                    {...register("priority")}
                    defaultValue={taskData?.priority}
                  >
                    <option value={1}>Baixa</option>
                    <option value={2}>Média</option>
                    <option value={3}>Moderada</option>
                    <option value={4}>Alta</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Novo status</Label>
                  <Select
                    {...register("status")}
                    defaultValue={taskData?.status}
                  >
                    <option value={1}>Não iniciado</option>
                    <option value={2}>Em andamento</option>
                    <option value={3}>Finalizado</option>
                    <option value={4}>Cancelado</option>
                  </Select>
                </FormGroup>
              </FormRow>
            </div>
          )}

          <Button type="submit" disabled={!selectedTask}>
            Salvar
          </Button>
        </Form>
        {beforeModifiedTask.length > 0 && (
          <List title="Antes da modificação" list={beforeModifiedTask} />
        )}

        {afterModifiedTask.length > 0 && (
          <List title="Depois da modificação" list={afterModifiedTask} />
        )}
      </FormWrapper>
    </Container>
  );
};

export default TaskModifier;
