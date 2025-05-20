import express, { json } from "express";
import comandaRoutes from "./routes/holaMundo.routes.js";
import moongose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();

const app = express()
const port = (process.env.PORT || 3000)
app.set("port",port)

app.use(cors())
app.use(express.json());
app.use("/api/comanda",comandaRoutes) //endpoint

app.get("/",(req,res)=> {
    res.send("Hola Mundo")
})

moongose.connect(process.env.MONGO_URI)
.then(()=>console.log("Base de datos conectada"))
.catch(error=>console.error ("No se pudo conectar a la BD",error))

// app.post("/orden",(req,res)=>{
//     const orden = req.body;
//     //Procesar orden
//     res.json({mensaje: "orden recibida con exito",orden});
// });

app.listen(port,() => {
    console.log(`Servidor escuchando en el puerto 3000 ${port}`)
})
