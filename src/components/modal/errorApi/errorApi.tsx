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
          <RetryContainer>
            <RetryButton onPress={onRetry}>
              <RetryButtonText>Tentar novamente</RetryButtonText>
            </RetryButton>
          </RetryContainer>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(99, 98, 100, 0.8);
`;

const ModalContainer = styled.View`
  width: 80%;
  height:193px;
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
  font-family: ${(props) => props.theme.fonts.inter.regular};
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray[500]};
  margin-bottom: 20px;
  text-align: center;
`;

const RetryContainer = styled.View`
  position: absolute;
  bottom: 10px;
  right: 20px;
  padding: 10px;
`;

const RetryButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-end;
`;

const RetryButtonText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.inter.semiBold};
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: 14px;
`;

export default ErrorModal;
