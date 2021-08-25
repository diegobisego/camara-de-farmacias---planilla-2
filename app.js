var os_lista = ["SELECCIONE OS","AMUR","ANDAR (CON CIERRE ONLINE)","ASOC ECLESIASTICA SAN PEDRO","ASPURC","CAJA NOTARIAL",
                "C.P.C.E","COOPERACION SEGUROS","GALENO CONSULTING GROUP","HOSPITAL PRIVADO","IOSFA","IOSFA ONCOLÓGICOS  (DIBA+IOSE+OSFA)",
                "IOSFA REFACTURACIÓN (DIBA+IOSE+OSFA)","INTERACCION ART","LUZ Y FUERZA","MEDICAMENTO PRIMER NIVEL",
                "MEDIDORES DE GLUCOSA","MUTUAL FEDERADA NO VALIDADAS","MUTUAL FEDERADA","NOBIS S.A.","OS EMP. DE FARMACIAS",
                "O.S. PERSONAL IND. GRÁFICA","OMINT","OSDOP","OSPSA SANIDAD","OSPIL AMPIL (CON CIERRE ONLINE)",
                "OSPRERA","OSIM","OSSACRA","PAMI ONCOLÓGICO","PREVENCIÓN ART","RECETARIO SOLIDARIO 2Q JULIO",
                "SAT TELEVISIÓN","SIND. EMP. MUNICIP DEL S.E.","SUOEM","UOM","UNIMED SUMA DE PLANES (OSME + OSFOT + OSSACRA + OSAMOC + PROSALUD)",
                "UNIMED INTEGRAL"];
            


//CARGAR PLANES
var plan_AMUR = ["SELECCIONE PLAN","AMB."];
var plan_ANDAR = ["SELECCIONE PLAN","AMB 40%","PLAN S PLUS 40%","PLAN 100%","PLAN CRONICOS","CLASICO 40%","PMI CLASICO 40%","ESPECIAL 40%","PMI ESPEC 40%","PLUS 40%","PMI PLUS 100%","CRONICOS 40%","PSICOFÁRMACOS 70%","AUT. PROCREACION 100%","REFACT AMB 40%","REFACT 100%","REFACT. CRÓNICOS"];
var plan_ASOC_ECLESIASTICA_SAN_PEDRO = ["SELECCIONE PLAN","AMB."];
var plan_ASPURC = ["SELECCIONE PLAN","AMB. 60%"];
var plan_CAJA_NOTARIAL = ["SELECCIONE PLAN","AMB.","PMI"];
var plan_C_P_C_E  = ["SELECCIONE PLAN","TOTAL"];
var plan_COOPERACION_SEGUROS = ["SELECCIONE PLAN","AMB."];
var plan_GALENO_CONSULTING_GROUP = ["SELECCIONE PLAN","AMB.","PMI"];
var plan_HOSPITAL_PRIVADO = ["SELECCIONE PLAN","VALIDADAS","NO VALIDADAS"];
var plan_IOSFA = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_IOSFA_ONCOLÓGICOS = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_OSFA_REFACTURACIÓN = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_INTERACCION_ART = ["SELECCIONE PLAN","AMB"];
var plan_LUZ_Y_FUERZA = ["SELECCIONE PLAN","TODOS LOS PLANES","REFACTURADAS"];
var plan_MEDICAMENTO_PRIMER_NIVEL = ["SELECCIONE PLAN","AMB."];
var plan_MEDIDORES_DE_GLUCOSA =  ["SELECCIONE PLAN","AMB."];
var plan_MUTUAL_FEDERADA_NO_VALIDADAS = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_MUTUAL_FEDERADA = ["SELECCIONE PLAN","TOTAL"];
var plan_NOBIS = ["SELECCIONE PLAN","ACT.40%","ACT PLUS 40%","ACTIVO 50%","ACTIVO PLUS 50%","ACTIVO 70%","ACTIVO 100%","ACTIVO PLUS 100%","ACTIVO PLUS 100%","BASICO 50%","LIBRE 40%","LIBRE 50%","LIBRE 100%","LIBRE PLUS 50%","LIBRE PLUS 100%","LIDER 40%","LIDER 50%","LIDER 70%","LIDER PLUS 70%","B 200 40%","B 300 40%","N 200 40%","N 400 40%","N 500 50%","PMI","SIMPLE PLUS 40%","SIMPLE PLUS 100%","REFACTURADAS"];
var plan_OS_EMP_DE_FARMACIAS = ["SELECCIONE PLAN","AMB 50, 70, 100%","PMI"];
var plan_OS_PERSONAL_IND_GRAFICA = ["SELECCIONE PLAN","AMB 40%","AMB 50%","AMB 70%","PMI"];
var plan_OMINT = ["SELECCIONE PLAN","SUMA DE PLANES"];
var plan_OSDOP = ["SELECCIONE PLAN","APROSS SADOP","OSDOP","OSDOP SADOP","PLAN MAT INF 100%","PLAN MATERNO"];
var plan_OSPSA_SANIDAD  = ["SELECCIONE PLAN","AMB 40%","CRON  70/100%","PMI 100%","ANTICONCEP 100%","DISCAPACIDAD 100%","MIXTO 40/70%"];
var plan_OSPIL_AMPIL = ["SELECCIONE PLAN","OSPIL/OSPIL GRAL.","OSPIL AMPIL COSEGURO","OSPIL AUT ESPEC","OSPIL CRONICO"];
var plan_OSPRERA = ["SELECCIONE PLAN","SUMA DE PLANES","REFACTURADAS"];
var plan_OSIM = ["SELECCIONE PLAN","AMB 50%","PMI 100%"];   
var plan_OSSACRA = ["SELECCIONE PLAN","SUMA DE PLANES"];   
var plan_PAMI_ONCOLÓGICO = ["SELECCIONE PLAN","SUMA DE PLANES"];   
var plan_PREVENCIÓN_ART = ["SELECCIONE PLAN","AMB."];
var plan_RECETARIO_SOLIDARIO = ["SELECCIONE PLAN","VALIDADAS"];   
var plan_SAT_TELEVISIÓN = ["SELECCIONE PLAN","AMB."];   
var plan_SIND_EMP_MUNICIP_DEL_SE = ["SELECCIONE PLAN","AMB."];  
var plan_SUOEM = ["SELECCIONE PLAN","COOSEGURO"]; 
var plan_UOM = ["SELECCIONE PLAN","AMB."];
var plan_UNIMED_SUMA_DE_PLANES = ["SELECCIONE PLAN","40%","50%","70%","100%"];
var plan_UNIMED_INTEGRAL = ["SELECCIONE PLAN","OSPOCE INT 40%","OSPOCE INT 70%","OSPOCE INT 100%"];


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


