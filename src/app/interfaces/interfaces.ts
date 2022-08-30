export interface Jugador {
    nombre?: string;
    puntos: number;
    intentos: number;
    nivel: number;
}


export interface Carta {
    id: number;
    nombre: string;
    img?: string;
    clickado: boolean;
    ref?: number;
}

