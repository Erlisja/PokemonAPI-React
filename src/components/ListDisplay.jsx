import React from 'react'
import pokeball from '../images/pokemon-1536849_1280_720.png'
function ListDisplay(
    {pokeList}
) {
  return (
    <div>
        <h2>Scan through the list </h2>
        <p>If you click on the name , you will see the json that describes that pokemon</p>
        <ul>
            {
                //check if the pokemonlist exists
                (pokeList.results) &&
                (pokeList.results.map(pokemon =>{
                    return (
                        <li style={{backgroundColor: 'hsl(350,0%,20%', margin:'10px'}}>
                            <img src={pokeball}  height='20px' width='20px' alt='pokeball' />
                            <a href={pokemon.url} target='_blank' style={{padding:'5px'}}>{pokemon.name}</a>
                        </li>
                    )
                }))
            }
        </ul>
    </div>
  )
}

export default ListDisplay