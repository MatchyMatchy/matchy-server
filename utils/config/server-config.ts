import Express from "express";
import Cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = Express();
export const server = http.createServer(app);

app.use(
  Cors({
    origin: "*",
    credentials: true,
  })
);

export const io = new Server(server);
