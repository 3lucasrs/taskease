import React from "react";
import { MdCircle } from "react-icons/md";
import { Priority } from "../components/List/styles";
import { darkTheme } from "../styles/themes/darkTheme";
import { formatDistanceToNow, isAfter, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FormatDateOptions } from "@formatjs/intl";

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

// Converter pripridade number para string
interface TextMap {
  [key: number]: string;
}

export const priorityTextMap: TextMap = {
  1: "baixa",
  2: "media",
  3: "moderada",
  4: "alta",
};

export const statusTextMap: TextMap = {
  1: "não iniciado",
  2: "em andamento",
  3: "finalizada",
  4: "alta",
};

// Função que converte a data vinda do db
const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCompressedDate = (
  dataDoBanco: string | undefined | null
): string => {
  if (!dataDoBanco) {
    return "-";
  }

  const data = new Date(dataDoBanco);
  const dataFormatada = formatDistanceToNow(data, {
    locale: ptBR,
    addSuffix: true,
  });

  return capitalizeFirstLetter(dataFormatada);
};

// Função que verifica se a task fica vermelha por estar vencida e afins
export function isTaskWarning(
  dueDate: string | undefined,
  status: number
): boolean {
  // caso o status for finalizado ele não mostra em vermelho, mesmo estando vencida
  if (status === 3) {
    return false;
  }

  // caso o status for cancelado ele mostra em vermelho
  if (status === 4) {
    return true;
  }

  if (!dueDate) {
    return false;
  }

  const currentDate = new Date();
  const dueDateUTC = new Date(dueDate);

  if (isNaN(dueDateUTC.getTime())) {
    throw new Error("Data de vencimento inválida");
  }

  return dueDateUTC < currentDate;
}

// Função que adiciona o texto para data de vencimento..
export const getTimeUntilDue = (
  dueDate: string,
  taskStatus: number
): string => {
  if (!dueDate) {
    return "Sem data de vencimento";
  }

  if (taskStatus === 3) return "-";

  const parsedDueDate = parseISO(dueDate);

  const dataFormatada = formatDistanceToNow(parsedDueDate, {
    locale: ptBR,
    addSuffix: true,
    includeSeconds: true,
  }).replace("há", "Vencido há");
  return capitalizeFirstLetter(dataFormatada);
};

// Função que mostra data original
export const getDate = (dataDoBanco: string): string => {
  if (!dataDoBanco) {
    return "Sem data";
  }

  const data = new Date(dataDoBanco);
  const options: FormatDateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return new Intl.DateTimeFormat("pt-BR", options).format(data);
};

// função que verifica se a data de vencimento é anterior a atual
export const isValidDueTime = (value: string) => {
  try {
    const parsedDateTime = parseISO(value);

    return isAfter(parsedDateTime, new Date());
  } catch (error) {
    return false;
  }
};
