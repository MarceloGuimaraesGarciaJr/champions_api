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