export class Weather{
    location: any;
    current: any;    
    request: any;
}

export class Locatizacao{
    nome: string;
    pais: string;
    regiao: string;
    latitude: number;
    longitude: number;
    id_fuso_horario: string;
    horario_local: string;
    hr_compensacao_utc: number;
}

export class Pedido{
    tipo: string;
    query: string;
    idioma: string;
    unidade: string;
}

export class Hora_Atual{
    hora_observacao: string;
    temperatura: number;
    cod_clima: number;
    icones_clima: any[];
    desc_clima: any[];
    velocidade_vento: number;
    dir_vento_graus: number;
    direcao_vento: string;
    pressao: number;
    precipitacao: number;
    cobertura_nuvens: number;
    sensacao: number;
    umidade: number;
    indice_uv: number;
    visibilidade: number;
    dia: string;
}
