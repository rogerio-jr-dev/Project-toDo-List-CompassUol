import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native';

 const Search = () => {
  return <Input placeholder="Pesquisar tarefa" />;
}


 const Input = styled.TextInput`
    width:100%;
    padding: 15px 18px;
    border-radius:8px;
    border: 2px solid ${(props) => props.theme.colors.gray[300]};
    background-color: ${(props) => props.theme.colors.gray[100]};
`; 

export default Search;