// variable global
var oBrico = new Brico();

//datos
oBrico.altaCliente(new Cliente ("12345678X","Manuel","Cuenca 24","666666666"));
oBrico.altaCliente(new Cliente ("11111111X","Ale","Sevilla 24","555555555"));
oBrico.altaCliente(new Cliente ("88888888X","Alvaro","Luna 24","222222222"));

oBrico.altaOperario(new Operario("12345678A","Alvaro"));
oBrico.altaOperario(new Operario("87654321A","Jose"));
oBrico.altaOperario(new Operario("11111111A","Ana"));

oBrico.altaCita(new Cita(1,new Date("2017/01/01"),"12345678X","tuberias"));
oBrico.altaCita(new Cita(2,new Date("2018/01/01"),"11111111X","pintura"));
oBrico.altaCita(new Cita(3,new Date("2019/01/01"),"88888888X","fregadero"));

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
//document.getElementById("navbarDropdownMenuLink").addEventListener("click",cancelar,false);
document.getElementById("listaClientes").addEventListener("click",listadoClientes,false);
document.getElementById("listaOperario").addEventListener("click",listadoOperarios,false);
document.getElementById("listaCitas").addEventListener("click",listadoTodasCitas,false);
document.getElementById("formularioListadoCitas").addEventListener("click",mostrarFormularioListadoCitas,false);
document.getElementById("formularioAsignarAdministrativo").addEventListener("click",mostrarFormularioAsignarAdministrativo,false);
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
document.getElementById("formularioAsignarIncidencia").addEventListener("click",mostrarFormularioIncidencia,false);
document.getElementById("btnAceptarAsignarAdmin").addEventListener("click",asignarAdmin,false);
document.getElementById("btnBorrarAsignarAdmin").addEventListener("click",borrarCamposAsignarAdmin,false);
document.getElementById("btnCancelarAsignarAdmin").addEventListener("click",cancelar,false);
document.getElementById("formularioClienteMod").addEventListener("click",mostrarFormularioModificarCliente,false);
document.getElementById("formularioCitaMod").addEventListener("click",mostrarFormularioModificarCita,false);
document.getElementById("formularioMaterialMod").addEventListener("click",mostrarFormularioModificarMaterial,false);
document.getElementById("btnAceptarModificarCliente").addEventListener("click",mostrarFormularioModificarDatosCliente,false);
document.getElementById("btnBorrarModificarCliente").addEventListener("click",borrarCamposModificarCliente,false);
document.getElementById("btnCancelarModificarCliente").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarModificarCita").addEventListener("click",mostrarFormularioModificarCita,false);
document.getElementById("btnBorrarModificarCita").addEventListener("click",borrarCamposModificarCita,false);
document.getElementById("btnCancelarModificarCita").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarModificarMaterial").addEventListener("click",mostrarFormularioModificarMaterial,false);
document.getElementById("btnBorrarModificarMaterial").addEventListener("click",borrarCamposModificarMaterial,false);
document.getElementById("btnCancelarModificarMaterial").addEventListener("click",cancelar,false);
document.getElementById("formularioMaterialBor").addEventListener("click",mostrarFormularioBorrarMaterial,false);
document.getElementById("formularioClienteBor").addEventListener("click",mostrarFormularioBorrarCliente,false);
document.getElementById("formularioCitaBor").addEventListener("click",mostrarFormularioBorrarCita,false);
document.getElementById("formularioOperarioBor").addEventListener("click",mostrarFormularioBorrarOperario,false);
document.getElementById("formularioAdministrativoBor").addEventListener("click",mostrarFormularioBorrarAdministrativo,false);

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
	validarCliente();
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
	validarAltaMaterial();
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
	validarAsignarMaterial();
	var mensaje = "";
	var sCita = document.getElementById("txtCitaMat").value.trim();
	var iCod = document.getElementById("txtIDMat").value.trim();
	
	var oAsginarMaterial = new AsMaterial(sCita,iCod);
	
	mensaje = oBrico.asignarMaterial(oAsginarMaterial);
	alert(mensaje);
}

function asignarOperario(){
	validarAsignarOperario();
	var mensaje = "";
	var sCita = document.getElementById("txtCitaOp").value.trim();
	var sDni= document.getElementById("txtOperarioOp").value.trim();
	
	var oAsginarOperario = new AsOperario(sCita,sDni);
	
	mensaje = oBrico.asignarOperario(oAsginarOperario);
	alert(mensaje);
}

