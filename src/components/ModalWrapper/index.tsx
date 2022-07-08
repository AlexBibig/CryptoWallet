import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

interface ModalWrapperProps {
  children?: ReactNode;
  isVisible: boolean;
  onClose?: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children = null,
  isVisible = false,
  onClose = () => {},
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationOut="fadeOutDown"
      animationIn="fadeInUp"
      onBackdropPress={onClose}
      onModalHide={onClose}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      swipeThreshold={100}
    >
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModalWrapper;
