import React from 'react'
import pokeball from '../images/pokemon-1536849_1280_720.png'


function ListDisplay({ pokeList, getPokemons }) {
  return (
    <div>
        <h2>Scan through the list</h2>
        <p>If you click on the name, you will see the json that describes that pokemon</p>
        <ul>
            {
                (pokeList.results) &&
                pokeList.results.map(pokemon => {
                    return (
                        <li style={{ backgroundColor: 'hsl(350, 0%, 20%', margin: '10px'}}>
                            <img src={pokeball} height='20px' width='20px' alt='pokeball'/>
                            <a href={pokemon.url} target='_blank' style={{ padding: '5px'}}>{pokemon.name}</a>
                        </li>
                    )
                })
            }
        </ul>
         {/* the api  returns a previous and next url, the previos and next are inside the OBJECT that is returned, this is why we can use the pokeList.previous and pokeList.next */}
            {/* // if the previous is not null, then show the button, so if we have prev pokemon than show the button.. in the first page the back bttn wont be displayed */}
        {pokeList.previous ? <button onClick={() => getPokemons(pokeList.previous)}>back</button> : <></>} {' '}
        {pokeList.next ? <button onClick={() => getPokemons(pokeList.next)}>next</button> : <></>}
    </div>
  )
}

export default ListDisplay