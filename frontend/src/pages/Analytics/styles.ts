import Chart from "react-apexcharts";
import styled from "styled-components";

export const AnalyticsContainer = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AnalyticsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.theme.gray2};
  padding: 15px;
  border-radius: 12px;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
`;

export const ChartGroup = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const StyledChart = styled(Chart)`
  .apexcharts-legend {
    background-color: ${(props) => props.theme.gray4};
    padding: 2px;
    border-radius: 8px;
  }
`;
