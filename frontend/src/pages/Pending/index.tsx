import { HomeContent } from "./styles";
import List from "../../components/List";
import { Task, useTaskContext } from "../../context/TaskProvider";
import { OverviewBoxes } from "../../components/OverviewStatusBoxes";
import { Container } from "../../styles/GlobalStyle";
import Header from "../../components/Header";
import { MdPendingActions } from "react-icons/md";
import { useState } from "react";

export const Pending = () => {
  const iconPage = <MdPendingActions />;
  const { filterTasksByStatusId, tasks } = useTaskContext();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredTasks: Task[] = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header
        title="Tarefas pendentes"
        icon={iconPage}
        onSearch={handleSearch}
      />
      <HomeContent>
        <OverviewBoxes
          notStartedValue={filterTasksByStatusId(tasks, [1]).length}
          inProgressValue={filterTasksByStatusId(tasks, [2]).length}
        />
        <List
          title="Tarefas pendentes"
          list={filterTasksByStatusId(filteredTasks, [1, 2])}
        />
      </HomeContent>
    </Container>
  );
};
