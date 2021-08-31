import data from './data/pokemon/pokemon.js';

const firstButton = () => {
    document.querySelector(".first-page").style.display = "none";
    document.querySelector(".second-page").style.display = "block";
}

const kantoRegion = () => {
    const card = () => {
        document.querySelectorAll(".poke-image").forEach((element) =>{
            element.addEventListener("click", (event) =>{
                const pokeCard = event.currentTarget.id; 
                const pokeInfo = data.pokemon.filter(info => info.name == pokeCard);
                const kCard = document.querySelector(".page-container");
                pokeInfo.map((data) => {
                    const {num, img, name, about, type} = data;
                    const {height, weight} = data.size;
                    const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
                    kCard.innerHTML += `
                    <div class="card-container">
                    <div class="img-container">
                        <h1 class="poke-number">N°${num}</h1>
                        <div class="circle" id="circle">
                            <img class="card-image" src=${img} alt="">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="poke-description">
                            <h1 class="card-name">${pokemonName}</h1>
                            <p class="about">${about}</p>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    <h3 class="pokemon-height">Height</h3>
                                </td>
                                <td>
                                    <h3 class="pokemon-weight">Weight</h3>
                                </td>
                                <td>
                                    <h3 class="pokemon-type">Type</h3>
                                </td>
                            </tr>
                            <tr>
                                <td class="height">${height}</td>
                                <td class="weight">${weight}</td>
                                <td class="type-icon">${type}</td>
                            
                            </tr>
                        </table>
                    </div>
                </div>
                    `
            
                })
                document.querySelector(".kanto-location").style.display = "none";
                document.querySelector(".information-card").style.display = "block";
            })
        
        })
    }

    const pokemon = data.pokemon.filter(data => data.generation.name == "kanto");
    const containerK = document.querySelector(".kanto-results");
    pokemon.map((data) => {
        containerK.innerHTML += `
        <li class="poke-image" id=${data.name}>
            <figure>
                <img class="pokemon-image" src=${data.img}>
                <div class="pokemon-name">${data.name}</div>
             </figure>
        </li>
        `
    })
    card();

    document.querySelectorAll(".sort").forEach( element => {
        element.addEventListener("click", event => {
            const pokeSort = event.currentTarget.value;
            let filterA;
            if (pokeSort == 1) { 
                filterA = pokemon.map(data => data).sort((a, b) => {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
            } else {
                filterA = pokemon.map(data => data).sort((a, b) => {
                    if (a.name > b.name)
                        return -1;
                    if (a.name < b.name)
                        return 1;
                    return 0;
                });
            }
            const containerType = document.querySelector(".kanto-results");
            containerType.innerHTML = '';
            filterA.map(data => {
                containerType.innerHTML += `
                <li class="poke-image" id=${data.name}>
                    <figure>
                        <img class="pokemon-image" src=${data.img}>
                        <div class="pokemon-name">${data.name}</div>
                     </figure>
                </li>
                `
            })
            card();
        })
    })

    const container = document.querySelector('.orderTypes');
    const types = ["bug", "dragon", "fire", "ghost", "ground", "normal", "electric", "fighting", "flying", "grass", "ice", "poison", "rock", "water"];
    types.map((data) => {
        container.innerHTML += `
            <img id=${data} class="fil-button" src="images/${data}.png"></button>
        `
    })

    document.querySelectorAll(".fil-button").forEach( element => {
        element.addEventListener("click", event => {
            const type = event.currentTarget.id;
            const pokemon = data.pokemon.filter(data => data.generation.name == "kanto");
            const poketype = pokemon.filter(pokeData => pokeData.type.includes(type));
            const containerType = document.querySelector(".kanto-results");
            containerType.innerHTML = '';
            poketype.map(data => {
                containerType.innerHTML += `
                <li class="poke-image" id=${data.name}>
                    <figure>
                        <img class="pokemon-image" src=${data.img}>
                        <div class="pokemon-name">${data.name}</div>
                     </figure>
                </li>
                `
            })
            card();
        })
    })

    document.querySelector(".second-page").style.display = "none";
    document.querySelector(".kanto-location").style.display = "block";
    
}

const johtoRegion = () => {
    const card = () => {
        document.querySelectorAll(".poke-image").forEach((element) => {
            element.addEventListener("click", (event) => {
                const pokeCard = event.currentTarget.id; 
                const pokeInfo = data.pokemon.filter(info => info.name == pokeCard);
                const jCard = document.querySelector(".page-container");
                pokeInfo.map((data) => {
                    const {num, img, name, about, type} = data;
                    const {height, weight} = data.size;
                    const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
                    jCard.innerHTML += `
                    <div class="card-container">
                        <div class="img-container">
                        <h1 class="poke-number">N°${num}</h1>
                        <div class="circle" id="circle">
                            <img class="card-image" src=${img} alt="">
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="poke-description">
                            <h1 class="card-name">${pokemonName}</h1>
                            <p class="about">${about}</p>
                        </div>
                            <table>
                                <tr>
                                    <td>
                                        <h3 class="pokemon-height">Height</h3>
                                    </td>
                                    <td>
                                        <h3 class="pokemon-weight">Weight</h3>
                                    </td>
                                    <td>
                                        <h3 class="pokemon-type">Type</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="height">${height}</td>
                                    <td class="weight">${weight}</td>
                                    <td class="type-icon">${type}</td>
                                
                                </tr>
                            </table>
                        </div>
                    </div>
                    `
                })
                document.querySelector(".johto-location").style.display = "none";
                document.querySelector(".information-card").style.display = "block";
            })
        })
    }

    const pokemonJohto = data.pokemon.filter(data => data.generation.name == "johto");

    const containerJ = document.querySelector(".johto-results");
    pokemonJohto.map((data) => {
        containerJ.innerHTML += `
        <li class="poke-image" id=${data.name}>
            <figure>
                <img class="pokemon-image" src=${data.img}>
                <div class="pokemon-name">${data.name}</div>
            </figure>
        </li>
        `
    })
    card();

    document.querySelectorAll(".sort").forEach(element => {
        element.addEventListener("click", event => {
            const pokeSort = event.currentTarget.value;
            let filterA;
            if (pokeSort == 1) {
                filterA = pokemonJohto.map(data => data).sort((a, b) => {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
            }else {
                filterA = pokemonJohto.map(data => data).sort((a, b) => {
                    if (a.name > b.name)
                        return -1;
                    if (a.name < b.name)
                        return 1;
                    return 0;
                });
            }
            const containerType = document.querySelector(".johto-results");
            containerType.innerHTML = '';
            filterA.map(data => {
                containerType.innerHTML += `
                <li class="poke-image" id=${data.name}>
                    <figure>
                        <img class="pokemon-image" src=${data.img}>
                        <div class="pokemon-name">${data.name}</div>
                     </figure>
                </li>
                `
            })
        card();
        })
    })

    const container = document.querySelector(".order-types");
    const types = ["bug", "dragon", "fairy", "dark", "fire", "ghost", "ground", "normal", "electric", "fighting", "flying", "grass", "ice", "poison", "rock", "water"];
    types.map((data) => {
        container.innerHTML += `
            <img id=${data} class="fil-button" src="images/${data}.png"></button>
        `
    })

    document.querySelectorAll(".fil-button").forEach( element => {
        element.addEventListener("click", event => {
            const type = event.currentTarget.id;
            const pokemon = data.pokemon.filter(data => data.generation.name == "johto");
            const poketype = pokemon.filter(pokeData => pokeData.type.includes(type));

            const containerType = document.querySelector(".johto-results");
            containerType.innerHTML = '';
            poketype.map(data => {
                containerType.innerHTML += `
                <li class="poke-image" id=${data.name}>
                    <figure>
                        <img class="pokemon-image" src=${data.img}>
                        <div class="pokemon-name">${data.name}</div>
                     </figure>
                </li>
                `
            })
            card();
        })
    })

    document.querySelector(".second-page").style.display = "none";
    document.querySelector(".johto-location").style.display = "block";
}

    document.querySelector(".poke-button").addEventListener("click", firstButton);
    document.querySelector(".kanto-link").addEventListener("click", kantoRegion);
    document.querySelector(".johto-link").addEventListener("click", johtoRegion);