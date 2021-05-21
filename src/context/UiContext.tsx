import { createContext, useState } from 'react';
import { UiContextProps, UiContextType } from '../types/types';

export const UiContext = createContext({} as UiContextType);

export const UiProvider = ({ children }: UiContextProps) => {
  const [hide, setHide] = useState(false);

  const showMenu = () => {
    setHide(false);
  };

  const hideMenu = () => {
    setHide(true);
  };

  return <UiContext.Provider value={{ showMenu, hideMenu, hide }}>{children}</UiContext.Provider>;
};
