const express = require("express")
const router = express.Router()

const holaController = require("../controllers/holaMundo.controllers")
router.get("/",(req,res) => {
    res.send("estamos en la ruta hola")
})

router.get("/",holaController.holaMundo)
router.get("/:id",)
router.post("/")
router.patch("/")


module.exports = router