export interface Game {
    id: number;
    title: string;
    platform: string;
    status: 'Jogando' | 'Em Espera' | 'Zerado';
}