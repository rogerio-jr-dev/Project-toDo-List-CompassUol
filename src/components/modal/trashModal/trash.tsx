import React from "react";
import { View, Text, Modal } from "react-native";
import { Button } from "../../button/button";
import styled from "styled-components/native";


interface TrashModalProps {
  visible: boolean;
  closeModal: () => void;
}

const TrashModal: React.FC<TrashModalProps> = ({ visible, closeModal }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <ModalOverlay>
        <ModalContent>
          <Text>Tarefa: id</Text>
          <Text>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </Text>
          <ButtonArea>
            <Button width={"48%"} height={"52px"} onPress={closeModal}>
              <Button.Title>Editar</Button.Title>
            </Button>
            <Button width={"48%"} height={"52px"} onPress={closeModal}>
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

const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  gap: 4%;
`;

export default TrashModal;
