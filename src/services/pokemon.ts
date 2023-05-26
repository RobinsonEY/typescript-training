
function getAllPokemons() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((res:any) => { 
            console.log("res",res)
            return res.json() 
        })
        .catch(err => { console.log(err) })
}

export  { getAllPokemons }