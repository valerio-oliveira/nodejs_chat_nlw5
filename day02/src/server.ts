import express, { response } from "express"; // método de chamada possível graças ao "ts-node-dev"

const app = express();
const PORT = 3333;

// Rotas
/***
 * GET    : Busca
 * POST   : Cria
 * PUT    : Altera
 * DELETE : Exclui
 * PATCH  : Alterações específicas
 ***/

app.get("/", (Request, response) => {
    return response.json({
        message: "Olá NLS 05!",
    })
})

app.post("/", (Request, response) => {
    return response.json({
        message: "Usuário gravado com sucesso!",
    })
})

// Inicializa aplicação
app.listen(PORT, () => console.log("Server running on port ", PORT));