import { useTheme } from "../../context/ThemeProvider";
import { Button, Moon, Sun } from "./style";

export const ButtonTheme = () => {
  const { getActiveTheme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {getActiveTheme() == "light" ? <Moon size={20} /> : <Sun size={20} />}
      {getActiveTheme() == "light"
        ? "Trocar para modo escuro"
        : "Trocar para modo claro"}
    </Button>
  );
};
