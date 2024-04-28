import { MdCircle } from "react-icons/md";
import { Priority } from "../components/List/styles";
import { darkTheme } from "../styles/themes/darkTheme";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

// Função que converte o status(ID) em descritivo
export const getStatusText = (status: number): string => {
  const statusValue = Number(status);
  switch (statusValue) {
    case 1:
      return "Não iniciado";
    case 2:
      return "Em andamento";
    case 3:
      return "Finalizado";
    case 4:
      return "Cancelado";
    default:
      return "Desconhecido";
  }
};

// Função que converte a prioridade:number em componente descritivo
export const getPriority = (priority: number) => {
  const priorityValue = Number(priority);

  switch (priorityValue) {
    case 4:
      return (
        <Priority>
          <MdCircle size={16} color={darkTheme.salmon} />
          Alta
        </Priority>
      );
    case 3:
      return (
        <Priority>
          <MdCircle size={16} color={darkTheme.yellow} />
          Moderada
        </Priority>
      );
    case 2:
      return (
        <Priority>
          <MdCircle size={16} color={darkTheme.green} />
          Média
        </Priority>
      );
    case 1:
      return (
        <Priority>
          <MdCircle size={16} color={darkTheme.blue} />
          Baixa
        </Priority>
      );
    default:
      return (
        <Priority>
          <MdCircle size={16} color={darkTheme.blue} />
          Baixa
        </Priority>
      );
  }
};

// Função que converte a data vinda do db

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCompressedDate = (dataDoBanco: string | undefined): string => {
  if (!dataDoBanco) {
    return "Sem data";
  }

  const data = new Date(dataDoBanco);
  const dataFormatada = formatDistanceToNow(data, {
    locale: ptBR,
    addSuffix: true,
  });

  return capitalizeFirstLetter(dataFormatada);
};

export const getDate = (dataDoBanco: string | undefined): string => {
  if (!dataDoBanco) {
    return "Sem data";
  }

  const data = new Date(dataDoBanco);
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa do zero
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");
  const segundos = String(data.getSeconds()).padStart(2, "0");

  return `${dia}/${mes}/${ano} ás ${horas}:${minutos}:${segundos}`;
};
