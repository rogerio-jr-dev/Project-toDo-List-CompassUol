import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Empty from "./empty";

const Task = () => {
  
  const [tasksCreated, setTasksCreated] = useState(10); 
  const [tasksCompleted, setTasksCompleted] = useState(5); 
  return (
    <TaskArea>
      <TaskSubArea>
        <Text>Tarefas criadas</Text>
        <TaskCreated>{tasksCreated}</TaskCreated>
      </TaskSubArea>
      <TaskSubArea>
        <Text>Concluídas</Text>
        <TaskCompleted>{tasksCompleted}</TaskCompleted>
      </TaskSubArea>
    </TaskArea>
    
  );
};

const TaskArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  padding-left: 30px;
  padding-right: 30px;
`;
const TaskSubArea = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const TaskCreated = styled.Text`
  min-width: 30px;
  padding: 4px 8px;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.purple.dark};
  background-color: ${(props) => props.theme.colors.purple.light};
  text-align: center;
  font-weight: 700;
`;
const TaskCompleted = styled.Text`
  min-width: 30px;
  padding: 4px 8px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.green.light};
  color: ${(props) => props.theme.colors.green.dark};
  text-align: center;
  font-weight: 700;
`;
export default Task;