//FUNCION CARGA PLANES
    carga_plan_dinamico = (param1) => {
        for (i in param1) {
            let pos_lista_plan = document.getElementById("id_planes_lista" + bandera);
            let option = document.createElement("option");
            pos_lista_plan.appendChild(option);
            option.innerText = param1[i];                        
        }
        boton.disabled = false;
    }

//FUNCION QUE CONTEMPLA LA CARGA DE PLANES INCLUYENDO LO DINAMICO      
carga_planes_os = () => {
    select.disabled = true;
    let id_select = document.getElementById("select_os"+bandera);
    let value_id_select = id_select.value;
    let pos_lista_plan = document.getElementById("id_planes_lista"+bandera);
        switch (value_id_select) {
            case "1":                       
                    carga_plan_dinamico(plan_AMUR);
                    pos_lista_plan.disabled = false;                  
                break;
                case "2":                       
                    carga_plan_dinamico(plan_ANDAR);
                    pos_lista_plan.disabled = false;             
                break;
                case "3":                       
                    carga_plan_dinamico(plan_ASOC_ECLESIASTICA_SAN_PEDRO);
                    pos_lista_plan.disabled = false;                
                break;
                case "4":                       
                    carga_plan_dinamico(plan_ASPURC);
                    pos_lista_plan.disabled = false;             
                break;
                case "5":                       
                    carga_plan_dinamico(plan_CAJA_NOTARIAL);
                    pos_lista_plan.disabled = false;                 
                break;
                case "6":                       
                    carga_plan_dinamico(plan_C_P_C_E);
                    pos_lista_plan.disabled = false;                  
                break;
                case "7":                       
                    carga_plan_dinamico(plan_COOPERACION_SEGUROS);
                    pos_lista_plan.disabled = false;
                break;
                case "8":                       
                    carga_plan_dinamico(plan_GALENO_CONSULTING_GROUP);
                    pos_lista_plan.disabled = false;
                break;
                case "9":                       
                    carga_plan_dinamico(plan_HOSPITAL_PRIVADO);
                    pos_lista_plan.disabled = false;               
                break;
                case "10":                       
                    carga_plan_dinamico(plan_IOSFA);
                    pos_lista_plan.disabled = false;              
                break;
                case "11":                       
                    carga_plan_dinamico(plan_IOSFA_ONCOLÓGICOS);
                    pos_lista_plan.disabled = false;               
                break;
                case "12":                       
                    carga_plan_dinamico(plan_OSFA_REFACTURACIÓN);
                    pos_lista_plan.disabled = false;              
                break;
                case "13":                       
                    carga_plan_dinamico(plan_INTERACCION_ART);
                    pos_lista_plan.disabled = false;                 
                break;
                case "14":                       
                    carga_plan_dinamico(plan_LUZ_Y_FUERZA);
                    pos_lista_plan.disabled = false;                
                break;
                case "15":                       
                    carga_plan_dinamico(plan_MEDICAMENTO_PRIMER_NIVEL);
                    pos_lista_plan.disabled = false;             
                break;
                case "16":                       
                    carga_plan_dinamico(plan_MEDIDORES_DE_GLUCOSA);
                    pos_lista_plan.disabled = false;                
                break;
                case "17":                       
                    carga_plan_dinamico(plan_MUTUAL_FEDERADA_NO_VALIDADAS);
                    pos_lista_plan.disabled = false;                 
                break;
                case "18":                       
                    carga_plan_dinamico(plan_MUTUAL_FEDERADA);
                    pos_lista_plan.disabled = false;             
                break;
                case "19":                       
                    carga_plan_dinamico(plan_NOBIS);
                    pos_lista_plan.disabled = false;               
                break;
                case "20":                       
                    carga_plan_dinamico(plan_OS_EMP_DE_FARMACIAS);
                    pos_lista_plan.disabled = false;                  
                break;
                case "21":                       
                    carga_plan_dinamico(plan_OS_PERSONAL_IND_GRAFICA);
                    pos_lista_plan.disabled = false;                  
                break;
                case "22":                       
                    carga_plan_dinamico(plan_OMINT);
                    pos_lista_plan.disabled = false;                 
                break;
                case "23":                       
                    carga_plan_dinamico(plan_OSDOP);
                    pos_lista_plan.disabled = false;             
                break;
                case "24":                       
                    carga_plan_dinamico(plan_OSPSA_SANIDAD);
                    pos_lista_plan.disabled = false;              
                break;
                case "25":                       
                    carga_plan_dinamico(plan_OSPIL_AMPIL);
                    pos_lista_plan.disabled = false;                 
                break;
                case "26":                       
                    carga_plan_dinamico(plan_OSPRERA);
                    pos_lista_plan.disabled = false;                   
                break;
                case "27":                       
                    carga_plan_dinamico(plan_OSIM);
                    pos_lista_plan.disabled = false;             
                break;
                case "28":                       
                    carga_plan_dinamico(plan_OSSACRA);
                    pos_lista_plan.disabled = false;             
                break;
                case "29":                       
                    carga_plan_dinamico(plan_PAMI_ONCOLÓGICO);
                    pos_lista_plan.disabled = false;           
                break;
                case "30":                       
                    carga_plan_dinamico(plan_PREVENCIÓN_ART);
                    pos_lista_plan.disabled = false;             
                break;
                case "31":                       
                    carga_plan_dinamico(plan_RECETARIO_SOLIDARIO);
                    pos_lista_plan.disabled = false;              
                break;
                case "32":                       
                    carga_plan_dinamico(plan_SAT_TELEVISIÓN);
                    pos_lista_plan.disabled = false;          
                break;
                case "33":                       
                    carga_plan_dinamico(plan_SIND_EMP_MUNICIP_DEL_SE);
                    pos_lista_plan.disabled = false;            
                break;
                case "34":                       
                    carga_plan_dinamico(plan_SUOEM);
                    pos_lista_plan.disabled = false;              
                break;
                case "35":                       
                    carga_plan_dinamico(plan_UOM);
                    pos_lista_plan.disabled = false;               
                break;
                case "36":                       
                    carga_plan_dinamico(plan_UNIMED_SUMA_DE_PLANES);
                    pos_lista_plan.disabled = false;             
                break;
                case "37":                       
                    carga_plan_dinamico(plan_UNIMED_INTEGRAL);
                    pos_lista_plan.disabled = false;             
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

//FUNCION QUE CARGA LOS CODIGOS DE LOS PLANES EN LA PRIMER COLUMNA

carga_cod_planes = () => {
    let codigo = document.getElementById("codigo_plan" + bandera);
    let id_select = document.getElementById("select_os"+bandera).value;
    let codigo_plan = document.getElementById("id_planes_lista" + bandera);
    var selected = codigo_plan.options[codigo_plan.selectedIndex].text;

    //AGREGAR IF SEGUN EL SELECT DE LA OS Y EL PLAN Q ELIJO

    switch (id_select) {
        case "1":
            codigo.value = "211"
            codigo.disabled = true;
            break;
        case "2":
            codigo.value = "5300"
            codigo.disabled = true;
            break;
        case "3":
            codigo.value = "12"
            codigo.disabled = true;
            break;
        case "4":
            codigo.value = "102"
            codigo.disabled = true;
            break;
        case "5":
            codigo.value = "20"
            codigo.disabled = true;
            break;
        case "6":
            codigo.value = "129"
            codigo.disabled = true;
            break;
        case "7":
            codigo.value = "6000"
            codigo.disabled = true;
            break;
        case "8":
            codigo.value = "6700"
            codigo.disabled = true;
            break;   
        case "9":
            codigo.value = "6002"
            codigo.disabled = true;
            break;  
        case "10":
            codigo.value = "8601"
            codigo.disabled = true;
            break;
        case "11":
            codigo.value = "8603"
            codigo.disabled = true;
            break;
        case "12":
            codigo.value = "8602"
            codigo.disabled = true;
            break;
        case "13":
            codigo.value = "6305"
            codigo.disabled = true;
            break;
        case "14":
            codigo.value = "351"
            codigo.disabled = true;
            break;  
        case "15":
            codigo.value = "2900"
            codigo.disabled = true;
            break; 
        case "16":
            codigo.value = "3400"
            codigo.disabled = true;
            break; 
        case "17":
            codigo.value = "156"
            codigo.disabled = true;
            break; 
        case "18":
            codigo.value = "1156"
            codigo.disabled = true;
            break; 
        case "19":
            codigo.value = "6950"
            codigo.disabled = true;
            break; 
        case "20":
            codigo.value = "711"
            codigo.disabled = true;
            break; 
        case "21":
            codigo.value = "79"
            codigo.disabled = true;
            break; 
        case "22":
            codigo.value = "7900"
            codigo.disabled = true;
            break; 
        case "23":
            codigo.value = "8000"
            codigo.disabled = true;
            break; 
        case "24":
            codigo.value = "36"
            codigo.disabled = true;
            break; 
        case "25":
            codigo.value = "3000"
            codigo.disabled = true;
            break; 
        case "26":
            codigo.value = "6800"
            codigo.disabled = true;
            break; 
        case "27":
            codigo.value = "505"
            codigo.disabled = true;
            break;     
        case "28":
            codigo.value = "6004"
            codigo.disabled = true;
            break; 
        case "29":
            codigo.value = "185"
            codigo.disabled = true;
            break; 
        case "30":
            codigo.value = "2281"
            codigo.disabled = true;
            break; 
        case "31":
            codigo.value = "215"
            codigo.disabled = true;
            break;
        case "32":
            codigo.value = "1000"
            codigo.disabled = true;
            break; 
        case "33":
            codigo.value = "83"
            codigo.disabled = true;
            break; 
        case "34":
            codigo.value = "94"
            codigo.disabled = true;
            break; 
        case "35":
            codigo.value = "1500"
            codigo.disabled = true;
            break; 
        case "36":
            codigo.value = "15"
            codigo.disabled = true;
            break; 
        case "37":
            codigo.value = "231"
            codigo.disabled = true;
            break; 
        case "38":
            codigo.value = "2230"
            codigo.disabled = true;
        break;
        default:
            break;
    }
codigo_plan.disabled = true;
}