import express from "express"; // método de chamada possível graças ao "ts-node-dev"

import "./database";
import { routes } from "./routes";

const app = express();
const PORT = 3333;

app.use (express.json());

app.use(routes);

app.listen(PORT, () => console.log("Server running on port ", PORT));