import express from "express";
import bodyParser from "body-parser";

const app = express();

app.listen(3000, ()=>{
    console.log("servidor iniciado");
});

app.use(bodyParser.json());

app.get('/urls', async (req,res,next)=>{
    const resposta = {
        cod_url: "LaTa12",
        base_url: "www.youtube.com",
        datetime: "2026-02-1420:05:20"
    }
    res.status(200).send(resposta);
});

app.post('/urls', async (req, res, next)=>{
    const resposta = {
        status: "sucesso",
        mensagem: "URL criada com sucesso"
    }
    res.status(201).send(resposta);
});

app.use((req,res,next)=>{
    res.status(404).send("Not found")
});
