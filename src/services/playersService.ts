import * as httpStatus from "../utils/http-helper"
import * as playerRepo from '../repositories/playersRepo'
 
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

 export const insertPlayerDataService = async (body:any) => { 
        let repo = playerRepo.database
        
        
 }