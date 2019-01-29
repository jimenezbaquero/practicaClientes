// variable global
var oBrico = new Brico();

//datos
oBrico.altaOperario(new Operario("12345678A","Alvaro"));
oBrico.altaOperario(new Operario("87654321A","Jose"));
oBrico.altaOperario(new Operario("11111111A","Ana"));

oBrico.altaCita(new Cita("1","01/01/2017","12345678A",""));
oBrico.altaCita(new Cita("2","01/01/2016","87654321A",""));
oBrico.altaCita(new Cita("3","01/01/2018","11111111A",""));

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
	var mensaje = "";
	var sNIF = document.getElementById("txtDniCli").value.trim();
	var sNombre = document.getElementById("txtNombreCli").value.trim();
	var sDireccion = document.getElementById("txtDireccionCli").value.trim();
	var iTelefono = document.getElementById("txtTfnoCli").value.trim();
	var oCliente = new Cliente(sNIF,sNombre,sDireccion,iTelefono);

	mensaje = oBrico.altaCliente(oCliente);
	alert(mensaje);
}

function altaMaterial(){
	var mensaje = "";
	var sID = document.getElementById("txtCodMat").value.trim();
	var sNombre = document.getElementById("txtNombreMat").value.trim();
	var fPrecio = document.getElementById("txtPrecioMat").value.trim();
	var sDescripcion = document.getElementById("txtDescripcionMat").value.trim();
	var oMaterial = new Material(sID,sNombre,fPrecio,sDescripcion);

	mensaje = oBrico.altaMaterial(oMaterial);
	alert(mensaje);
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
	alert("Listado clientes");
}

function listadoOperarios(){
	var oVentana = open("","_blank");
	oVentana.document.title = "Listado de operarios";

	var oTabla = document.createElement("table");
        oTabla.border = "1";

        // THEAD
        var oTHead = oTabla.createTHead();
        var oFila = oTHead.insertRow(-1);
        var oCelda = document.createElement("TH");
        oCelda.textContent = "DNI";
        oFila.appendChild(oCelda);
        oCelda = document.createElement("TH");
        oCelda.textContent = "NOMBRE";
        oFila.appendChild(oCelda);
        
	
	var oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

	for (let i=0;i<oBrico.operarios.length;i++)
	{
		oFila = oTBody.insertRow(-1);
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.operarios[i].getNif();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.operarios[i].getNombre();

    }    
	
	oVentana.document.body.appendChild(oTabla);
	ocultarCapas();
	mostrarJumbotron();

}

function listadoTodasCitas(){
	var oVentana = open("","_blank");
	oVentana.document.title = "Listado de citas";

	var oTabla = document.createElement("table");
        oTabla.border = "1";

        // THEAD
        var oTHead = oTabla.createTHead();
        var oFila = oTHead.insertRow(-1);
        var oCelda = document.createElement("TH");
        oCelda.textContent = "Nº CITA";
        oFila.appendChild(oCelda);
        oCelda = document.createElement("TH");
        oCelda.textContent = "FECHA";
        oFila.appendChild(oCelda);
        oCelda = document.createElement("TH");
        oCelda.textContent = "CLIENTE";
        oFila.appendChild(oCelda);
        
	
	var oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

	for (let i=0;i<oBrico.citas.length;i++)
	{
		oFila = oTBody.insertRow(-1);
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getID();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getFecha();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getCliente();

    }    
	
	oVentana.document.body.appendChild(oTabla);
	ocultarCapas();
	mostrarJumbotron();
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
}

function mostrarFormularioOperario(){
	ocultarCapas();	
	document.getElementById("divFrmOperario").style.display = "block";
}

function mostrarFormularioAdministrativo(){
	ocultarCapas();	
	document.getElementById("divFrmAdministrativo").style.display = "block";
}

function mostrarFormularioMaterial(){
	ocultarCapas();	
	document.getElementById("divFrmMaterial").style.display = "block";
}

function mostrarFormularioCita(){
	ocultarCapas();
	document.getElementById("divFrmCita").style.display = "block";
}

function mostrarFormularioAsignarMaterial(){
	ocultarCapas();
	document.getElementById("divFrmAsignarMaterial").style.display = "block";
}

function mostrarFormularioAsignarOperario(){
	ocultarCapas();
	document.getElementById("divFrmAsignarOperario").style.display = "block";
}

function mostrarFormularioListadoCitas(){
	ocultarCapas();
	document.getElementById("divFrmFechasCitas").style.display = "block";
}

function mostrarJumbotron(){
	ocultarCapas();
	document.getElementById("jumbo").style.display = "block";
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