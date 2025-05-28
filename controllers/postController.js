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


//metodo show
const show = (req, res) => {
    res.send("Post con id:" + req.params.id)
}

module.exports = {
    index, show
}