export class ListaGenerica<T>{

    private elementos!: Array<T>;
    private capacidad!: number;

    constructor() {
        this.elementos = new Array<T>();
        this.capacidad = 0;
    }

    agregar(elemento: T) {
        this.elementos[this.capacidad++] = elemento;
    }

    obtener(indice: number): T {
        if (indice < 0 || indice >= this.capacidad) {
            throw new Error("Índice fuera de rango");
        }
        return this.elementos[indice];
    }

    dimension(): number {
        return this.capacidad;
    }

}