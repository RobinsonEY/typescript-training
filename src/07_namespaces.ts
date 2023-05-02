export namespace NameSpace1 {

    export class ClassA {
        propertyA: string;

        constructor(propertyA: string) {
            this.propertyA = propertyA;
        }
    }

}

export namespace NameSpace2 {

    export class ClassA {
        propertyB: string;
        propertyC: string;

        constructor(propertyB: string, propertyC: string) {
            this.propertyB = propertyB;
            this.propertyC = propertyC;
        }
    }

}