import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("OK");
});

app.listen(4001);

console.log("Rodando na porta 4001...");