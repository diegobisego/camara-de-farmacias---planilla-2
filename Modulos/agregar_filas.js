// Variables Globales
var id = 0;
var table = document.getElementById("tfoot");
let boton = document.getElementById("add");
var bandera = 0;

// ADD LINEA
add = () => {
    
    boton.addEventListener('click', () => {

        // Creamos la fila
        let fila = document.createElement('tr');
        table.appendChild(fila);
        fila.setAttribute('id', id);
        bandera +=1;

        for (let i = 0; i < 7; i++) { //7 columnas
            var columna = document.createElement('td');
            fila.appendChild(columna);

            //agrego por cada columna lo que corresponde
            switch (i) {
                case 0:    
                    let inpu0 = document.createElement('input');
                    inpu0.setAttribute('class','sizeF1');
                    inpu0.setAttribute('id','codigo_plan' + bandera);
                    columna.appendChild(inpu0);                    
                    break;
                case 1:
                    columna.setAttribute("colspan","2");
                    cargar_os(columna);
                    break;
                case 2:
                    let sel = document.createElement("select");
                    columna.appendChild(sel);
                    sel.setAttribute("class","sizeF2");
                    sel.setAttribute("id","id_planes_lista"+bandera);
                    sel.setAttribute("OnChange","carga_cod_planes()");
                    sel.disabled = true;
                    break;
                case 3:
                    let input3 = document.createElement('input');
                    input3.setAttribute('class','sizeF1');
                    columna.appendChild(input3);
                    break;
                case 4:
                    let input4 = document.createElement('input');
                    input4.setAttribute('class','sizeF1');
                    columna.appendChild(input4);
                    break;
                case 5:
                    let input5 = document.createElement('input');
                    input5.setAttribute('class','sizeF1');
                    columna.appendChild(input5);
                    break;              
                case 6:
                    columna.setAttribute('id','btnborrarhidden');
                    let btn_borrar = document.createElement("button");
                    btn_borrar.setAttribute("class","btn btn-danger remove");
                    btn_borrar.setAttribute('onClick', "deleteRow(this)");
                    btn_borrar.setAttribute('value', "Delete");
                    btn_borrar.setAttribute("id","id_fila" + id);
                    columna.appendChild(btn_borrar).innerHTML = "Borrar";
                    columna.setAttribute("style","background-color: transparent; border:none;");
                    break;                    
                default:
                    break;
            }

            }
            boton.disabled = true;
        }   
    )
}

add();