function asignarAdmin(){
	validarAsignarAdmin();
	var mensaje = "";
	var sCita = document.getElementById("txtCitaOp").value.trim();
	var sDni= document.getElementById("txtOperarioOp").value.trim();
	
	var oAsginarAdmin = new AsAdmin(sCita,iCod);
	
	mensaje = oBrico.asignarAdmin(oAsginarAdmin);
	alert(mensaje);
}

function altaOperario(){
	validarOperario();
	var mensaje = "";
	var sNIF = document.getElementById("txtDniOp").value.trim();
	var sNombre = document.getElementById("txtNombreOp").value.trim();
	var oOperario = new Operario(sNIF,sNombre);

	mensaje = oBrico.altaOperario(oOperario);
	alert(mensaje);
}

function altaAdministrativo(){
	validarAdministrativo();
	var iNumAdmin = oBrico.administrativos.length;
	var mensaje = "";
	var sNIF = document.getElementById("txtDniAdm").value.trim();
	var sNombre = document.getElementById("txtNombreAdm").value.trim();
	var oAdministrativo = new Administrativo(sNIF,sNombre);

	mensaje = oBrico.altaAdministrativo(oAdministrativo);
	alert(mensaje);
	if (oBrico.administrativos.length>iNumAdmin)
		cancelar();
}

function altaCita(){
	validarCrearCita();
	var iNumCitas = oBrico.citas.length;
	var mensaje = "";
	var iID = document.getElementById("txtNumCita").value.trim();
	var dFecha = document.getElementById("txtFechaCita").value.trim();
	var sCliente = document.getElementById("txtClienteCita").value.trim();
	var sDescripcion = document.getElementById("txtDescripcionCita").value.trim();
	var oCita = new Cita(iID,dFecha,sCliente,sDescripcion);

	mensaje = oBrico.altaCita(oCita);
	alert(mensaje);
	if (oBrico.citas.length>iNumCitas)
		cancelar();
}

//Listados
function listadoClientes(){
	var oVentana = open("","_blank");
	oVentana.document.title = "Listado Clientes";
	
	var oTitulo =document.createElement("h1");
	oTitulo.textContent = "Listado de clientes";
	oVentana.document.body.appendChild(oTitulo);

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
        oCelda = document.createElement("TH");
        oCelda.textContent = "DIRECCION";
        oFila.appendChild(oCelda);
        oCelda = document.createElement("TH");
        oCelda.textContent = "TELEFONO";
        oFila.appendChild(oCelda);
	
	var oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

	for (let i=0;i<oBrico.clientes.length;i++)
	{
		oFila = oTBody.insertRow(-1);
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.clientes[i].getNif();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.clientes[i].getNombre();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.clientes[i].getDireccion();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.clientes[i].getTelefono();
    }    
	
	oVentana.document.body.appendChild(oTabla);
	ocultarCapas();
	mostrarJumbotron();
}

function listadoOperarios(){
	var oVentana = open("","_blank");
	oVentana.document.title = "Listado Operarios";
	
	var oTitulo =document.createElement("h1");
	oTitulo.textContent = "Listado de operarios";
	oVentana.document.body.appendChild(oTitulo);

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
	oVentana.document.title = "Listado Citas";
	
	var oTitulo =document.createElement("h1");
	oTitulo.textContent = "Listado de todas las citas";
	oVentana.document.body.appendChild(oTitulo);

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
        oCelda = document.createElement("TH");
        oCelda.textContent = "DESCRIPCION";
        oFila.appendChild(oCelda);
        
	
	var oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

	for (let i=0;i<oBrico.citas.length;i++)
	{
		oFila = oTBody.insertRow(-1);
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getID();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getFecha().toLocaleDateString();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getCliente();
		oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getDescripcion();
    }    
	
	oVentana.document.body.appendChild(oTabla);
	ocultarCapas();
	mostrarJumbotron();
}

