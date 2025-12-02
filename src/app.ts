import express, {Request,Response} from "express"
import { getPlayer } from "./controllers/players-controller";
import router from "./routes";


function createApp(){


const app = express()
//Define com padrão JSON 

app.use(express.json());

// Define chamar o rotas 
app.use("/api",router);

    return app
}

export default createApp
