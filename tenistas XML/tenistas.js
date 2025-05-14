function procesarXML(){

    const file = `<?xml version="1.0" encoding="UTF-8"?>
    <tenistas>
        <tenista id="1">
            <nombre>Novak Djokovic</nombre>
            <nacimiento>22/05/1987</nacimiento>
            <nacionalidad>Serbia</nacionalidad>
            <ranking>1</ranking>
            <mejor_ranking>1</mejor_ranking>
            <titulos>93</titulos>
            <superficie>Dura</superficie>
            <equipo>
                <patrocinador>Lacoste</patrocinador>
                <entrenador>Goran Ivanisevic</entrenador>
            </equipo>
            <grand_slams>
                <grand_slam titulo="Wimbledon">7</grand_slam>
                <grand_slam titulo="Australian Open">10</grand_slam>
                <grand_slam titulo="Roland Garros">3</grand_slam>
                <grand_slam titulo="US Open">4</grand_slam>
            </grand_slams>
        </tenista>
    
        <tenista id="2">
            <nombre>Carlos Alcaraz</nombre>
            <nacimiento>05/05/2003</nacimiento>
            <nacionalidad>España</nacionalidad>
            <ranking>2</ranking>
            <mejor_ranking>1</mejor_ranking>
            <titulos>12</titulos>
            <superficie>Dura</superficie>
        </tenista>
        </tenistas>`


        createTable()
        fillTable(file)

}

function createTable(){

    let table = document.createElement("table")
    document.body.appendChild(table)
    let row = table.createTHead().insertRow()
    const nombres=["Nombre", "Nacimiento", "Nacionalidad", "Ranking", "Titulos"]

    for (const nombre of nombres){
        let th = document.createElement("th")
        th.textContent = nombre
        row.appendChild(th)
    }

}

function fillTable(file){

    const xml = new DOMParser().parseFromString(file, "text/xml")
    const tenistas = xml.getElementsByTagName("tenista")

    let table = document.querySelector("table")
    const body = table.createTBody()

    for(const tenista of tenistas){
        let row = body.insertRow()
        fillCell("nombre", row, tenista);
        fillCell("nacimiento", row, tenista);
        fillCell("nacionalidad", row, tenista);
        fillCell("ranking", row, tenista);
        fillCell("nacimiento", row, tenista);
    }
}

function fillCell(value, row, tenista){
    let td = document.createElement("td")
    row.appendChild(td)
    td.textContent = tenista.getElementsByTagName(value)[0].textContent

}

procesarXML();

    
