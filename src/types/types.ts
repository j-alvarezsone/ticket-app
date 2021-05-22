export interface UiContextProps {
  children: React.ReactNode;
}

export interface UiContextType {
  hide: boolean;
  showMenu: () => void;
  hideMenu: () => void;
}

export interface SocketContextProps {
  children: React.ReactNode;
}

export interface SocketContextType {
  online: boolean;
  socket: SocketIOClient.Socket;
}

export interface NewTicketType {
  id: string;
  number: number;
  agent: string;
  desk: string;
}
