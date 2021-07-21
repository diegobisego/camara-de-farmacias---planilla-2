//CREO LAS VARIABLES PARA LA FECHA
const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth();
const dia_nombre = fecha.getDay();
const dia_semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
let mes_actual = meses[mes];
let dia_actual = dia_semana[dia_nombre];

//FUNCION QUE CREA EL DIV PARA QUE CARGUE LA FECHA EN FORMA DINAMICA
function createDiv(param) {
    let div = document.createElement("div");
    let text = document.createTextNode(dia_actual.toUpperCase() + " " + dia + " DE " +  mes_actual.toUpperCase());
    param.appendChild(div);
    div.appendChild(text);
}
let dateDOM = document.getElementById("date-now");
createDiv(dateDOM);