import React, { useState, createContext, useContext } from 'react'
import { Snackbar, Portal } from 'react-native-paper';
import { View } from 'react-native';
const ToastContext = createContext({ showToast: (message: string) => {} });

export function ToastProvider ({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setVisible(true);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      { children}
      <Portal>
        <View style={styles.viewContainer}>
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            duration={2000}
            // action={{
            //   label: '关闭',
            //   onPress: () => setVisible(false),
            // }}
          >
          {message}
          </Snackbar>
        </View>
      </Portal>
    </ToastContext.Provider>
  )
};

export function useToast() {
  return useContext(ToastContext);
};

const styles = {
  viewContainer: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    width: '60%',
    zIndex: 9999,
  },
};