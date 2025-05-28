//recupero la variabile di connesione al database
const connection = require('../data/db')

//metodo index
const index = (req, res) => {
    //preparo la query per recuperare i post dal database
    const sql = "SELECT * FROM  posts";

    //eseguo la query con il metodo connection
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" })
        }
        console.log(results)
        res.json(results)
    })
    // res.send("Elenco post")
}


//metodo show connesso al database
const show = (req, res) => {
    //recupero l'id
    const id = req.params.id
    //creo la query
    const sql = "SELECT * FROM posts WHERE id = ?";
    //eseguo la query
    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" + err })
        }
        //verifico se il post esiste
        if (results.length === 0) return res.status(404).json({ error: "Post non found" })
        res.json(results)
    })
}
//metodo destroy connesso al database
const destroy = (req, res) => {
    //recupero l'id
    const id = req.params.id;
    //creo la query
    connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
        //un solo parametro perchè destroy devo restituire solo lo stato
        if (err) return res.status(500).json({ error: "Database query failed" + err })

        res.sendStatus(204)

    })
}



module.exports = {
    index, show, destroy
}