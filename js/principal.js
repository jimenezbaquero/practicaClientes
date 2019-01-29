// variable global
var oBrico = new Brico();

// programa principal
ocultarCapas();
mostrarJumbotron();
document.getElementById("formularioCliente").addEventListener("click",mostrarFormularioCliente,false);
document.getElementById("formularioOperario").addEventListener("click",mostrarFormularioOperario,false);
document.getElementById("formularioAdministrativo").addEventListener("click",mostrarFormularioAdministrativo,false);
document.getElementById("formularioMaterial").addEventListener("click",mostrarFormularioMaterial,false);
document.getElementById("formularioCita").addEventListener("click",mostrarFormularioCita,false);
document.getElementById("formularioAsignarMaterial").addEventListener("click",mostrarFormularioAsignarMaterial,false);
document.getElementById("formularioAsignarOperario").addEventListener("click",mostrarFormularioAsignarOperario,false);
document.getElementById("navbarDropdownMenuLink").addEventListener("click",cancelar,false);
document.getElementById("listaClientes").addEventListener("click",listadoClientes,false);
document.getElementById("listaOperario").addEventListener("click",listadoOperarios,false);
document.getElementById("listaCitas").addEventListener("click",listadoTodasCitas,false);
document.getElementById("formularioListadoCitas").addEventListener("click",mostrarFormularioListadoCitas,false);
document.getElementById("btnSalir").addEventListener("click",salir,false);
document.getElementById("btnAceptarCliente").addEventListener("click",altaCliente,false);
document.getElementById("btnBorrarCliente").addEventListener("click",borrarCamposCliente,false);
document.getElementById("btnCancelarCliente").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarOperario").addEventListener("click",altaOperario,false);
document.getElementById("btnBorrarOperario").addEventListener("click",borrarCamposOperario,false);
document.getElementById("btnCancelarOperario").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarAdministrativo").addEventListener("click",altaAdministrativo,false);
document.getElementById("btnBorrarAdministrativo").addEventListener("click",borrarCamposAdministrativo,false);
document.getElementById("btnCancelarAdministrativo").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarMaterial").addEventListener("click",altaMaterial,false);
document.getElementById("btnBorrarMaterial").addEventListener("click",borrarCamposMaterial,false);
document.getElementById("btnCancelarMaterial").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarCita").addEventListener("click",altaCita,false);
document.getElementById("btnBorrarCita").addEventListener("click",borrarCamposCita,false);
document.getElementById("btnCancelarCita").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarAsignarMaterial").addEventListener("click",asignarMaterial,false);
document.getElementById("btnBorrarAsignarMaterial").addEventListener("click",borrarCamposAsignarMaterial,false);
document.getElementById("btnCancelarAsignarMaterial").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarAsignarOperario").addEventListener("click",asignarOperario,false);
document.getElementById("btnBorrarAsignarOperario").addEventListener("click",borrarCamposAsignarOperario,false);
document.getElementById("btnCancelarAsignarOperario").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarCitas").addEventListener("click",listadoCitas,false);
document.getElementById("btnBorrarCitas").addEventListener("click",borrarCamposFechaCitas,false);
document.getElementById("btnCancelarCitas").addEventListener("click",cancelar,false);



//Validacion de formularios
function hayCamposVacios(divCampo){
	var array = divCampo.getElementsByTagName("input");
	var bVacio = false;
	for(let i = 0; i<array.length;i++){
		if (array[i].value == "")
			bVacio = true;
	}
	return bVacio;	
}

function altaCliente(){

}

function altaMaterial(){

}

function asignarMaterial(){

}

function asignarOperario(){

}

function altaOperario(){
	var mensaje = "";
	var sNIF = document.getElementById("txtDniOp").value.trim();
	var sNombre = document.getElementById("txtNombreOp").value.trim();
	var oOperario = new Operario(sNIF,sNombre);

	mensaje = oBrico.altaOperario(oOperario);
	alert(mensaje);
}

