export interface Game {
  votos: number;
  name: string;
  url: string;
  id: string;
}

export interface GameResponse {
  isSuccess: boolean;
  message: string;
}
