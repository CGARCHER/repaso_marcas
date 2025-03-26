document.querySelector("#form").addEventListener("submit",(ev)=> {
    let typeInput = document.querySelector("#selector").value
    generarInput(typeInput)
    ev.preventDefault()
})

function generarInput(typeInput){
    let element = ''
    if(typeInput.includes("-")){
        let array = typeInput.split("-")
        element = document.createElement(array[0])
        element.setAttribute("type", array[1])
    }
    else{
        element = document.createElement(typeInput)
    }
    document.body.appendChild(element)
}