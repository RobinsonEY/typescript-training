import { MyClassDecorator } from "./02_decorators";
import { getAllPokemons } from "./services/pokemon";

//02_Decorators
let myClassDecorator:MyClassDecorator = new MyClassDecorator('tipo');

console.log("myClassDecorator",myClassDecorator.methodDecorators())

function initData():void{
   getAllPokemons().then((aa)=>console.log(aa))
    
}

initData()