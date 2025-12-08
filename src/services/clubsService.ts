import * as httpStatus from "../utils/http-helper"


export const getClubService = async () => {
    let data = 

    if(data ){ 
        response = await httpStatus.ok(data) 
    } else { 
        response = await httpStatus.noContent()
    }

    return response
 }