async function getData() {
    const datosCasasR = await fetch("datos.json");
    const datosCasas = await datosCasasR.json();
    var datosLimpios = datosCasas.map(casa=>({precio: casa.Precio,
                                            cuartos: casa.NumeroDeCuartosPromedio}))
    datosLimpios = datosLimpios.filter(casa => (casa.precio != null && casa.cuartos != null));
    return datosLimpios;
}

function visualizarDatos(data){

    const valores = data.map(d => ({x: d.cuartos, y: d.precio}));
    tfvis.render.scatterplot(
        {name: 'Cuartos vs Precio'},
        {values: valores},
        {
            xLabel: 'Cuartos',
            yLabel: 'Precio',
            height: 300
        }
    );
}

function crearModelo() {
    
    const modelo = tf.sequential();

    modelo.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));

    modelo.add(tf.layers.dense({units: 1, useBias: true}));
    return modelo;
}

async function run() {
    //body...
    const data = await getData();

    visualizarDatos (data);

    crearModelo ();
}

run();