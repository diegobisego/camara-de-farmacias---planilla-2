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


var contador = 0;

//FUNCION Carga las OS
cargar_os = (param) => {
    let select = document.createElement("select");
    param.appendChild(select);
    select.setAttribute("class","sizeF2");
    select.setAttribute("OnChange","carga_planes_os()");
    select.setAttribute("id","select_os" + bandera);
    for (let i = 0; i < os_lista.length; i++) {
        let option = document.createElement("option"); //genero el primer option
        select.appendChild(option); // lo append
        option.innerHTML = os_lista[i]; //le agrego el texto de el array de la posicion
        option.setAttribute("value",contador); //agrego un
        option.setAttribute("id","id"+contador);
        contador++        
    }
    contador = 0;

    carga_plan_dinamico = (param1) => {
        for (i in param1) {
            let pos_lista_plan = document.getElementById("id_planes_lista" + bandera);
            let option = document.createElement("option");
            pos_lista_plan.appendChild(option);
            option.innerText = param1[i];                        
        }
        boton.disabled = false;
    }

    
    carga_planes_os = () => {
        select.disabled = true;
        let id_select = document.getElementById("select_os"+bandera);
        let value_id_select = id_select.value;
        let pos_lista_plan = document.getElementById("id_planes_lista"+bandera);

            switch (value_id_select) {
                case "1":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_AMUR);
                    } else {
                        carga_plan_dinamico(plan_AMUR);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;

                    case "2":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_ANDAR);
                    } else {
                        carga_plan_dinamico(plan_ANDAR);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    
                    case "3":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_ASOC_ECLESIASTICA_SAN_PEDRO);
                    } else {
                        carga_plan_dinamico(plan_ASOC_ECLESIASTICA_SAN_PEDRO);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "4":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_ASPURC);
                    } else {
                        carga_plan_dinamico(plan_ASPURC);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "5":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_CAJA_NOTARIAL);
                    } else {
                        carga_plan_dinamico(plan_CAJA_NOTARIAL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "6":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_C_P_C_E);
                    } else {
                        carga_plan_dinamico(plan_C_P_C_E);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "7":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_COOPERACION_SEGUROS);
                    } else {
                        carga_plan_dinamico(plan_COOPERACION_SEGUROS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "8":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_GALENO_CONSULTING_GROUP);
                    } else {
                        carga_plan_dinamico(plan_GALENO_CONSULTING_GROUP);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "9":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_HOSPITAL_PRIVADO);
                    } else {
                        carga_plan_dinamico(plan_HOSPITAL_PRIVADO);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "10":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_IOSFA);
                    } else {
                        carga_plan_dinamico(plan_IOSFA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "11":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_IOSFA_ONCOLÓGICOS);
                    } else {
                        carga_plan_dinamico(plan_IOSFA_ONCOLÓGICOS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "12":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSFA_REFACTURACIÓN);
                    } else {
                        carga_plan_dinamico(plan_OSFA_REFACTURACIÓN);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "13":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_INTERACCION_ART);
                    } else {
                        carga_plan_dinamico(plan_INTERACCION_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "14":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_LUZ_Y_FUERZA);
                    } else {
                        carga_plan_dinamico(plan_LUZ_Y_FUERZA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "15":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_MEDICAMENTO_PRIMER_NIVEL);
                    } else {
                        carga_plan_dinamico(plan_MEDICAMENTO_PRIMER_NIVEL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "16":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_MEDIDORES_DE_GLUCOSA);
                    } else {
                        carga_plan_dinamico(plan_MEDIDORES_DE_GLUCOSA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "17":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_MUTUAL_FEDERADA_NO_VALIDADAS);
                    } else {
                        carga_plan_dinamico(plan_MUTUAL_FEDERADA_NO_VALIDADAS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "18":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_MUTUAL_FEDERADA);
                    } else {
                        carga_plan_dinamico(plan_MUTUAL_FEDERADA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "19":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_NOBIS);
                    } else {
                        carga_plan_dinamico(plan_NOBIS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "20":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OS_EMP_DE_FARMACIAS);
                    } else {
                        carga_plan_dinamico(plan_OS_EMP_DE_FARMACIAS);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "21":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OS_PERSONAL_IND_GRAFICA);
                    } else {
                        carga_plan_dinamico(plan_OS_PERSONAL_IND_GRAFICA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "22":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OMINT);
                    } else {
                        carga_plan_dinamico(plan_OMINT);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "23":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSDOP);
                    } else {
                        carga_plan_dinamico(plan_OSDOP);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "24":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSPSA_SANIDAD);
                    } else {
                        carga_plan_dinamico(plan_OSPSA_SANIDAD);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "25":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSPIL_AMPIL);
                    } else {
                        carga_plan_dinamico(plan_OSPIL_AMPIL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "26":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSPRERA);
                    } else {
                        carga_plan_dinamico(plan_OSPRERA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "27":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSIM);
                    } else {
                        carga_plan_dinamico(plan_OSIM);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "28":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_OSSACRA);
                    } else {
                        carga_plan_dinamico(plan_OSSACRA);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "29":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_PAMI_ONCOLÓGICO);
                    } else {
                        carga_plan_dinamico(plan_PAMI_ONCOLÓGICO);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "30":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_PREVENCIÓN_ART);
                    } else {
                        carga_plan_dinamico(plan_PREVENCIÓN_ART);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "31":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_RECETARIO_SOLIDARIO);
                    } else {
                        carga_plan_dinamico(plan_RECETARIO_SOLIDARIO);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "32":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SAT_TELEVISIÓN);
                    } else {
                        carga_plan_dinamico(plan_SAT_TELEVISIÓN);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "33":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SIND_EMP_MUNICIP_DEL_SE);
                    } else {
                        carga_plan_dinamico(plan_SIND_EMP_MUNICIP_DEL_SE);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "34":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_SUOEM);
                    } else {
                        carga_plan_dinamico(plan_SUOEM);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "35":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_UOM);
                    } else {
                        carga_plan_dinamico(plan_UOM);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "36":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_UNIMED_SUMA_DE_PLANES);
                    } else {
                        carga_plan_dinamico(plan_UNIMED_SUMA_DE_PLANES);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    case "37":                       
                    if (pos_lista_plan.hasChildNodes()) {
                        while (pos_lista_plan.firstChild) {
                            pos_lista_plan.removeChild(pos_lista_plan.firstChild);    
                        }
                        carga_plan_dinamico(plan_UNIMED_INTEGRAL);
                    } else {
                        carga_plan_dinamico(plan_UNIMED_INTEGRAL);
                        pos_lista_plan.disabled = false;
                    }                    
                    break;
                    default:
                        break;
            }
                
    }
}


deleteRow = (btn) => {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    boton.disabled = false;
}

ocultar = () =>{
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
    window.print();
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "inline-block";
    }
}