function altaAdministrativo(){
	var mensaje = "";
	var sNIF = document.getElementById("txtDniAdm").value.trim();
	var sNombre = document.getElementById("txtNombreAdm").value.trim();
	var oAdministrativo = new Administrativo(sNIF,sNombre);

	mensaje = oBrico.altaAdministrativo(oAdministrativo);
	alert(mensaje);
}

function altaCita(){
	var mensaje = "";
	var iID = document.getElementById("txtNumCita").value.trim();
	var dFecha = document.getElementById("txtFechaCita").value.trim();
	var sCliente = document.getElementById("txtClienteCita").value.trim();
	var sDescripcion = document.getElementById("txtIncidenciaCita").value.trim();
	var oCita = new Cita(iID,dFecha,sCliente,sDescripcion);

	mensaje = oBrico.altaCita(oCita);
	alert(mensaje);
}

//Listados
function listadoClientes(){
	alert("Listado Clientes");
}

function listadoOperarios(){
	alert("Listado Operarios");
}

function listadoCitas(){
	alert("Listado Citas");
}

function listadoTodasCitas(){
	alert("Listado todas citas");
}

//Validacion para el formulario del listado de citas en un periodo
function fechaValida(sFecha){
	var iAño = "";
	var iMes = "";
	var iDia = "";
	var bfechaValida = true;

	iDia = parseInt(sFecha.substring(0,sFecha.indexOf("/")));
	iMes = parseInt(sFecha.substring(sFecha.indexOf("/")+1,sFecha.lastIndexOf("/")));
	iAño = parseInt(sFecha.substring(sFecha.lastIndexOf("/")+1));

	if (iDia>0 && iDia<32 && iMes>0 && iMes<13){
		if ((iMes == 4 || iMes == 6 || iMes == 9 || iMes == 11)){
			if(iDia==31)
				bfechaValida = false;
		}
		else if(iMes == 2){
			if (iDia>28)
				bfechaValida = false;
			if (iDia == 29 && iAño%4==0)
				bfechaValida = true;
		}

	}else 
		bfechaValida = false;	

	return bfechaValida;
}

function crearFecha(sFecha){
	var iAño = "";
	var iMes = "";
	var iDia = "";
	var dFecha = null;

	iDia = parseInt(sFecha.substring(0,sFecha.indexOf("/")));
	iMes = parseInt(sFecha.substring(sFecha.indexOf("/")+1,sFecha.lastIndexOf("/")));
	iAño = parseInt(sFecha.substring(sFecha.lastIndexOf("/")+1));

	dFecha = new Date (iAño,iMes-1,iDia,12);
	return dFecha;
}

function listadoCitas(){
	var sFechaInicial = "";
	var sFechaFinal = "";
	var oVentana = null;
	var dFechaInicio = null;
	var dFechaFin = null;

	if (hayCamposVacios(camposFechasCitas))
		alert("Debe rellenar todos los campos");
	else{
		sFechaInicial = txtFechaInicioCitas.value;
		sFechaFinal = txtFechaFinCitas.value;
		if (fechaValida(sFechaInicial)&&fechaValida(sFechaFinal))
		{
			if(sFechaInicial<=sFechaFinal)
			{
				cancelar();
				dFechaInicio = crearFecha(sFechaInicial);
				dFechaFin = crearFecha(sFechaFinal);
				oVentana = open("","_blank");
				oVentana.document.title = "Listado Citas";
				oVentana.document.body.innerHTML = "<h1>Listado de Citas entre "+sFechaInicial+" y "+sFechaFinal+"</h1>"+oBrico.listadoCitasPeriodo(dFechaInicio,dFechaFin);
			}
			else
				alert("La primera fecha debe ser menor que la segunda");
		}
		else 
			alert ("Hay alguna fecha no válida");	
	}
}

//Funciones para el tratamiento de capas
function mostrarFormularioCliente(){
	ocultarCapas();
	document.getElementById("divFrmCliente").style.display = "block";
	frmAltaCliente.btnAceptarCliente.addEventListener("click", validarCliente, false);
}

function mostrarFormularioOperario(){
	ocultarCapas();	
	document.getElementById("divFrmOperario").style.display = "block";
	frmAltaOperario.btnAceptarOperario.addEventListener("click", validarOperario, false);
}

