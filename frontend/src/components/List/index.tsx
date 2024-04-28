import { Task } from "../../context/TaskProvider";
import { useEffect, useRef, useState } from "react";
import {
  getCompressedDate,
  getDate,
  getPriority,
  getStatusText,
} from "../../utils/taskUtils";
import {
  DateCell,
  ListContainer,
  PriorityCell,
  StatusCell,
  Table,
  TableHeader,
  TableRow,
  TableWrapper,
  TaskCell,
} from "./styles";

interface ListProps {
  title: string;
  list: Task[];
}

const List = ({ title, list }: ListProps) => {
  const tableWrapperRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const otherElementsHeight = 10;
      const windowHeight = window.innerHeight;
      const maxTableWrapperHeight = windowHeight - otherElementsHeight;
      setMaxHeight(maxTableWrapperHeight);
    };

    calculateMaxHeight();

    const handleResize = () => {
      calculateMaxHeight();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ListContainer>
      <h1>{title}</h1>
      <TableWrapper
        ref={tableWrapperRef}
        style={{ maxHeight: `${maxHeight - 300}px` }}
      >
        <Table>
          <thead>
            <tr>
              <TableHeader>Tarefa</TableHeader>
              <TableHeader>Data</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Prioridade</TableHeader>
            </tr>
          </thead>
          <tbody>
            {list.map((task) => (
              <TableRow key={task.id}>
                <TaskCell>{task.taskName}</TaskCell>
                <DateCell title={getDate(task.createdAt)}>
                  {getCompressedDate(task.createdAt)}
                </DateCell>
                <StatusCell>{getStatusText(task.status)}</StatusCell>
                <PriorityCell>{getPriority(task.priority)}</PriorityCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </ListContainer>
  );
};

export default List;
