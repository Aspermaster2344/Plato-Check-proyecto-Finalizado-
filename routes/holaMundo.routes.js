import { Router } from "express"
import  comanda  from "../controllers/comanda.controllers.js"


const router = Router();



router.get("/",comanda.traerComandas)
router.post("/",comanda.guardarComanda)


export default router;