import {Request, Response} from 'express'
import * as playerData from '../services/playersService';
import { badContent } from '../utils/http-helper';
import { statisticsModel } from '../models/statistics-model';

export const getPlayer = async (req:Request,res:Response) => {
    
    const httpResponse = await playerData.getPlayerData() 

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const getPlayerData = async (req:Request, res:Response) => {

    const id = parseInt(req.params.id)

    const httpResponse  = await playerData.getPlayerDataByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const postPlayer = async (req:Request, res:Response) => { 

    const data = req.body
    const response = await playerData.createPlayerService(data)

    if(response){
     return res.status(response.statusCode).json(response.body)
    }else{
        let response = await badContent()
        res.status(response.statusCode).json(response.body)
    }

    
}


export const deletePlayer = async (req:Request, res:Response) => { 

    const id = parseInt(req.params.id)
    let response = await playerData.deletePlayerService(id)

    if(id){
     return res.status(response.statusCode).json(response.body)
    }else{
        let response = await badContent()
        res.status(response.statusCode).json(response.body)
    }

    
}

export const patchPlayer = async (req:Request, res:Response) => {

    const id = parseInt(req.params.id)
    const bodyValue: statisticsModel = req.body
    let response = await playerData.updatePlayerService(id,bodyValue)
    return res.status(response.statusCode).json(response.body)
}
