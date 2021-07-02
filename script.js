async function getData() {
    const datosCasasR = await fetch("datos.json");
    const datosCasas = await datosCasasR.json();
    var datosLimpios = datosCasas.map(casa=>({precio: casa.Precio,
                                            cuartos: casa.NumeroDeCuartosPromedio}))
    datosLimpios = datosLimpios.filter(casa => (casa.precio != null && casa.cuartos != null));
    return datosLimpios;
}

async function run() {
    //body...
    const data = await getData();
}

run();