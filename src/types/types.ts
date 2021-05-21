export interface UiContextProps {
  children: React.ReactNode;
}

export interface UiContextType {
  hide: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}
