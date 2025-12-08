import { Router } from "express";
import * as playerControler from "./controllers/players-controller";
import * as clubController from "./controllers/clubs-controller";
// importa o router, gerenciador de rotas do express
const router = Router()
// o rouyter faz os gets o getPlayer é um controller, ele chama ele 
// então no /api o getPlayer vai responder 

router.get('/players', playerControler.getPlayer)
router.post('/players/', playerControler.postPlayer)
router.delete('/players/:id', playerControler.deletePlayer)
router.patch('/players/:id', playerControler.patchPlayer)
router.get('/players/:id', playerControler.getPlayerData)

router.get('/clubs', clubController.getClubs)




//faz export padrão do router 
export default router