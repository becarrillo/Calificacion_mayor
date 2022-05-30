let calificaciones: Array<number> = [];
let calificacion: Prompt;
// Inputs
type Prompt = string | null;
function isString(input: Prompt): input is string {
    return typeof input === 'string'
};

function isNull(input: Prompt): input is null {
    return input === ''
};

function promptHandler() {
    calificacion = window.prompt("Ingresa las calificaciones en número una por una, ingresa 0 para terminar");
    if (isNull(calificacion)) {
        window.alert("ERROR! Vacío! No ingresaste valor alguno");
        throw new Error("Ingresa algún valor, tu input fue nulo o vacío");
    };

    if (isString(calificacion)) {
        calificaciones.push(Number(calificacion));
    }
};

promptHandler();

let mayor: number;
let aux: number = 0;

function bucleHandler() {
    for (let i = 0; i < calificaciones.length; i++) {
        console.log(...calificaciones);

        if (calificaciones[i] === 0) { break; }

        if (calificaciones.length < 2) {
            mayor = calificaciones[i];
            aux += mayor;
        } else {
            if (aux >= calificaciones[i]) {
                mayor = aux;
            } else {
                mayor = calificaciones[i];
            }
            aux = mayor;
        }
        promptHandler();
    }
    // Max score (aux variable) goes to into HTML
    document.getElementById('mayor')?.setAttribute('value', String(aux));
}

bucleHandler();

document.querySelector('#retryBtn')?.addEventListener('click', function () {
    calificaciones.splice(0, calificaciones.length);
    aux = 0;
    promptHandler();
    bucleHandler();
})