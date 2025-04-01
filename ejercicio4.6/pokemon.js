function loadPage(){
    let photos = ["articuno.png","blastoise.png","bulbasur.png",
        "caterpie.png","charmander.png","eve.png","pikachu.png",
        "squirtle.png","totodile.png","zubat.png"]

    let divPokemon = document.querySelector("#pokemon")
    for (let index = 0; index < photos.length; index++) {
        let img = document.createElement("img")
        img.setAttribute("src", "img/" + photos[index])
        img.addEventListener("click", ()=>{
            if(!contarMisPokemon()){
                document.querySelector("#mispokemon").appendChild(img);
            }
    
        })
        
        divPokemon.appendChild(img)
    }
}

function contarMisPokemon(){
    let mispokemon = document.querySelector("#mispokemon")
    let imagenes = mispokemon.querySelectorAll("img")
    let value = false
    if(imagenes.length == 6){
        alert("Ya tienes 6 pokemon en tu bolsa")
        value = true
    }
    return value

}


loadPage();