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


export interface infoFases {
    id: string;
    tit: string;
    txt?: string;
    img?: string;
    titPubli?: string;
    txtPubli?: string;
    imgPubli?: string;
    urlPubli?: string;
    activo?: boolean;

}

