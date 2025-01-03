import React from "react";
import { Modal, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ErrorModalProps {
  visible: boolean;
  onRetry: () => void;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  visible,
  onRetry,
  onClose,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <Overlay>
        <ModalContainer>
          <ErrorText>ERROR</ErrorText>
          <MessageText>Erro ao receber dados da API.</MessageText>
          <RetryButton onPress={onRetry}>
            <RetryButtonText>Tentar novamente</RetryButtonText>
          </RetryButton>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.View`
  width: 80%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

const ErrorText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.inter.semiBold};
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray[500]};
  margin-bottom: 30px;
`;

const MessageText = styled(Text)`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const RetryButton = styled(TouchableOpacity)`
  background-color: #6200ea;
  padding: 10px 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const RetryButtonText = styled(Text)`
  color: white;
  font-size: 16px;
`;

export default ErrorModal;
