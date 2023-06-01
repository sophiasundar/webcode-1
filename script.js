
const cards = document.querySelector(".row")


//onclick event 
async function poke(){
    const number = document.getElementById("num").value
    async function pokedex(){
        // User can set number of pokedex
        for(let i=1; i<=number; i++){         
            await pokemonapi(i)
        }
    }

    //fetching api
    async function pokemonapi(id){
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const res = await data.json();
            console.log(res); 
            
            //o/p
            document.getElementById("num").value = "";
            const div = document.createElement('div');
            div.className="col-lg-4 col-md-6 col-sm-12"
            div.innerHTML=`
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            <h5><strong>Name:</strong> ${res.name}</h5>
            </div>
            
            <div class="card-body" id="pokemon-info">
                <h6><strong>Number: </strong> ${res.id} </h6>
                <h6><strong>Ability: </strong> ${res.abilities[0].ability.name} </h6>
                <h6><strong>Moves: </strong> ${res.moves[0].move.name} </h6>
                <h6><strong>Weight: </strong> ${res.weight} </h6>
            </div>
            </div>
            `
            cards.appendChild(div)
        } catch (error) {
            alert("Refresh the page")
        }
    }
    
    pokedex();
}
