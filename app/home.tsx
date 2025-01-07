import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import Header from "../src/components/header/header";
import Task from "../src/components/task/task";
import TaskModal from "../src/components/modal/newTask/newTaskModal";
import { Button } from "../src/components/button/button";
import AddTask from "../assets/image/createTask.svg";
import TaskList from "../src/components/task/taskList";
import Empty from "../src/components/task/empty";

import Trash from "../src/components/modal/trashModal/trash";
import Loading from "../src/components/task/loading";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true); 
  };

  const handleCloseModal = () => {
    setModalVisible(false); 
  };

  return (
    <Container>
      <Header />
      <Content>
        <Task />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />

        <TaskModal
          visible={modalVisible}
          onClose={handleCloseModal}
          onAddTask={(task: string) => console.log("Nova tarefa:", task)}
        />
      </Content>
      <FloatingButton>
        <Button
          width={"100%"}
          height={"52"}
          style={{ position: "absolute", bottom: 16, right: 16 }}
          onPress={handleOpenModal}
        >
          <StyledTitle>Criar</StyledTitle>
          <AddTask />
        </Button>
      </FloatingButton>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
`;

const Content = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.gray[100]};
`;

const FloatingButton = styled(View)`
  position: absolute;
  bottom: 60px;
  right: 20px;
  width: 25%;
  align-items: flex-end;
`;

const StyledTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.inter.bold};
  color: ${(props) => props.theme.colors.gray[100]};
  margin-right: 8px;
`;
