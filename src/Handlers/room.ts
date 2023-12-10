import type { Socket, join_event } from "../../utils/types/projectTypes";
import { generate_room_id } from "../../utils/helpers/generate-room-id";

export const registar_room_handler = (io: any, socket: Socket) => {
  socket.on("create-room", async () => {
    const room_id = generate_room_id();

    await socket.join(room_id);
    io.to(room_id).emit(room_id);
  });
};

export const registar_join_handler = (io: any, socket: Socket) => {
  socket.on("join-room", async (join_event: join_event) => {
    await socket.join(join_event.room_id);
    io.to(join_event.room_id).emit(`${join_event.user_id} has joined the room`);
  });
};
