var os_lista = ["SELECCIONE OS","AMUR","ANDAR (CON CIERRE ONLINE)","ASOC ECLESIASTICA SAN PEDRO","ASPURC","CAJA NOTARIAL",
                "C.P.C.E","COOPERACION SEGUROS","GALENO CONSULTING GROUP","HOSPITAL PRIVADO","IOSFA","IOSFA ONCOLÓGICOS  (DIBA+IOSE+OSFA)",
                "IOSFA REFACTURACIÓN (DIBA+IOSE+OSFA)","INTERACCION ART","LUZ Y FUERZA","MEDICAMENTO PRIMER NIVEL",
                "MEDIDORES DE GLUCOSA","MUTUAL FEDERADA NO VALIDADAS","MUTUAL FEDERADA","NOBIS S.A.","OS EMP. DE FARMACIAS",
                "O.S. PERSONAL IND. GRÁFICA","OMINT","OSDOP","OSPSA SANIDAD","OSPIL AMPIL (CON CIERRE ONLINE)",
                "OSPRERA","OSIM","OSSACRA","PAMI ONCOLÓGICO","PREVENCIÓN ART","RECETARIO SOLIDARIO 2Q JULIO",
                "SAT TELEVISIÓN","SIND. EMP. MUNICIP DEL S.E.","SUOEM","UOM","UNIMED SUMA DE PLANES (OSME + OSFOT + OSSACRA + OSAMOC + PROSALUD)",
                "UNIMED INTEGRAL"];
            
cargar_os = (param) => {
    let select = document.createElement("select");
    param.appendChild(select);
    select.setAttribute("class","form-select")
    select.setAttribute("OnChange","carga_planes_os()")
    var contador = 0;
    for (let i = 0; i < os_lista.length; i++) {
        let option = document.createElement("option");
        select.appendChild(option);
        option.innerHTML = os_lista[i];
        option.setAttribute("value",contador);
        option.setAttribute("id","id"+contador);
        contador++        
    }
}   


//CARGAR PLANES
var plan_AMUR = ["AMB."];
var plan_ANDAR = ["AMB 40%","PLAN S PLUS 40%","PLAN 100%","PLAN CRONICOS","CLASICO 40%","PMI CLASICO 40%","ESPECIAL 40%","PMI ESPEC 40%","PLUS 40%","PMI PLUS 100%","CRONICOS 40%","PSICOFÁRMACOS 70%","AUT. PROCREACION 100%","REFACT AMB 40%","REFACT 100%","REFACT. CRÓNICOS"];
var plan_ASOC_ECLESIASTICA_SAN_PEDRO = ["AMB."];
var plan_ASPURC = ["AMB. 60%"];
var plan_CAJA_NOTARIAL = ["AMB.","PMI"];
var plan_C_P_C_E  = ["TOTAL"];
var plan_COOPERACION_SEGUROS = ["AMB."];
var plan_GALENO_CONSULTING_GROUP = ["AMB.","PMI"];
var plan_HOSPITAL_PRIVADO = ["VALIDADAS","NO VALIDADAS"];
var plan_IOSFA = ["SUMA DE PLANES"];
var plan_IOSFA_ONCOLÓGICOS = ["SUMA DE PLANES"];
var plan_OSFA_REFACTURACIÓN = ["SUMA DE PLANES"];
var plan_INTERACCION_ART = ["AMB"];
var plan_LUZ_Y_FUERZA = ["TODOS LOS PLANES","REFACTURADAS"];
var plan_MEDICAMENTO_PRIMER_NIVEL = ["AMB."];
var plan_MEDIDORES_DE_GLUCOSA =  ["AMB."];
var plan_MUTUAL_FEDERADA_NO_VALIDADAS = ["SUMA DE PLANES"];
var plan_MUTUAL_FEDERADA = ["TOTAL"];
var plan_NOBIS = ["ACT.40%","ACT PLUS 40%","ACTIVO 50%","ACTIVO PLUS 50%","ACTIVO 70%","ACTIVO 100%","ACTIVO PLUS 100%","ACTIVO PLUS 100%","BASICO 50%","LIBRE 40%","LIBRE 50%","LIBRE 100%","LIBRE PLUS 50%","LIBRE PLUS 100%","LIDER 40%","LIDER 50%","LIDER 70%","LIDER PLUS 70%","B 200 40%","B 300 40%","N 200 40%","N 400 40%","N 500 50%","PMI","SIMPLE PLUS 40%","SIMPLE PLUS 100%","REFACTURADAS"];
var plan_OS_EMP_DE_FARMACIAS = ["AMB 50, 70, 100%","PMI"];
var plan_OS_PERSONAL_IND_GRAFICA = ["AMB 40%","AMB 50%","AMB 70%","PMI"];
var plan_OMINT = ["SUMA DE PLANES"];
var plan_OSDOP = ["APROSS SADOP","OSDOP","OSDOP SADOP","PLAN MAT INF 100%","PLAN MATERNO"];
var plan_OSPSA_SANIDAD  = ["AMB 40%","CRON  70/100%","PMI 100%","ANTICONCEP 100%","DISCAPACIDAD 100%","MIXTO 40/70%"];
var plan_OSPIL_AMPIL = ["OSPIL/OSPIL GRAL.","OSPIL AMPIL COSEGURO","OSPIL AUT ESPEC","OSPIL CRONICO"];
var plan_OSPRERA = ["SUMA DE PLANES","REFACTURADAS"];
var plan_OSIM = ["AMB 50%","PMI 100%"];   
var plan_OSSACRA = ["SUMA DE PLANES"];   
var plan_PAMI_ONCOLÓGICO = ["SUMA DE PLANES"];   
var plan_PREVENCIÓN_ART = ["AMB."];
var plan_RECETARIO_SOLIDARIO = ["VALIDADAS"];   
var plan_SAT_TELEVISIÓN = ["AMB."];   
var plan_SIND_EMP_MUNICIP_DEL_SE = ["AMB."];  
var plan_SUOEM = ["COOSEGURO"]; 
var plan_UOM = ["AMB."];
var plan_UNIMED_SUMA_DE_PLANES = ["40%","50%","70%","100%"];
var plan_UNIMED_INTEGRAL = ["OSPOCE INT 40%","OSPOCE INT 70%","OSPOCE INT 100%"];