function mostrarFormularioAdministrativo(){
	ocultarCapas();	
	document.getElementById("divFrmAdministrativo").style.display = "block";
	frmAltaAdministrativo.btnAceptarAdministrativo.addEventListener("click", validarAdministrativo, false);
}

function mostrarFormularioMaterial(){
	ocultarCapas();	
	document.getElementById("divFrmMaterial").style.display = "block";
	frmAltaMaterial.btnAceptarMaterial.addEventListener("click", validarAltaMaterial, false);
}

function mostrarFormularioCita(){
	ocultarCapas();
	document.getElementById("divFrmCita").style.display = "block";
	frmCita.btnAceptarCita.addEventListener("click", validarCrearCita, false);
}

function mostrarFormularioAsignarMaterial(){
	ocultarCapas();
	document.getElementById("divFrmAsignarMaterial").style.display = "block";
	frmAsignarMaterial.btnAceptarAsignarMaterial.addEventListener("click", validarAsignarMaterial, false);
}

function mostrarFormularioAsignarOperario(){
	ocultarCapas();
	document.getElementById("divFrmAsignarOperario").style.display = "block";
	frmAsignarOperario.btnAceptarAsignarOperario.addEventListener("click", validarAsignarOperario, false);
}

function mostrarFormularioListadoCitas(){
	ocultarCapas();
	document.getElementById("divFrmFechasCitas").style.display = "block";
}

function mostrarJumbotron(){
	ocultarCapas();
	document.getElementById("jumbo").style.display = "block";
}

//Funciones para validar Formularios
//validar Alta Operario
function validarOperario(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del Operario
    var sDNI = frmAltaOperario.txtDniOp.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmAltaOperario.txtDniOp.classList.add("error");
        frmAltaOperario.txtDniOp.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	//Validar nombre del Operario
    var sNombre = frmAltaOperario.txtNombreOp.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{6,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaOperario.txtNombreOp.classList.add("error");
        frmAltaOperario.txtNombreOp.focus();
        sError += "\n El nombre debe ser alfanumérico entre 6 y 50 caracteres.";
    }
   
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();

    }

}

//validar Alta Administrativo
function validarAdministrativo(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del Operario
    var sDNI = frmAltaAdministrativo.txtDniAdm.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmAltaAdministrativo.txtDniAdm.classList.add("error");
        frmAltaAdministrativo.txtDniAdm.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	//Validar nombre del Operario
    var sNombre = frmAltaAdministrativo.txtNombreAdm.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{6,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaAdministrativo.txtNombreAdm.classList.add("error");
        frmAltaAdministrativo.txtNombreAdm.focus();
        sError += "\n El nombre debe ser alfanumérico entre 6 y 50 caracteres.";
    }
   
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();

    }

}
//Validar Crear cita
function validarCrearCita(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

	//Validar Nº de cita
	var sNum = frmCita.txtNumCita.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(sNum) == false) {
        bValido = false;

        frmCita.txtNumCita.classList.add("error");
        frmCita.txtNumCita.focus();
        sError += " El campo NºCITA debe ser numérico entre 1 y 9 digitos.";
    }
	//Validar Precio de Asignar Material
	var sFecha = frmCita.txtFechaCita.value.trim();
    var oExpReg = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/

    if (oExpReg.test(sFecha) == false) {
        bValido = false;

        frmCita.txtFechaCita.classList.add("error");
        frmCita.txtFechaCita.focus();
        sError += "\n Fecha incorrecta debe estar en el siguiente formato dd/mm/aaaa.";
    }
	 //Validar DNI de cita
    var sDNI = frmCita.txtClienteCita.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmCita.txtClienteCita.classList.add("error");
        frmCita.txtClienteCita.focus();
        sError += "\n El DNI debe contener 8 numeros y una letra final.";
    }
	//Validar incidencia de crear cita
	var sInci = frmCita.txtIncidenciaCita.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sInci) == false) {
        bValido = false;

        frmCita.txtIncidenciaCita.classList.add("error");
        frmCita.txtIncidenciaCita.focus();
        sError += "\n Añade una descripción.";
    }
	
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();

    }

}

