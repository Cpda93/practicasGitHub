var cartas = ['El gallo', 'El diablo', 'La dama', 'El catrín', 'El paraguas', 'La sirena',
    'La escalera', 'La botella', 'El barril', 'El árbol',
    'El melón', 'El valeinte', 'El gorrito', 'La muerte', 'La pera', 'La bandera', 'El bandolón',
    'El violoncello', 'La garza', 'El pájaro',
    'La mano', 'La bota', 'La luna', 'El cotorro', 'El borracho', 'El negrito', 'El corazón',
    'La sandía', 'El tambor', 'El camarón',

    'Las jaras', 'El músico', 'La araña', 'El soldado', 'La estrella', 'El cazo',
    'El mundo', 'El apache', 'El nopal', 'El alacrán',
    'La rosa', 'La calavera', 'La campana', 'El cantarito', 'El venado', 'El sol',
    'La corona', 'La chalupa', 'El pino', 'El pescado',
    'La palma', 'La maceta', 'El arpa', 'La rana'
];


/*
var cartas = [{
        nombreCarta: "El gallo",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El diablo",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La dama",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El catrin",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El paraguas",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La sirena",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La escalera",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La botella",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El barril",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El arbol",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El melón",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El valiente",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El gorrito",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La muerte",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La pera",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La bandera",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El bandolón",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El violoncello",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La garza",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El pájaro",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La mano",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La bota",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La luna",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El cotorro",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El borracho",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El negrito",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El coraón",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La sandía",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "EL tambor",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El camarón",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "Las jaras",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El músico",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "la araña",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El soldado",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La estrella",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El cazo",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El mundo",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El apache",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El nopal",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El alacrán",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La rosa",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La calavera",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La campana",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El cantarito",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El venado",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El sol",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La corona",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La chalupa",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El pino",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El pescado",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La palma",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La maceta",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "El arpa",
        refran: "",
        imagen: ""
    },
    {
        nombreCarta: "La rana",
        refran: "",
        imagen: ""
    },
];
*/
var salidas = [];
var boton = document.getElementById("idBoton");

function cartaAleatoria() {

    aleatorio = Math.floor((Math.random() * (cartas.length))); // recorre el arreglo cartas de manera aleatoria
    cartaAleatoriaAsignada = document.getElementById("carta").innerHTML = cartas[aleatorio]; // inserta en el DOM el elemento aleatorio 
    salidas.push(cartaAleatoriaAsignada); // agrega al arreglo salidas los elementos del array que van saliendo

    document.getElementById("cartasSalidas").innerHTML = salidas;
    console.log(salidas);
    console.log(cartaAleatoriaAsignada);

    cartas.splice(aleatorio, 1); // permite imprimir solo un elemento del arreglo sin repetirse

    if (cartaAleatoriaAsignada === undefined) {
        boton.disabled = true;
        console.log(" SE TERMINO LA BARAJA boton desactivado");
    } else {
        boton.disabled = false;
    }
}