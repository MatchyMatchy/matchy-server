import Express from "express";
import Cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = Express();
const server = http.createServer(app);
const io = new Server(server);
app.use(
  Cors({
    origin: "*",
    credentials: true,
  })
);

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(process.env.PORT, () => {
  console.log(`server is active on port ${process.env.PORT}`);
});
