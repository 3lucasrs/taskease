import Chart from "react-apexcharts";
import { useTaskContext } from "../../context/TaskProvider";
import { Container } from "../../styles/GlobalStyle";
import {
  AnalyticsContainer,
  AnalyticsContent,
  ChartContainer,
  ChartGroup,
} from "./styles";
import { MdOutlineAnalytics } from "react-icons/md";
import Header from "../../components/Header";
import { darkTheme } from "../../styles/themes/darkTheme";
import { useTheme } from "../../context/ThemeProvider";
import { lightTheme } from "../../styles/themes/lightTheme";

const TaskAnalytics = () => {
  const iconPage = <MdOutlineAnalytics />;
  const { tasks } = useTaskContext();
  const { getActiveTheme } = useTheme();

  const getLegendTextColor = () => {
    const activeTheme = getActiveTheme();
    if (activeTheme == "dark") {
      return darkTheme.text_gray1;
    } else {
      return lightTheme.text_gray1;
    }
  };

  const statusCounts = [0, 0, 0, 0];
  tasks.forEach((task) => {
    statusCounts[task.status - 1]++;
  });

  const priorityCounts = [0, 0, 0, 0];
  tasks.forEach((task) => {
    priorityCounts[task.priority - 1]++;
  });

  const statusNames = [
    "Não iniciado",
    "Em andamento",
    "Finalizado",
    "Cancelado",
  ];
  const priorityNames = ["Baixa", "Média", "Moderada", "Alta"];

  const statusColors = [
    darkTheme.gray5,
    darkTheme.blue,
    darkTheme.green,
    darkTheme.salmon,
  ];

  const priorityColors = [
    darkTheme.blue,
    darkTheme.green,
    darkTheme.yellow,
    darkTheme.salmon,
  ];

  return (
    <Container>
      <Header icon={iconPage} title="Análise" />

      <AnalyticsContainer>
        <AnalyticsContent>
          <h1>Gráficos demonstrativos</h1>
          <ChartContainer>
            <ChartGroup>
              <h1>Distribuição das Tarefas por Status</h1>
              <Chart
                options={{
                  chart: {
                    type: "bar",
                    height: 350,
                  },
                  xaxis: {
                    categories: statusNames,
                    labels: {
                      style: {
                        colors: getLegendTextColor(),
                      },
                    },
                  },
                  colors: statusColors,
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      distributed: true,
                      dataLabels: {
                        position: "top",
                      },
                    },
                  },
                  tooltip: {
                    theme: getActiveTheme(),
                  },
                  legend: {
                    show: true,
                    position: "bottom",
                    markers: {
                      width: 12,
                      height: 12,
                      strokeWidth: 0,
                      radius: 100,
                    },
                    labels: {
                      colors: getLegendTextColor(),
                      useSeriesColors: false,
                    },
                  },
                }}
                series={[
                  {
                    name: "Tarefas por Status",
                    data: statusCounts,
                  },
                ]}
                type="bar"
                height={350}
              />
            </ChartGroup>

            <ChartGroup>
              <h1>Distribuição das Tarefas por Prioridade</h1>
              <Chart
                options={{
                  chart: {
                    type: "bar",
                    height: 350,
                  },
                  xaxis: {
                    categories: priorityNames,
                    labels: {
                      style: {
                        colors: getLegendTextColor(),
                      },
                    },
                  },
                  colors: priorityColors,
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      distributed: true,
                      dataLabels: {
                        position: "top",
                      },
                    },
                  },
                  tooltip: {
                    theme: getActiveTheme(),
                  },
                  legend: {
                    show: true,
                    position: "bottom",
                    markers: {
                      width: 12,
                      height: 12,
                      strokeWidth: 0,
                      radius: 100,
                    },
                    labels: {
                      colors: getLegendTextColor(),
                      useSeriesColors: false,
                    },
                  },
                }}
                series={[
                  {
                    name: "Tarefas por Prioridade",
                    data: priorityCounts,
                  },
                ]}
                type="bar"
                height={350}
              />
            </ChartGroup>
          </ChartContainer>
        </AnalyticsContent>
      </AnalyticsContainer>
    </Container>
  );
};

export default TaskAnalytics;
