import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import TaskModal from "../newTask/newTaskModal"; // Importe o modal de tarefa

const TaskList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState("");

  const handleEditTask = (task: string) => {
    setTaskToEdit(task); // Armazenar a tarefa que será editada
    setModalVisible(true); // Abrir o modal
  };

  const handleAddTask = (task: string) => {
    console.log("Tarefa adicionada: ", task);
    // Aqui você pode adicionar a lógica para adicionar a tarefa
    setModalVisible(false); // Fechar o modal após adicionar a tarefa
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Fechar o modal
  };

  return (
    <Container>
      <TaskListContainer>
        <TaskButton onPress={() => handleEditTask("Tarefa Exemplo")}>
          <ButtonText>Editar Tarefa</ButtonText>
        </TaskButton>
      </TaskListContainer>

      <TaskModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onAddTask={handleAddTask}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TaskListContainer = styled.View`
  margin-bottom: 20px;
`;

const TaskButton = styled.TouchableOpacity`
  background-color: #6f3cc3;
  padding: 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export default TaskList;
