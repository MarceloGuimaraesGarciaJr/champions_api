import {Request, Response} from 'express'
import { getClubService } from '../services/clubsService'

export const getClubs = async (req:Request, res:Response) =>{
    const response = await getClubService()
}