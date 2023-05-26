import { MyClassDecorator } from "./02_decorators";
import { getAllPokemons } from "./services/pokemon";
import { fillNetworkConfigs } from "./09_records";



function initData():void{
   console.log("Execute")
   const response = async () => {await getAllPokemons().then((aa)=>console.log(aa)) }
   console.log("response",response) 
}

initData()
fillNetworkConfigs()
