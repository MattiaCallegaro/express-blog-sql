
//importo express
const express = require('express');
//uso express
const app = express();
//gli assegno al server la porta 3000
const port = 3000;
//mi recupero il router creato per le rotte
const postRouter = require("./routers/post")

//middleware è una funzione che ha accesso alla richiesta e risposta del mio server
//middleware per gli asset statici (html, css, js, immagini ecc... dentro la cartella public)
app.use(express.static("public"));
//middleware per il parsing del body delle richieste
app.use(express.json());

//mi creo la rotta base (entry point) del mio server
app.get("/", (req, res) => {
    console.log("Server dei miei post")
    res.send("Benvenuto nel mio blog")
})

app.use("/posts", postRouter)

//dico al mio server di rimanere in ascolto di eventuali chiamate
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
})