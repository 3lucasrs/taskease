import { ReactNode, useState } from "react";
import { HeaderContainer, HeaderTitle, Input } from "./styles";

interface HeaderProps {
  icon: ReactNode;
  title: string;
  onSearch?: (term: string) => void;
}

const Header = ({ icon, title, onSearch }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <HeaderContainer>
      <HeaderTitle>
        {icon}
        <span>{title}</span>
      </HeaderTitle>
      {onSearch && (
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={handleInputChange}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
