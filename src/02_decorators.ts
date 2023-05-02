// "experimentalDecorators": true

/* #region Class Decorators */
function addParameters(name: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            name = name;
        };
    };
}
/* #endregion */

/* #region Function Decorators */
function measureTime(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.time(`Execution time: ${propertyName}`);
      const result = originalMethod.apply(this, args);
      console.timeEnd(`Execution time: ${propertyName}`);
      return result;
    };
    return descriptor;
  }
/* #endregion */

@addParameters('miNombre')
export class MyClassDecorator {

    [key:string] : any;
    
    constructor(public tipo: string) {
    }

    @measureTime
    methodDecorators() {
      for (let i = 0; i < 10000; i++) {
        
      }
    }
}

