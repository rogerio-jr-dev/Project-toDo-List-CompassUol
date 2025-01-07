import React from 'react'
import { ActivityIndicator } from 'react-native';
import styled from "styled-components/native";


const Loading = () => {
  return <ActivityIndicator size={40} color="#000" />;
};

const ActIndicator = styled.ActivityIndicator`

`; 

export default Loading;