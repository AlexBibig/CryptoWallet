import React, { createContext, ReactNode, useContext, useReducer } from 'react';

type ContextState = {
  modals: {
    isTradeModalVisible: boolean;
  };
};

const inititalState = {
  modals: {
    isTradeModalVisible: false,
  },
};

const reducer = (
  state: ContextState = inititalState,
  action: {
    type: string;
    payload?: any;
  },
) => {
  switch (action.type) {
    case 'SET_TRADE_MODAL_VISIBILITY':
      return {
        ...state,
        modals: {
          ...state.modals,
          isTradeModalVisible: action.payload,
        },
      };
    default:
      return state;
  }
};

const Context = createContext<{
  state: ContextState;
  actions: {
    [key: string]: (payload: any) => void;
  };
}>({
  state: inititalState,
  actions: {},
});

export const ContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

  const actions = {
    setTradeModalVisibility: (payload: boolean) => {
      dispatch({
        type: 'SET_TRADE_MODAL_VISIBILITY',
        payload,
      });
    },
  };

  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  );
};

const useAppContext = () => useContext(Context);

export default useAppContext;
