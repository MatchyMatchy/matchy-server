import { io, server } from "../utils/config/server-config";
import type { Socket } from "../utils/types/projectTypes";

import { registar_room_handler, registar_join_handler } from "./Handlers/room";

const onConnection = (socket: Socket) => {
  registar_room_handler(io, socket);
  registar_join_handler(io, socket);
};

io.on("connection", onConnection);

server.listen(process.env.PORT, () => {
  console.log(`server is active on port ${process.env.PORT}`);
});
