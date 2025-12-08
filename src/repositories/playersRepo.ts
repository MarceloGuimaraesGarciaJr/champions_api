import { stat } from "fs"
import { PlayerModel } from "../models/players"
import { statisticsModel } from "../models/statistics-model"

export const database:PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 80,
      "Shooting": 92,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 34,
      "Physical": 65
    }
  },
  {
    "id": 2,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 92,
      "Pace": 97,
      "Shooting": 89,
      "Passing": 80,
      "Dribbling": 92,
      "Defending": 36,
      "Physical": 78
    }
  },
  {
    "id": 3,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 89,
      "Shooting": 94,
      "Passing": 65,
      "Dribbling": 78,
      "Defending": 45,
      "Physical": 88
    }
  },
  {
    "id": 4,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "Midfielder",
    "statistics": {
      "Overall": 91,
      "Pace": 74,
      "Shooting": 86,
      "Passing": 93,
      "Dribbling": 88,
      "Defending": 64,
      "Physical": 78
    }
  },
  {
    "id": 5,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nationality": "England",
    "position": "Midfielder",
    "statistics": {
      "Overall": 90,
      "Pace": 82,
      "Shooting": 84,
      "Passing": 85,
      "Dribbling": 88,
      "Defending": 76,
      "Physical": 84
    }
  },
  {
    "id": 6,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "nationality": "England",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 73,
      "Shooting": 94,
      "Passing": 84,
      "Dribbling": 83,
      "Defending": 47,
      "Physical": 82
    }
  },
  {
    "id": 7,
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "nationality": "Egypt",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 90,
      "Shooting": 89,
      "Passing": 82,
      "Dribbling": 90,
      "Defending": 45,
      "Physical": 75
    }
  },
  {
    "id": 8,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 89,
      "Pace": 95,
      "Shooting": 82,
      "Passing": 79,
      "Dribbling": 92,
      "Defending": 29,
      "Physical": 70
    }
  },
  {
    "id": 9,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Netherlands",
    "position": "Defender",
    "statistics": {
      "Overall": 89,
      "Pace": 72,
      "Shooting": 60,
      "Passing": 71,
      "Dribbling": 72,
      "Defending": 90,
      "Physical": 86
    }
  },
  {
    "id": 10,
    "name": "Jan Oblak",
    "club": "Atlético Madrid",
    "nationality": "Slovenia",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 89,
      "Pace": 0,
      "Shooting": 0,
      "Passing": 0,
      "Dribbling": 0,
      "Defending": 0,
      "Physical": 0
    }
  }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> =>{ 
    return database
}

export const findPlayerbyId = async (id:number): Promise<PlayerModel | undefined> => {
    const playerData = database.find( player => player.id === id)

    return playerData
}


export const insertPlayer = async (player:PlayerModel) => {
      database.push(player)
}

export const deletePlayer = async (id:number) => {
      const index = database.findIndex(p => p.id === id)
      if(index !== -1){
       database.splice(index,1)
       return true
      }

      return false
}

export const findAndUpdatePlayer = async (id: number, statistics: statisticsModel) => {
  const playerIndex = database.findIndex(p => p.id === id);

  // Se não encontrou o jogador
  if (playerIndex === -1) {
    return {
      message: "Player not found, please check the ID",
      statistics
    };
  }

  // Encontrou → atualiza
  database[playerIndex].statistics = statistics;

  return database[playerIndex];
};