import React from "react";
import Header from "../../components/Header";
import {
  Button,
  Form,
  FormGroup,
  FormRow,
  FormWrapper,
  Input,
  Label,
  LabelComponent,
  Select,
} from "./styles";
import { Task, useTaskContext } from "../../context/TaskProvider";
import { z } from "zod";
import List from "../../components/List";
import { Container, ErrorMessage } from "../../styles/GlobalStyle";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidDueTime } from "../../utils/taskUtils";

const AddTask = () => {
  const { addTask, filterByLatestAdded } = useTaskContext();

  const addTaskSchema = z.object({
    taskName: z
      .string()
      .min(3, "O nome de sua tarefa deve ter no mínimo 3 letras!"),
    priority: z.coerce
      .number()
      .int()
      .min(1, "Por favor selecione uma prioridade válida!")
      .max(4, "Por favor selecione uma prioridade válida!"),
    dueDate: z.string().refine(isValidDueTime, {
      message:
        "Por favor, insira uma data e hora no formato válido e que seja posterior à data atual",
    }),
  });

  type AddTaskSchema = z.infer<typeof addTaskSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddTaskSchema>({
    resolver: zodResolver(addTaskSchema),
  });

  const handleAddTaskSubmit = (data: AddTaskSchema) => {
    if (!errors.taskName && !errors.priority && !errors.dueDate) {
      const newTask: Task = {
        taskName: data.taskName,
        createdAt: new Date().toISOString(),
        status: 1,
        priority: data.priority,
        dueDate: data.dueDate,
        finishDate: null,
      };

      addTask(newTask);
      console.log(newTask);

      reset();
    }
  };

  const icon = <MdFormatListBulletedAdd />;

  return (
    <Container>
      <Header icon={icon} title="Adicionar tarefa"></Header>
      <FormWrapper>
        <Form onSubmit={handleSubmit(handleAddTaskSubmit)}>
          <h1>Adicionar nova tarefa</h1>
          <FormRow>
            <FormGroup>
              <Label htmlFor="taskName">Nome da Tarefa</Label>
              <Input
                type="text"
                id="taskName"
                placeholder="Ex: Estudar matemática"
                {...register("taskName")}
              />
              {errors.taskName && (
                <ErrorMessage>{errors.taskName.message}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="priority">Prioridade</Label>
              <Select id="priority" {...register("priority")}>
                <option value={0}>Selecione a prioridade</option>
                <option value={4}>Alta</option>
                <option value={3}>Moderada</option>
                <option value={2}>Média</option>
                <option value={1}>Baixa</option>
              </Select>
              {errors.priority && (
                <ErrorMessage>{errors.priority.message}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
          <FormRow>
            <LabelComponent>
              <Label htmlFor="dueDate">Data de vencimento</Label>
              <Input
                {...register("dueDate")}
                type="datetime-local"
                id="dueDate"
              />
              {errors.dueDate && (
                <ErrorMessage>{errors.dueDate.message}</ErrorMessage>
              )}
            </LabelComponent>
          </FormRow>
          <Button type="submit">Adicionar</Button>
        </Form>

        <List title="Últimas 5 adicionadas" list={filterByLatestAdded(5)} />
      </FormWrapper>
    </Container>
  );
};

export default AddTask;
