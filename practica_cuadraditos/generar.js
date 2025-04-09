document.querySelector("#form").addEventListener("submit", (e)=>{
 
    e.preventDefault();

    let numAzul = document.querySelector("#azul").value
    let numRojo = document.querySelector("#rojo").value
    let numVerde = document.querySelector("#verde").value

    //Contenedor padre
    let contenedor = document.createElement("div")
    document.body.appendChild(contenedor)

    generateSqueare(numAzul,"blue", contenedor)
    generateSqueare(numRojo,"red", contenedor)
    generateSqueare(numVerde,"green", contenedor)

});

function generateSqueare(numSquare,color,contenedor){
    for (let index = 0; index < numSquare; index++) {
        let square = document.createElement("div")
        square.setAttribute("style", "height:150px; width:150px; border:1px solid black")
        square.className =  color
        contenedor.appendChild(square)

        generateDeleteSqueare(square)
        generateChangeSquare(square)
    }
}

function generateDeleteSqueare(square){
    let del = document.createElement("button")
    del.textContent = "Eliminar"
    del.addEventListener("click", ()=>{
        square.remove()
    })
    square.appendChild(del)
}

function generateChangeSquare(square){
    let change = document.createElement("button")
    change.textContent = "Cambiar Color"
    change.addEventListener("click", ()=>{
    square.className = calculateColor(square.className)
    })
    square.appendChild(change)
}

function calculateColor(color){
    if(color == "red")
        value = "blue"
    else if(color == "blue")
        value = "green"
    else
        value = "red"

    return value;
}
