
//metodo index
const index = (req, res) => {
    res.send("Elenco post")
}


//metodo show
const show = (req, res) => {
    res.send("Post con id:" + req.params.id)
}

module.exports = {
    index, show
}