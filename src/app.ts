import express, {Request,Response} from "express"
import router from "./routes";


function createApp(){


const app = express()
//Define com padrão JSON 

app.use(express.json());

// Define chamar o rotas 
app.use("/api",router);

app.use('/resources',router)

    return app
}

export default createApp
