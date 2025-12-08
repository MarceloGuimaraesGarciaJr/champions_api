import * as httpStatus from "../utils/http-helper"
import * as playerRepo from '../repositories/playersRepo'
import { PlayerModel } from "../models/players"
import { statisticsModel } from "../models/statistics-model"
 
export const getPlayerData = async () => {

    let data = await playerRepo.findAllPlayers()

    let response = null 

    if(data ){ 
        response = await httpStatus.ok(data) 
    } else { 
        response = await httpStatus.noContent()
    }

    return response
 }

 export const getPlayerDataByIdService = async (id:number) => {

    let data = await playerRepo.findPlayerbyId(id)

    let response = null 

    if(data ){ 
        response = await httpStatus.ok(data) 
    } else { 
        response = await httpStatus.noContent()
    }

    return response
 }

export const createPlayerService = async (player: PlayerModel) => { 
    let response = null
    if (Object.keys(player).length !== 0) {
      await playerRepo.insertPlayer(player)
      response = httpStatus.created()
    }else{
        response = httpStatus.badContent("Player not created")
    
    }

    return response
}


export const deletePlayerService = async (id:number) => { 
    let response = null
    const isDeleted = await playerRepo.deletePlayer(id)
    if (isDeleted === true) {
        response = httpStatus.ok("player deleted")
    }else{
        response = httpStatus.badContent("Player not found")
    }

    return response
}

export const updatePlayerService = async (id:number,statistics:statisticsModel) => { 
    let response = null
    if (Object.keys(statistics).length === 0) {
        response = httpStatus.badContent("Player not updated")
    }else{
        await playerRepo.findAndUpdatePlayer(id,statistics)
        response = httpStatus.ok({message:"Player Updated", statistics:statistics})
    }

    return response
}