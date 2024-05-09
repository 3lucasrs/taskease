import List from "../../components/List";
import { Task, useTaskContext } from "../../context/TaskProvider";
import { OverviewBoxes } from "../../components/OverviewStatusBoxes";
import { Container } from "../../styles/GlobalStyle";
import { HomeContent } from "./styles";
import { useState } from "react";
import Header from "../../components/Header";
import { MdFormatListBulleted } from "react-icons/md";
import { priorityTextMap, statusTextMap } from "../../utils/taskUtils";

export const Home = () => {
  const { tasks, filterTasksByStatusId } = useTaskContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const iconPage = <MdFormatListBulleted />;

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredTasks: Task[] = tasks.filter((task) => {
    // Verifica se o nome da tarefa contém o termo de pesquisa
    const taskNameMatch = task.taskName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const priorityMatch = priorityTextMap[task.priority]
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const statusMatch = statusTextMap[task.status]
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const createdAt = task.createdAt
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return taskNameMatch || priorityMatch || statusMatch || createdAt;
  });

  return (
    <Container>
      <Header
        title="Todas as tarefas"
        icon={iconPage}
        onSearch={handleSearch}
      />
      <HomeContent>
        <OverviewBoxes
          notStartedValue={filterTasksByStatusId(tasks, [1]).length}
          inProgressValue={filterTasksByStatusId(tasks, [2]).length}
          finishedValue={filterTasksByStatusId(tasks, [3]).length}
          canceledValue={filterTasksByStatusId(tasks, [4]).length}
        />

        <List title="Lista de tarefas" list={filteredTasks} />
      </HomeContent>
    </Container>
  );
};

export default Home;
