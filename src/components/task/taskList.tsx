import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import Trash from "../../../assets/image/trash.svg";
import Checked from "../../../assets/image/checked.svg";
import NotChecked from "../../../assets/image/notCheked.svg";
import TrashModal from "../../components/modal/trashModal/trash"; 

const TaskList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isStruckThrough, setIsStruckThrough] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); 

  const handlePress = () => {
    setIsChecked(!isChecked);
    setIsStruckThrough(!isStruckThrough);
  };

  const handleTrashPress = () => {
    setModalVisible(true); 
  };

  const closeModal = () => {
    setModalVisible(false); 
  };

  return (
    <Container>
      <StyledView isChecked={isChecked}>
        <Pressable onPress={handlePress}>
          {isChecked ? <Checked /> : <NotChecked />}
        </Pressable>
        <StyledText
          style={{
            flexWrap: "wrap",
            width: "83%",
            textDecorationLine: isStruckThrough ? "line-through" : "none",
          }}
        >
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </StyledText>
        <Pressable onPress={handleTrashPress}>
          <Trash />
        </Pressable>
      </StyledView>
      <TrashModal visible={modalVisible} closeModal={closeModal} />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 12px;
`;

const StyledView = styled.View<{ isChecked?: boolean }>`
  flex-direction: row;
  padding: 12px;
  gap: 8px;
  background-color: ${(props) =>
    props.isChecked
      ? props.theme.colors.gray[100]
      : props.theme.colors.gray[400]};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.gray[400]};
`;


const StyledText = styled.Text`
  font-family: ${(props) => props.theme.fonts.inter.regular};
  color: ${(props) => props.theme.colors.gray[600]};
`;

export default TaskList;
