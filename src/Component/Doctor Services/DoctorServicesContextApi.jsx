import { useRef } from "react";
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
export const ElementsContext = createContext({});
export const ElementsContextProvider = ({
  children
}) => {
  // State Variable 
  const data = React.useState();
  return <ElementsContext.Provider value={{}}> 
            {children} 
    </ElementsContext.Provider>;
};