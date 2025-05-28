const express = require("express");
const router = express.Router();

//importo il controller
const postController = require("../controllers/postController")

//rotte CRUD per i post
router.get('/', postController.index)

router.get('/:id', postController.show)

router.delete('/:id', postController.destroy)

module.exports = router;