import React, { useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

interface SearchProps {
  onSearch: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text); // Passa o texto para o componente pai
  };

  return (
    <Input
      placeholder="Pesquisar tarefa"
      value={searchText}
      onChangeText={handleSearch}
    />
  );
};

const Input = styled.TextInput`
  width: 100%;
  padding: 15px 18px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.gray[300]};
  background-color: ${(props) => props.theme.colors.gray[100]};
`;

export default Search;
