function loadProductos(palabra){
    
    let productos = ['cocacola.jpg','pepsi.jpg','sprite.jpg'] 
    let div =  document.querySelector('#productos')
    div.innerHTML=''
    productos.forEach(element => {
            let nombreProducto = element.split('.')[0]
            if(nombreProducto.includes(palabra) || palabra==''){
                let figure =  document.createElement("figure")
                div.appendChild(figure)

                let img = document.createElement("img")
                img.setAttribute("src", "img/"+element)

                img.setAttribute("width", "250px")
                img.setAttribute("height", "250px")

                figure.appendChild(img)

                let figcaption = document.createElement("figcaption");
                figcaption.textContent = nombreProducto
                figure.appendChild(figcaption)
        }
   });
}

document.querySelector("#buscador").addEventListener("keyup", (e) =>{
    loadProductos(document.querySelector("#buscador").value);
})

loadProductos("");