export interface GameResponse {
  isSuccess: boolean;
  message: string;
  data: Game[];
}

export interface Game {
  votos: number;
  name: string;
  url: string;
  id: string;
}

export interface GameRespVoto {
  isSuccess: boolean;
  message: string;
}

export interface GameResult {
  name: string;
  value: number;
}
