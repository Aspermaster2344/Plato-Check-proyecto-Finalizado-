const express = require("express");
const holaRoutes = require("./routes/holaMundo.routes");
require("dotenv").config();
const moongoose = require("mongoose");

const app = express()
const port = (process.env.PORT || 3000)
app.set("port",port)

app.use(express.json())
app.use("/api/hola",holaRoutes) //endpoint

app.get("/",(req,res)=> {
    res.send("Hola Mundo")
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Base de datos conectada"))
.catch(error=>console.error ("No se pudo conectar a la BD",error))


app.listen(port,() => {
    console.log(`Escuchando en el puerto ${port}`)
})