function listadoCitas(){
	validarListadoFechas();
	var sFechaInicial = "";
	var sFechaFinal = "";
	var oVentana = null;
	var dFechaInicio = new Date (document.getElementById("txtFechaInicioCitasPer").value);
	var dFechaFin = new Date (document.getElementById("txtFechaFinCitasPer").value);
	
	var citasPeriodo = obtenerCitas(dFechaInicio,dFechaFin);
	
	cancelar();
	oVentana = open("","_blank");
	oVentana.document.title = "Listado Citas";
	
	var oTitulo =document.createElement("h1");
	oTitulo.textContent = "Listado de Citas entre "+dFechaInicio.toLocaleDateString()+" y "+dFechaFin.toLocaleDateString();
	oVentana.document.body.appendChild(oTitulo);
	
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
        oCelda = document.createElement("TH");
        oCelda.textContent = "DESCRIPCION";
        oFila.appendChild(oCelda);
	
		var oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

	for (let i=0;i<citasPeriodo.length;i++)
	{
		oFila = oTBody.insertRow(-1);
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getID();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getFecha().toLocaleDateString();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getCliente();
		oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.citas[i].getDescripcion();
    }    
}

function obtenerCitas(fechaI, fechaF){
	var array = oBrico.citas.filter(n=>(n.fecha>=fechaI && n.fecha <=fechaF));
	return array;
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
	document.getElementById("txtNumCita").value = oBrico.iNumCita;
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

function mostrarFormularioIncidencia(){
	ocultarCapas();
	document.getElementById("divFrmIncidencia").style.display = "block";
}

function mostrarFormularioAsignarAdministrativo(){
	ocultarCapas();
	document.getElementById("divFrmAsignarAdmin").style.display = "block";
}

function mostrarFormularioModificarCliente(){
	ocultarCapas();
	document.getElementById("divFrmModificarCliente").style.display = "block";
}

function mostrarFormularioModificarMaterial(){
	ocultarCapas();
	document.getElementById("divFrmModificarMaterial").style.display = "block";
}

function mostrarFormularioModificarCita(){
	ocultarCapas();
	document.getElementById("divFrmModificarCita").style.display = "block";
}

function mostrarFormularioBorrarAdministrativo(){
	ocultarCapas();
	document.getElementById("divFrmBorrarAdmin").style.display = "block";
}

function mostrarFormularioBorrarCliente(){
	ocultarCapas();
	document.getElementById("divFrmBorrarCliente").style.display = "block";
}

function mostrarFormularioBorrarCita(){
	ocultarCapas();
	document.getElementById("divFrmBorrarCita").style.display = "block";
}

function mostrarFormularioBorrarMaterial(){
	ocultarCapas();
	document.getElementById("divFrmBorrarMaterial").style.display = "block";
}

function mostrarFormularioBorrarOperario(){
	ocultarCapas();
	document.getElementById("divFrmBorrarOperario").style.display = "block";
}

function mostrarFormularioModificarDatosCliente(){
	var nif = document.getElementById("txtModificarCliente").value;
	var oCliente = oBrico.buscar(nif,oBrico.clientes);
	if (oCliente != null){
		ocultarCapas();
		document.getElementById("txtDniModificarDatosCliente").value = oCliente.NIF;
		document.getElementById("txtNombreModificarDatosCliente").value = oCliente.nombre;
		document.getElementById("txtDireccionModificarDatosCliente").value = oCliente.direccion;
		document.getElementById("txtTfnoModificarDatosCliente").value = oCliente.telefono;	
		document.getElementById("divFrmModificarDatosCliente").style.display = "block";
	}else
		alert ("El NIF introducido no corresponde a ningún cliente");
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
	document.getElementById("divFrmIncidencia").style.display = "none";
	document.getElementById("divFrmAsignarAdmin").style.display = "none";
	document.getElementById("divFrmModificarMaterial").style.display = "none";
	document.getElementById("divFrmModificarCliente").style.display = "none";
	document.getElementById("divFrmModificarCita").style.display = "none";
	document.getElementById("divFrmBorrarCita").style.display = "none";
	document.getElementById("divFrmBorrarCliente").style.display = "none";
	document.getElementById("divFrmBorrarOperario").style.display = "none";
	document.getElementById("divFrmBorrarAdmin").style.display = "none";
	document.getElementById("divFrmBorrarMaterial").style.display = "none";
	document.getElementById("divFrmModificarDatosCliente").style.display = "none";
	//document.getElementById("divFrmModificarDatosCita").style.display = "block";
	//document.getElementById("divFrmModificarDatosMaterial").style.display = "block";

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

function borrarCamposModificarMaterial(){
	frmModificarMaterial.reset();
}

function borrarCamposModificarCita(){
	frmModificarCita.reset();
}

function borrarCamposModificarCliente(){
	frmModificarCliente.reset();
}

function borrarCamposCita(){
	frmCita.reset();
	document.getElementById("txtNumCita").value = oBrico.iNumCita;
}

function borrarCamposAsignarMaterial(){
	frmAsignarMaterial.reset();
}
function borrarCamposAsignarOperario(){
	frmAsignarOperario.reset();
}

function borrarCamposAsignarAdmin(){
	frmAsignarAdmin.reset();
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
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaOperario.txtNombreOp.classList.add("error");
        frmAltaOperario.txtNombreOp.focus();
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
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
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaAdministrativo.txtNombreAdm.classList.add("error");
        frmAltaAdministrativo.txtNombreAdm.focus();
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
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

	 //Validar DNI de cita
    var sDNI = frmCita.txtClienteCita.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmCita.txtClienteCita.classList.add("error");
        frmCita.txtClienteCita.focus();
        sError += "\n El DNI debe contener 8 numeros y una letra final.";
    }

	//Validar fecha
	var sFecha = frmCita.txtFechaCita.value.trim();
    var oExpReg = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/

    if (oExpReg.test(sFecha) == false) {
        bValido = false;

        frmCita.txtFechaCita.classList.add("error");
        frmCita.txtFechaCita.focus();
        sError += "\n Fecha incorrecta debe estar en el siguiente formato dd/mm/aaaa.";
    }

    //Validar Descripcion l
	var sDes = frmCita.txtDescripcionCita.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sDes) == false) {
        bValido = false;

        frmCita.txtDescripcionCita.classList.add("error");
        frmCita.txtDescripcionCita.focus();
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
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaCliente.txtNombreCli.classList.add("error");
        frmAltaCliente.txtNombreCli.focus();
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }

    //Validar Direccion del cliente
    var sDireccion = frmAltaCliente.txtDireccionCli.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

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
	
	//Validar Cita de Asignar Material
	var sCita = frmAsignarMaterial.txtCitaMat.value.trim();
    var oExpReg = /^[a-zA-Z]{3}\d{3}$/;

    if (oExpReg.test(sCita) == false) {
        bValido = false;

        frmAsignarMaterial.txtCitaMat.classList.add("error");
        frmAsignarMaterial.txtCitaMat.focus();
        sError += "\n El Codigo debe empezar por 3 vocales seguido de 3 digitos.";
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

//Validar Asignar Operario
function validarAsignarAdmin(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();


	//Validar Admin de Asignar administrativo
    var sDNI = frmAsignarAdmin.txtAdminAd.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmAsignarAdmin.txtAdminAd.classList.add("error");
        frmAsignarAdmin.txtAdminAd.focus();
        sError += "Introduce el DNI del administrativo, debe contener 8 numeros y una letra final.";
    }
	
	//Validar Cita de Asignar operario
	var sCita = frmAsignarAdmin.txtCitaAd.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(sCita) == false) {
        bValido = false;

        frmAsignarAdmin.txtCitaAd.classList.add("error");
        frmAsignarAdmin.txtCitaAd.focus();
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
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmAltaMaterial.txtNombreMat.classList.add("error");
        frmAltaMaterial.txtNombreMat.focus();
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
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

function validarListadoFechas(){
	sFechaInicial=document.getElementById("txtFechaInicioCitasPer").value;
	sFechaFinal=document.getElementById("txtFechaFinCitasPer").value;
	
	if(sFechaFinal<sFechaInicial)
	{
		document.getElementById("txtFechaFinCitasPer").classList.add("error");
        document.getElementById("txtFechaFinCitasPer").focus();
		alert("La fecha final debe ser mayor que la inicial.");
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
	frmAsignarMaterial.txtCitaMat.classList.remove("error");
	frmAsignarOperario.txtOperarioOp.classList.remove("error");
	frmAsignarOperario.txtCitaOp.classList.remove("error");
	frmAltaMaterial.txtCodMat.classList.remove("error");
	frmAltaMaterial.txtNombreMat.classList.remove("error");
	frmAltaMaterial.txtPrecioMat.classList.remove("error");
	frmAltaMaterial.txtDescripcionMat.classList.remove("error");
}

//Funcion para salir de la aplicacion
function salir(){
	window.location = "http://google.com";
}