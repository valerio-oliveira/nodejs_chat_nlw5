import express from "express"; // Call method made possible thanks to "ts-node-dev"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname,"..","public")));    // uses views path
app.set("views", path.join(__dirname,"..", "public"));          // set views path

// changes the default views extension from ejs to html
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// renderizing client view
app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

const http = createServer(app); // Creating http protool
const io = new Server(http);    // Creating websocket protocol

io.on("connection", (socket) => {
    console.log("Socket connected ", socket.id);
});

app.use (express.json());

app.use(routes);

export { http, io };