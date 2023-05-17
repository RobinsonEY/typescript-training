import { MyClassDecorator } from "./02_decorators";
import { fillNetworkConfigs } from "./09_records";

//02_Decorators
let myClassDecorator:MyClassDecorator = new MyClassDecorator('tipo');

console.log("myClassDecorator",myClassDecorator.methodDecorators())

fillNetworkConfigs()