//Validar Alta Cliente
function validarCliente(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del Ciente
    var sDNI = frmAltaCliente.txtDniCli.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmAltaCliente.txtDniCli.classList.add("error");
        frmAltaCliente.txtDniCli.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	//Validar nombre del cliente
    var sNombre = frmAltaCliente.txtNombreCli.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{6,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaCliente.txtNombreCli.classList.add("error");
        frmAltaCliente.txtNombreCli.focus();
        sError += "\n El nombre debe ser alfanumérico entre 6 y 50 caracteres.";
    }

    //Validar Direccion del cliente
    var sDireccion = frmAltaCliente.txtDireccionCli.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{6,50}$/;

    if (oExpReg.test(sDireccion) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaCliente.txtDireccionCli.focus();
            bValido = false;
        }

        frmAltaCliente.txtDireccionCli.classList.add("error");

        sError += "\n La direccion es incorrecta.";
    }

    //Validar telefono del cliente 
    var sTelefono = frmAltaCliente.txtTfnoCli.value.trim();
    oExpReg = /^[679]\d{8}$/;

    if (oExpReg.test(sTelefono) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaCliente.txtTfnoCli.focus();
            bValido = false;
        }

        frmAltaCliente.txtTfnoCli.classList.add("error");

        sError += "\n El teléfono es incorrecto.";
    }

    
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();

    }

}

//Validar Asignar Material
function validarAsignarMaterial(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

	//Validar ID de Asignar Material
	var sID = frmAsignarMaterial.txtIDMat.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(sID) == false) {
        bValido = false;

        frmAsignarMaterial.txtIDMat.classList.add("error");
        frmAsignarMaterial.txtIDMat.focus();
        sError += " El ID debe ser numérico entre 1 y 9 digitos.";
    }
	//Validar nombre de Asignar Material
    var sNombre = frmAsignarMaterial.txtNombreMat.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{6,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAsignarMaterial.txtNombreMat.classList.add("error");
        frmAsignarMaterial.txtNombreMat.focus();
        sError += "\n El nombre debe ser alfanumérico entre 6 y 50 caracteres.";
    }
	//Validar Precio de Asignar Material
	var sPrecio = frmAsignarMaterial.txtPrecioMat.value.trim();
    var oExpReg = /^\d+(\.\d{1,2})?$/;

    if (oExpReg.test(sPrecio) == false) {
        bValido = false;

        frmAsignarMaterial.txtPrecioMat.classList.add("error");
        frmAsignarMaterial.txtPrecioMat.focus();
        sError += "\n El Precio debe ser numérico y contener como maximo 2 decimales.";
    }
	//Validar Cita de Asignar Material
	var sCita = frmAsignarMaterial.txtCitaMat.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(sCita) == false) {
        bValido = false;

        frmAsignarMaterial.txtCitaMat.classList.add("error");
        frmAsignarMaterial.txtCitaMat.focus();
        sError += "\n La cita debe ser numérico entre 1 y 9 digitos.";
    }
	
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();

    }

}


//Validar Asignar Operario
function validarAsignarOperario(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();


	//Validar Operario de Asignar operario
    var sDNI = frmAsignarOperario.txtOperarioOp.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmAsignarOperario.txtOperarioOp.classList.add("error");
        frmAsignarOperario.txtOperarioOp.focus();
        sError += "Introduce el DNI del operario, debe contener 8 numeros y una letra final.";
    }
	
	//Validar Cita de Asignar operario
	var sCita = frmAsignarOperario.txtCitaOp.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(sCita) == false) {
        bValido = false;

        frmAsignarOperario.txtCitaOp.classList.add("error");
        frmAsignarOperario.txtCitaOp.focus();
        sError += "\n La cita debe ser numérico entre 1 y 9 digitos.";
    }
	
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();

    }

}

