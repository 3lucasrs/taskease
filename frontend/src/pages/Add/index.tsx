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
      .max(4, "Por favor selecione uma prioridade válida!"), // coerce converte string para number
  });

  type AddTaskSchema = z.infer<typeof addTaskSchema>; // zod integrado ao typescript

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddTaskSchema>({
    resolver: zodResolver(addTaskSchema),
  });

  const handleAddTaskSubmit = (data: AddTaskSchema) => {
    if (!errors.taskName && !errors.priority) {
      const newTask: Task = {
        taskName: data.taskName,

        status: 1,
        priority: data.priority,
      };

      addTask(newTask);
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
              <Label htmlFor="dueDate">Data de abertura</Label>
              <Input
                type="date"
                id="dueDate"
                value={new Date().toISOString().slice(0, 10)}
                disabled
              />
            </LabelComponent>

            <LabelComponent>
              <Label htmlFor="completionDate">Data de vencimento</Label>
              <Input type="date" id="completionDate" disabled />
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
