import { MyClassDecorator } from "./02_decorators";
import { getAllPokemons } from "./services/pokemon";
import { fillNetworkConfigs } from "./09_records";



function initData():void{
   getAllPokemons().then((aa)=>console.log(aa))
    
}

initData()
fillNetworkConfigs()