//Validar Alta Material
function validarAltaMaterial(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

	//Validar Codigo de Alta Material
	var sCod = frmAltaMaterial.txtCodMat.value.trim();
    var oExpReg = /^[a-zA-Z]{3}\d{3}$/;

    if (oExpReg.test(sCod) == false) {
        bValido = false;

        frmAltaMaterial.txtCodMat.classList.add("error");
        frmAltaMaterial.txtCodMat.focus();
        sError += " El Codigo debe empezar por 3 vocales seguido de 3 digitos.";
    }
	//Validar nombre de Alta Material
    var sNombre = frmAltaMaterial.txtNombreMat.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{6,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaMaterial.txtNombreMat.classList.add("error");
        frmAltaMaterial.txtNombreMat.focus();
        sError += "\n El nombre debe ser alfanumérico entre 6 y 50 caracteres.";
    }
	//Validar Precio de Alta Material
	var sPrecio = frmAltaMaterial.txtPrecioMat.value.trim();
    var oExpReg = /^\d+(\.\d{1,2})?$/;

    if (oExpReg.test(sPrecio) == false) {
        bValido = false;

        frmAltaMaterial.txtPrecioMat.classList.add("error");
        frmAltaMaterial.txtPrecioMat.focus();
        sError += "\n El Precio debe ser numérico y contener como maximo 2 decimales.";
    }
	//Validar Descripcion de Alta Material
	var sDes = frmAltaMaterial.txtDescripcionMat.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sDes) == false) {
        bValido = false;

        frmAltaMaterial.txtDescripcionMat.classList.add("error");
        frmAltaMaterial.txtDescripcionMat.focus();
        sError += "\n Añade una descripción.";
    }
	
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();

    }

}

function limpiarErrores() {
	frmAltaCliente.txtDniCli.classList.remove("error");
    frmAltaCliente.txtNombreCli.classList.remove("error");
    frmAltaCliente.txtDireccionCli.classList.remove("error");
    frmAltaCliente.txtTfnoCli.classList.remove("error");
	frmAsignarMaterial.txtIDMat.classList.remove("error");
	frmAsignarMaterial.txtNombreMat.classList.remove("error");
	frmAsignarMaterial.txtPrecioMat.classList.remove("error");
	frmAsignarMaterial.txtCitaMat.classList.remove("error");
	frmAsignarOperario.txtOperarioOp.classList.remove("error");
	frmAsignarOperario.txtCitaOp.classList.remove("error");
	frmAltaMaterial.txtCodMat.classList.remove("error");
	frmAltaMaterial.txtNombreMat.classList.remove("error");
	frmAltaMaterial.txtPrecioMat.classList.remove("error");
	frmAltaMaterial.txtDescripcionMat.classList.remove("error");
   
}


function ocultarCapas(){
	borrarCampos();
	document.getElementById("divFrmCliente").style.display = "none";
	document.getElementById("divFrmOperario").style.display = "none";
	document.getElementById("divFrmAdministrativo").style.display = "none";
	document.getElementById("divFrmMaterial").style.display = "none";
	document.getElementById("divFrmCita").style.display = "none";
	document.getElementById("divFrmAsignarMaterial").style.display = "none";
	document.getElementById("divFrmAsignarOperario").style.display = "none";
	document.getElementById("divFrmFechasCitas").style.display = "none";
	document.getElementById("jumbo").style.display = "none";
}

function cancelar(){
	ocultarCapas();
	mostrarJumbotron();
}

function borrarCamposCliente(){
	frmAltaCliente.reset();
}

function borrarCamposOperario(){
	frmAltaOperario.reset();
}

function borrarCamposAdministrativo(){
	frmAltaAdministrativo.reset();
}

function borrarCamposMaterial(){
	frmAltaMaterial.reset();
}

function borrarCamposCita(){
	frmCita.reset();
}

function borrarCamposAsignarMaterial(){
	frmAsignarMaterial.reset();
}
function borrarCamposAsignarOperario(){
	frmAsignarOperario.reset();
}

function borrarCamposFechaCitas(){
	frmFechasCitas.reset();
}

function borrarCampos(){
	borrarCamposCliente();
	borrarCamposOperario();
	borrarCamposAdministrativo();
	borrarCamposMaterial();
	borrarCamposCita();
	borrarCamposAsignarMaterial();
	borrarCamposAsignarOperario();
	borrarCamposFechaCitas();
}

//Funcion para salir de la aplicacion
function salir(){
	window.location = "http://google.com";
}