var _a;
var calificaciones = [];
var calificacion;
function isString(input) {
    return typeof input === 'string';
}
;
function isNull(input) {
    return input === '';
}
;
function promptHandler() {
    calificacion = window.prompt("Ingresa las calificaciones en número una por una, ingresa 0 para terminar");
    if (isNull(calificacion)) {
        window.alert("ERROR! Vacío! No ingresaste valor alguno");
        throw new Error("Ingresa algún valor, tu input fue nulo o vacío");
    }
    ;
    if (isString(calificacion)) {
        calificaciones.push(Number(calificacion));
    }
}
;
promptHandler();
var mayor;
var aux = 0;
function bucleHandler() {
    var _a;
    for (var i = 0; i < calificaciones.length; i++) {
        console.log.apply(console, calificaciones);
        if (calificaciones[i] === 0) {
            break;
        }
        if (calificaciones.length < 2) {
            mayor = calificaciones[i];
            aux += mayor;
        }
        else {
            if (aux >= calificaciones[i]) {
                mayor = aux;
            }
            else {
                mayor = calificaciones[i];
            }
            aux = mayor;
        }
        promptHandler();
    }
    // Max score (aux variable) goes to into HTML
    (_a = document.getElementById('mayor')) === null || _a === void 0 ? void 0 : _a.setAttribute('value', String(aux));
}
bucleHandler();
(_a = document.querySelector('#retryBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    calificaciones.splice(0, calificaciones.length);
    aux = 0;
    promptHandler();
    bucleHandler();
});
