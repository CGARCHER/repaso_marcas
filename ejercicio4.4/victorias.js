document.querySelector("#form").addEventListener("submit",(ev)=> {

    //Vamos a recuperar los valores del formuario
    let nombre = document.querySelector("#nombre").value
    let victorias = document.querySelector("#victorias").value

    if(!validarNombre(nombre)){
        insertarEnLista(nombre, victorias)
        insertarEnTabla(nombre, victorias)
    }
    else{
        alert("Ya existe el nombre "+ nombre)
    }

    //Para evitar que se recargue la pagina
    ev.preventDefault()
})

function insertarEnLista(nombre, victorias){
    let lista = document.querySelector("#lista")
    let li = document.createElement("li")
    li.textContent = nombre + " - " + victorias
    lista.appendChild(li)
}

function insertarEnTabla(nombre, victorias){
    let tabla = document.querySelector("#table")
    let tr = document.createElement("tr")
    tabla.appendChild(tr)

    let tdNombre =  document.createElement("td")
    tdNombre.textContent = nombre
    tr.appendChild(tdNombre)

    let tdVictorias =  document.createElement("td")
    tdVictorias.textContent = victorias
    tr.appendChild(tdVictorias)
}

function validarNombre(nombre) {
    let items = document.querySelectorAll("#lista li")
    let encontrado = false
    for (const item of items) {
        if(item.textContent.includes(nombre)){
            encontrado = true
        }
    }
    return encontrado
}