import React, { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import AddTask from "../../../../assets/image/createTask.svg";
import CloseModal from "../../../../assets/image/close.svg";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  onAddTask: (task: string) => void;
};

const TaskModal: React.FC<ModalProps> = ({ visible, onClose, onAddTask }) => {
  const [task, setTask] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [inputHeight, setInputHeight] = useState(61);

  const handleInputChange = (text: string) => {
    setTask(text);
    setIsButtonDisabled(text.trim() === "");
  };

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <ModalOverlay>
        <ModalContainer>
          <Title>Nova Tarefa</Title>
          <InputContainer>
            <TaskInput
              placeholder="Adicione uma nova tarefa"
              value={task}
              onChangeText={handleInputChange}
              multiline
              maxLength={200}
              onContentSizeChange={(event) => {
                const height = event.nativeEvent.contentSize.height;
                setInputHeight(height);
              }}
              style={{ height: Math.max(61, inputHeight) }}
            />
            <AddButton
              style={{
                backgroundColor: isButtonDisabled ? "#6B6571" : "#6F3CC3",
              }}
              onPress={handleAddTask}
              disabled={isButtonDisabled}
            >
              <ButtonText>
                <AddTask />
              </ButtonText>
            </AddButton>
          </InputContainer>

          <CloseButton onPress={onClose}>
            <CloseModal />
          </CloseButton>
        </ModalContainer>
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

const ModalContainer = styled.View`
  width: 90%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.inter.semiBold};
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray[500]};
`;

const InputContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 17px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskInput = styled.TextInput`
  flex: 1;
  font-family: ${(props) => props.theme.fonts.inter.regular};
  font-size: 16px;
  text-align-vertical: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray[300]};
  height: 61px;
  border-radius: 8px;
  padding: 10px;
  margin-right: 10px;
`;

const AddButton = styled.TouchableOpacity`
  width: 61px;
  height: 61px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 15px;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export default TaskModal;
