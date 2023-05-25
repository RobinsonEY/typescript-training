export class ClaseA{
    nombre!:string;
    contenido!:string
    constructor(params: Partial<ClaseA> = {}){
        Object.assign(this, params);
    }
}

export class ClaseB{
    nombre?:string;
    contenido!:number;
    constructor(params: Partial<ClaseB> = {}){
        Object.assign(this, params);
    }
}

type MessageOf<T extends { contenido: unknown }> = T["contenido"];
export type EmailMessageContentsA = MessageOf<ClaseA>;
export type EmailMessageContentsB = MessageOf<ClaseB>;
