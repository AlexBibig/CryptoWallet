import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ModalWrapper } from '~components';
import useAppContext from '~context';

interface TradeModalProps {}

const TradeModal: React.FC<TradeModalProps> = () => {
  const {
    state: {
      modals: { isTradeModalVisible },
    },
    actions: { setTradeModalVisibility },
  } = useAppContext();

  return (
    <ModalWrapper
      isVisible={isTradeModalVisible}
      onClose={() => setTradeModalVisibility(false)}
    >
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <Button
            text="Transfer"
            icon="send"
            onPress={() => {}}
            containerStyle={styles.button}
          />

          <Button text="Withdraw" icon="chevron-down" onPress={() => {}} />
        </View>
      </View>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    marginBottom: 100,
  },
  button: {
    marginBottom: 20,
  },
});

export default TradeModal;
