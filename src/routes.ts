import { Router } from "express";
import * as playerControler from "./controllers/players-controller";
// importa o router, gerenciador de rotas do express
const router = Router()
// o rouyter faz os gets o getPlayer é um controller, ele chama ele 
// então no /api o getPlayer vai responder 

router.get('/players', playerControler.getPlayer)
router.post('/players/', playerControler.insertPlayerData)

router.get('/players/:id', playerControler.getPlayerData)





//faz export padrão do router 
export default router