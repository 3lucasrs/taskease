import {
  TbProgressBolt,
  TbProgressCheck,
  TbProgressDown,
  TbProgressX,
} from "react-icons/tb";
import { Box, BoxIcon, BoxNumber, BoxTopic, OverviewBox } from "./styles";

interface OverviewBoxesProps {
  notStartedValue?: number;
  inProgressValue?: number;
  finishedValue?: number;
  canceledValue?: number;
}

export const OverviewBoxes = ({
  notStartedValue,
  inProgressValue,
  finishedValue,
  canceledValue,
}: OverviewBoxesProps) => {
  return (
    <OverviewBox>
      <Box>
        <div className="right-side">
          <BoxTopic>Não iniciado</BoxTopic>
          <BoxNumber>{notStartedValue ?? 0}</BoxNumber>
        </div>
        <BoxIcon status="notstarted">
          <TbProgressDown size={42} />
        </BoxIcon>
      </Box>
      <Box>
        <div className="right-side">
          <BoxTopic>Em andamento</BoxTopic>
          <BoxNumber>{inProgressValue ?? 0}</BoxNumber>
        </div>
        <BoxIcon status="inprogress">
          <TbProgressBolt size={42} />
        </BoxIcon>
      </Box>
      <Box>
        <div className="right-side">
          <BoxTopic>Finalizado</BoxTopic>
          <BoxNumber>{finishedValue ?? 0}</BoxNumber>
        </div>
        <BoxIcon status="finished">
          <TbProgressCheck size={42} />
        </BoxIcon>
      </Box>
      <Box>
        <div className="right-side">
          <BoxTopic>Cancelado</BoxTopic>
          <BoxNumber>{canceledValue ?? 0}</BoxNumber>
        </div>
        <BoxIcon status="canceled">
          <TbProgressX size={42} />
        </BoxIcon>
      </Box>
    </OverviewBox>
  );
};
