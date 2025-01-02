import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../src/styles/colors"; 
import Empty from "./empty";

type TaskInfoProps = {
  label: string;
  value: number;
  colorScheme: "purple" | "green"; 
  shade: keyof (typeof colors)["purple"];
};

const Task = () => {
  const [tasksCreated, setTasksCreated] = useState(10);
  const [tasksCompleted, setTasksCompleted] = useState(5);

  return (
    <TaskAreaWithBorder>
      <TaskArea>
        <TaskInfo
          label="Tarefas criadas"
          value={tasksCreated}
          colorScheme="purple"
          shade="light"
        />
        <TaskInfo
          label="Concluídas"
          value={tasksCompleted}
          colorScheme="green"
          shade="light"
        />
      </TaskArea>
      <Empty/>
    </TaskAreaWithBorder>
  );
};

const TaskInfo = ({ label, value, colorScheme, shade }: TaskInfoProps) => (
  <TaskSubArea>
    <Text>{label}</Text>
    <TaskBadge colorScheme={colorScheme} shade={shade}>
      {value}
    </TaskBadge>
  </TaskSubArea>
);


const TaskAreaWithBorder = styled.View`
  width: 100%;
  justify-content: center;
  align-content: center;
  padding-left: 30px;
  padding-right: 30px;
`;
const TaskArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.colors.gray[300]};
  box-sizing: border-box;
`;

const TaskSubArea = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const TaskBadge = styled.Text<{
  colorScheme: "purple" | "green";
  shade: keyof (typeof colors)["purple"];
}>`
  min-width: 30px;
  padding: 4px 8px;
  border-radius: 50px;
  text-align: center;
  font-weight: 700;
  background-color: ${({ colorScheme, shade }) => colors[colorScheme][shade]};
  color: ${({ colorScheme }) => colors[colorScheme].dark};
`;

export default Task;
