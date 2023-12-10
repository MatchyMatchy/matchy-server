import type { Socket as SocketHome } from "socket.io";
export interface join_event {
  room_id: string;
  user_id: string;
}

export type Socket = SocketHome;
