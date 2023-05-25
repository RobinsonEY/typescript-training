import { ClaseA, ClaseB } from "./05_conditional_types";

type A = Awaited<ReturnType<typeof getAllClassA>>;
type B = Awaited<Promise<boolean>>
type AllClasses = Awaited<ReturnType<typeof getAllClass>>


async function getAllClass(){
    const responsGetAllClassA = await getAllClassA();
    const responsGetAllClassB = await getAllClassB();
    return [...responsGetAllClassA,...responsGetAllClassB]
}

async function getAllClassA(){
    let listClaseA:Array<ClaseA> = new Array();
    for (let index = 0; index < 10; index++) {
        const element:ClaseA = new ClaseA({contenido:index.toString(),nombre:index.toString()})
        listClaseA.push(element);
    }
    return listClaseA;
}

async function getAllClassB(){
    let listClaseA:Array<ClaseB> = new Array();
    for (let index = 0; index < 10; index++) {
        const element:ClaseB = new ClaseB({contenido:index,nombre:index.toString()})
        listClaseA.push(element);
    }
    return listClaseA;
}
