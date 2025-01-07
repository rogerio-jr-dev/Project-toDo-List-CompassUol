import React, { useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import Trash from "../../../assets/image/trash.svg";
import Checked from "../../../assets/image/checked.svg";
import NotChecked from "../../../assets/image/notCheked.svg";
import api from "../../services/axiosInstance";
import TrashModal from "../modal/trashModal/trash"; 

interface TaskListProps {
  task: { id: string; task: string; completed: boolean | string};
  onTaskUpdate: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ task, onTaskUpdate }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed); // Inicializa com o valor correto da tarefa
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<{
    id: string;
    task: string;
  } | null>(null);

  const toggleComplete = async () => {
    try {
      // Envia a requisição PATCH para atualizar o estado da tarefa na API
      const response = await api.patch(`/tarefas/${task.id}`, {
        completed: !isCompleted,
      });

      if (response.status === 200) {
        // Verifica se a resposta foi bem sucedida
        setIsCompleted((prev) => !prev); // Alterna o estado de completed
        onTaskUpdate(); // Atualiza a lista de tarefas
      } else {
        alert("Erro ao atualizar tarefa.");
      }
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      alert("Erro ao atualizar tarefa.");
    }
  };

  const deleteTask = async () => {
    try {
      if (taskToDelete) {
      
        const response = await api.delete(`/tarefas/${taskToDelete.id}`);

        if (response.status === 200) {
          onTaskUpdate(); 
          setTaskToDelete(null);
        } else {
          alert("Erro ao deletar tarefa.");
        }
      }
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      alert("Erro ao deletar tarefa.");
    }
  };

  const openModal = (task: { id: string; task: string }) => {
    setTaskToDelete(task);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <Container>
      <StyledView isChecked={isCompleted}>
        <Pressable onPress={toggleComplete}>
          {isCompleted ? <Checked /> : <NotChecked />}{" "}
        </Pressable>
        <StyledText
          style={{
            flexWrap: "wrap",
            width: "83%",
            textDecorationLine: isCompleted ? "line-through" : "none",  
          }}
        >
          {task.task}
        </StyledText>
        <Pressable onPress={() => openModal(task)}>
          <Trash />
        </Pressable>
      </StyledView>
      {taskToDelete && (
        <TrashModal
          visible={modalVisible}
          closeModal={closeModal}
          onConfirmDelete={deleteTask}
          task={taskToDelete}
        />
      )}
    </Container>
  );
};


const Container = styled.View`
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 12px;
`;

const StyledView = styled.View<{ isChecked: boolean | string}>`
  flex-direction: row;
  padding: 12px;
  gap: 8px;
  background-color: ${(props) =>
    props.isChecked
      ? props.theme.colors.gray[100]
      : props.theme.colors.gray[300]};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.gray[400]};
`;

const StyledText = styled.Text`
  font-family: ${(props) => props.theme.fonts.inter.regular};
  color: ${(props) => props.theme.colors.gray[600]};
`;

export default TaskList;
