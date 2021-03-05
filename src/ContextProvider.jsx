import React from "react";

const ContextProvider = React.createContext(null);

export const Provider = (props) => {
  return (
    <ContextProvider.Provider value={props.store}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
