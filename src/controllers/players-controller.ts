import {Request, Response} from 'express'
import * as playerData from '../services/playersService';

export const getPlayer = async (req:Request,res:Response) => {
    
    const httpResponse = await playerData.getPlayerData() 

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const getPlayerData = async (req:Request, res:Response) => {

    const id = parseInt(req.params.id)

    const httpResponse  = await playerData.getPlayerDataByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const insertPlayerData = async (req:Request, res:Response) => { 

    const data = req.body

    res.status()

    
}