//ESTO LO COPIE DE TU SCRIPT PERO NO ANDA TODAVIA
elimina_nodos = () => {
    let hijos = document.getElementById(value_option);
    let padre = document.getElementById(bandera);
    padre.removeChild(hijos);
}




/*
//FUNCION PARA AGREGAR LINEAS POR DOM
function add() {
    let boton = document.getElementById("agregar");
    let tabla = document.getElementById("add"); 
    

    boton.addEventListener('click', () => {      
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        bandera +=1;

        for (let i = 0; i < 6; i++) { //6 columnas
            
            var columna = document.createElement("td");
            fila.appendChild(columna);           
            
            
                switch (i) {
                    case 0:
                        let a = document.createElement("input");
                        columna.appendChild(a);
                        a.setAttribute("type","text");                        
                        break;
                    case 1:
                        let b = document.createElement("select");
                        let option = document.createElement("option");
                        b.setAttribute("class","lista");
                        b.setAttribute("id","pruebo"+bandera);
                        b.setAttribute("OnChange","seleccionOS()");
                        b.appendChild(option);
                        option.innerText = "Seleccione OS";
                        columna.appendChild(b);
                        columna.setAttribute("colspan","2");
                        //aca va el for para ir metiendo las OS
                        for (let i = 0; i < array_os.length; i++) {
                                let k = document.createElement("option");
                                b.appendChild(k);
                                k.innerHTML = array_os[i];
                                k.setAttribute("Value",i);
                            };
                        break;
                    case 2:
                        let c = document.createElement("select");
                        c.setAttribute("class","lista lista2");
                        c.setAttribute("id","planes_lista"+bandera);
                        columna.appendChild(c);
                        c.disabled = true;
                        break;
                    case 3:
                        let d = document.createElement("input");
                        d.setAttribute("id","grande2");
                        columna.appendChild(d);
                        break;
                    case 4:
                        let e = document.createElement("input");
                        e.setAttribute("id","grande2");
                        columna.appendChild(e);
                        break;
                    case 5:
                        let f = document.createElement("input");
                        f.setAttribute("id","grande3");
                        columna.appendChild(f);
                        columna.setAttribute("colspan","3");
                        break;                            
                    default:
                        break;
                }
            
        }
    })
}

var bandera = 0
var bandera_plan = 0


add();

//ARRAY CON OS Y PLANES
var array_os = ["AMUR","ASPURC","CAJA NOTARIAL","HOSPITAL PRIVADO","LUZ Y FUERZA"];
var lista_planes_AMUR = ["AMB","PLAN2","PLAN3","PLAN4","PLAN-Z"];
var lista_planes_ASPURC = ["AMB 60%","AMB1","AMB2","AMB3","AMB4"];
var lista_planes_NOTARIAL = ["AMB_NOTARIAL","PMI"];
var lista_planes_PRIVADO = ["VALIDADAS","NO VALIDADAS"];
var lista_planes_FUERZA = ["TODOS LOS PLANES","REFACTURADAS"];

//FUNCION PARA CARGAR PLANES

function seleccionOS() {
    let pruebo = document.getElementById("pruebo"+bandera);
    let valor = pruebo.value;
    let planes_lista = document.getElementById("planes_lista"+bandera);

    switch (valor) {
        case "0":
            debugger;
            if (pruebo.hasChildNodes()) {
                elimina_nodos();                
            } else{
                for (value in lista_planes_AMUR) {
                    var option = document.createElement("option");
                    planes_lista.appendChild(option);
                    option.text = lista_planes_AMUR[value];
            }   }
            planes_lista.disabled = false;
            break;
        case "1":
            
            for (value in lista_planes_ASPURC) {
                var option = document.createElement("option");
                planes_lista.appendChild(option);
                option.text = lista_planes_ASPURC[value];
            }
            planes_lista.disabled = false;
            break;
        case "2":
            
            for (value in lista_planes_NOTARIAL) {
                var option = document.createElement("option");
                planes_lista.appendChild(option);
                option.text = lista_planes_NOTARIAL[value];
            }
            planes_lista.disabled = false;
            break;
        case "3":
            
            for (value in lista_planes_PRIVADO) {
                var option = document.createElement("option");
                planes_lista.appendChild(option);
                option.text = lista_planes_PRIVADO[value];
            }
            planes_lista.disabled = false;
            break;
        case "4":
            
            for (value in lista_planes_FUERZA) {
                var option = document.createElement("option");
                planes_lista.appendChild(option);
                option.text = lista_planes_FUERZA[value];
            }
            planes_lista.disabled = false;
            break;    
        default:
            break;
    };
};


//ELIMINA NODOS HIJOS

function elimina_nodos() {
    let hijos = document.getElementById(planes_lista);
    let padre = document.getElementById(bandera);
    padre.removeChild(hijos);

}

*/