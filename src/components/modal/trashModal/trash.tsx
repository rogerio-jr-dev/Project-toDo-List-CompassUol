import React, { useState } from "react";
import { Modal, Text } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../button/button";

interface TrashModalProps {
  visible: boolean;
  closeModal: () => void;
  onConfirmDelete: () => Promise<void>;
  task?: { id: string; task: string } | null;
}

const TrashModal: React.FC<TrashModalProps> = ({
  visible,
  closeModal,
  onConfirmDelete,
  task,
}) => {
  const [taskToEdit, setTaskToEdit] = useState("");

  const handleEditTask = (taskTitle: string) => {
    setTaskToEdit(taskTitle);
    console.log(`Editar tarefa: ${taskTitle}`);
  };

  if (!task) {
    return (
      <Modal visible={visible} animationType="slide" transparent={true}>
        <ModalOverlay>
          <ModalContent>
            <Text>Tarefa não encontrada.</Text>
            <ButtonArea>
              <Button width={"48%"} height={"52px"} onPress={closeModal}>
                <Button.Title>Fechar</Button.Title>
              </Button>
            </ButtonArea>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    );
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <ModalOverlay>
        <ModalContent>
          <TaskId>Tarefa: {task.id}</TaskId>
          <Title>{task.task}</Title>
          <ButtonArea>
            <Button
              width={"48%"}
              height={"52px"}
              onPress={() => handleEditTask(task.task)}
            >
              <Button.Title>Editar</Button.Title>
            </Button>
            <Button
              width={"48%"}
              height={"52px"}
              onPress={() => {
                onConfirmDelete();
                closeModal();
              }}
            >
              <Button.Title>Remover</Button.Title>
            </Button>
          </ButtonArea>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(99, 98, 100, 0.8);
`;

const ModalContent = styled.View`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  width: 85%;
`;
const TaskId = styled.Text`
  font-family: ${(props) => props.theme.fonts.inter.semiBold};
  color: ${(props) => props.theme.colors.gray[500]};
`; 
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.inter.regular};
  color: ${(props) => props.theme.colors.gray[600]};
  font-size:12px;
  margin-top:14px;
`; 
const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  gap: 4%;
`;

export default TrashModal;
