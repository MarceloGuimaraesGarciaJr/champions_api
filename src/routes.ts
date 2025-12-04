import { Router } from "express";
import { getPlayer } from "./controllers/players-controller";
// importa o router, gerenciador de rotas do express
const router = Router()
// o rouyter faz os gets o getPlayer é um controller, ele chama ele 
// então no /api o getPlayer vai responder 
router.get('/players', getPlayer)




//faz export padrão do router 
export default router