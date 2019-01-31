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
document.getElementById("listaClientes").addEventListener("click",listadoClientes,false);
document.getElementById("listaOperario").addEventListener("click",listadoOperarios,false);
document.getElementById("listaMateriales").addEventListener("click",listadoMateriales,false);
document.getElementById("listaCitas").addEventListener("click",listadoTodasCitas,false);
document.getElementById("formularioListadoCitas").addEventListener("click",mostrarFormularioListadoCitas,false);
document.getElementById("formularioAsignarAdministrativo").addEventListener("click",mostrarFormularioAsignarAdministrativo,false);
document.getElementById("btnAceptarCliente").addEventListener("click",altaCliente,false);
document.getElementById("btnBorrarCliente").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarCliente").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarOperario").addEventListener("click",altaOperario,false);
document.getElementById("btnBorrarOperario").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarOperario").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarAdministrativo").addEventListener("click",altaAdministrativo,false);
document.getElementById("btnBorrarAdministrativo").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarAdministrativo").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarMaterial").addEventListener("click",altaMaterial,false);
document.getElementById("btnBorrarMaterial").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarMaterial").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarCita").addEventListener("click",altaCita,false);
document.getElementById("btnBorrarCita").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarCita").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarAsignarMaterial").addEventListener("click",asignarMaterial,false);
document.getElementById("btnBorrarAsignarMaterial").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarAsignarMaterial").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarAsignarOperario").addEventListener("click",asignarOperario,false);
document.getElementById("btnBorrarAsignarOperario").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarAsignarOperario").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarCitas").addEventListener("click",listadoCitas,false);
document.getElementById("btnBorrarCitas").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarCitas").addEventListener("click",cancelar,false);
document.getElementById("formularioAsignarIncidencia").addEventListener("click",mostrarFormularioIncidencia,false);
document.getElementById("btnAceptarAsignarAdmin").addEventListener("click",asignarAdmin,false);
document.getElementById("btnBorrarAsignarAdmin").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarAsignarAdmin").addEventListener("click",cancelar,false);
document.getElementById("formularioClienteMod").addEventListener("click",mostrarFormularioModificarCliente,false);
document.getElementById("formularioCitaMod").addEventListener("click",mostrarFormularioModificarCita,false);
document.getElementById("formularioMaterialMod").addEventListener("click",mostrarFormularioModificarMaterial,false);
document.getElementById("btnAceptarModificarCliente").addEventListener("click",mostrarFormularioModificarDatosCliente,false);
document.getElementById("btnBorrarModificarCliente").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarModificarCliente").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarModificarCita").addEventListener("click",mostrarFormularioModificarDatosCita,false);
document.getElementById("btnBorrarModificarCita").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarModificarCita").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarModificarMaterial").addEventListener("click",mostrarFormularioModificarDatosMaterial,false);
document.getElementById("btnBorrarModificarMaterial").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarModificarMaterial").addEventListener("click",cancelar,false);
document.getElementById("formularioMaterialBor").addEventListener("click",mostrarFormularioBorrarMaterial,false);
document.getElementById("formularioClienteBor").addEventListener("click",mostrarFormularioBorrarCliente,false);
document.getElementById("formularioCitaBor").addEventListener("click",mostrarFormularioBorrarCita,false);
document.getElementById("formularioOperarioBor").addEventListener("click",mostrarFormularioBorrarOperario,false);
document.getElementById("formularioAdministrativoBor").addEventListener("click",mostrarFormularioBorrarAdministrativo,false);
document.getElementById("btnAceptarModificarDatosCliente").addEventListener("click",modificarCliente,false);
document.getElementById("btnBorrarModificarDatosCliente").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarModificarDatosCliente").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarModificarDatosCita").addEventListener("click",modificarCita,false);
document.getElementById("btnBorrarModificarDatosCita").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarModificarDatosCita").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarModificarDatosMaterial").addEventListener("click",modificarMaterial,false);
document.getElementById("btnBorrarModificarDatosMaterial").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarModificarDatosMaterial").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarBorrarCliente").addEventListener("click",borrarCliente,false);
document.getElementById("btnBorrarBorrarCliente").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarBorrarCliente").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarBorrarOperario").addEventListener("click",borrarOperario,false);
document.getElementById("btnBorrarBorrarOperario").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarBorrarOperario").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarBorrarAdmin").addEventListener("click",borrarAdministrativo,false);
document.getElementById("btnBorrarBorrarAdmin").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarBorrarAdmin").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarBorrarCita").addEventListener("click",borrarCita,false);
document.getElementById("btnBorrarBorrarCita").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarBorrarCita").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarBorrarMaterial").addEventListener("click",borrarMaterial,false);
document.getElementById("btnBorrarBorrarMaterial").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarBorrarMaterial").addEventListener("click",cancelar,false);
document.getElementById("formularioCitasCliente").addEventListener("click",mostrarFormularioCitasCliente,false);
document.getElementById("btnAceptarCitasCliente").addEventListener("click",listadoCitasCliente,false);
document.getElementById("btnBorrarCitasCliente").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarCitasCliente").addEventListener("click",cancelar,false);
document.getElementById("btnAceptarInc").addEventListener("click",asignarIncidencia,false);
document.getElementById("btnBorrarInc").addEventListener("click",borrarCampos,false);
document.getElementById("btnCancelarInc").addEventListener("click",cancelar,false);

function altaCliente(){
	validarCliente();
	var iNumCliente = oBrico.clientes.length;
	var mensaje = "";
	var sNIF = document.getElementById("txtDniCli").value.trim();
	var sNombre = document.getElementById("txtNombreCli").value.trim();
	var sDireccion = document.getElementById("txtDireccionCli").value.trim();
	var iTelefono = document.getElementById("txtTfnoCli").value.trim();
	var oCliente = new Cliente(sNIF,sNombre,sDireccion,iTelefono);

	mensaje = oBrico.altaCliente(oCliente);
	alert(mensaje);
	if (oBrico.clientes.length>iNumCliente)
		cancelar();
}

function altaMaterial(){
	validarAltaMaterial();
	var iNumMaterial = oBrico.materiales.length;
	var mensaje = "";
	var sID = document.getElementById("txtCodMat").value.trim();
	var sNombre = document.getElementById("txtNombreMat").value.trim();
	var fPrecio = document.getElementById("txtPrecioMat").value.trim();
	var sDescripcion = document.getElementById("txtDescripcionMat").value.trim();
	
	var oMaterial = new Material(sID,sNombre,fPrecio,sDescripcion);

	mensaje = oBrico.altaMaterial(oMaterial);
	alert(mensaje);
	if (oBrico.materiales.length>iNumMaterial)
		cancelar();
}

function asignarMaterial(){
	validarAsignarMaterial();
	var mensaje = "";
	var sCita = document.getElementById("txtCitaMatAs").value.trim();
	var iCod = document.getElementById("txtIDMatAs").value.trim();
	
	var oCita = oBrico.buscarCita(sCita);
	var oMaterial= oBrico.buscarMaterial(iCod);
	if (oCita == null)
		mensaje+="La cita no existe ";
	else
		if (oMaterial==null)
			mensaje += "El material no existe";
		else
			if(oCita.materiales.includes(oMaterial))
				mensaje += "El material ya ha sido asignado";
			else{
				oCita.materiales.push(iCod);
				mensaje = "Material asignado Correctamente";
				cancelar();
			}
	alert(mensaje);
}

function asignarOperario(){
	validarAsignarOperario();
	var mensaje = "";
	var sCita = document.getElementById("txtCitaOp").value.trim();
	var sDni = document.getElementById("txtOperarioOp").value.trim();
	
	var oCita = oBrico.buscarCita(sCita);
	var oOperario= oBrico.buscar(sDni,oBrico.operarios);
	if (oCita == null)
		mensaje+="La cita no existe ";
	else
		if (oOperario==null)
			mensaje += "El Operario no existe";
		else
			if(oCita.operarios.includes(oOperario))
				mensaje += "El Operario ya ha sido asignado";
			else{
				oCita.operarios.push(sDni);
				mensaje = "Operario asignado Correctamente";
				cancelar();
			}
	alert(mensaje);
}

function asignarAdmin(){
	validarAsignarAdmin();
	var mensaje = "";
	var sCita = document.getElementById("txtCitaAd").value.trim();
	var sDni = document.getElementById("txtAdminAd").value.trim();
	
	var oCita = oBrico.buscarCita(sCita);
	var oAdministrativo= oBrico.buscar(sDni,oBrico.administrativos);
	if (oCita == null)
		mensaje+="La cita no existe ";
	else
		if (oAdministrativo==null)
			mensaje += "El Administrativo no existe";
		else{
			oCita.administrativos = oAdministrativo;
			mensaje = "Administrativo asignado Correctamente";
			cancelar();
		}
	alert(mensaje);
}

function asignarIncidencia(){
	validarAsignarIncidencia();
	var mensaje="";
	var sCita = document.getElementById("txtCitaInc").value.trim();
	var sDescripcion = document.getElementById("txtDescInc").value.trim();

	var oCita = oBrico.buscarCita(sCita);
		if (oCita == null)
		mensaje+="La cita no existe ";
	else{
		var incidencia = new Incidencia (oCita.incidencias.length+1,oCita.ID,sDescripcion);
		oCita.incidencias.push(incidencia);
		alert("Incidencia incluida en la cita");
		cancelar();
	}
}

function altaOperario(){
	validarOperario();
	var iNumOperario = oBrico.operarios.length;
	var mensaje = "";
	var sNIF = document.getElementById("txtDniOp").value.trim();
	var sNombre = document.getElementById("txtNombreOp").value.trim();
	var oOperario = new Operario(sNIF,sNombre);

	mensaje = oBrico.altaOperario(oOperario);
	alert(mensaje);
	if (oBrico.operarios.length>iNumOperario)
		cancelar();
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
	var dFecha = document.getElementById("txtFechaCita").value;
	var sCliente = document.getElementById("txtClienteCita").value.trim();
	var sDescripcion = document.getElementById("txtDescripcionCita").value.trim();
	var oCita = new Cita(iID,new Date(dFecha),sCliente,sDescripcion);

	mensaje = oBrico.altaCita(oCita);
	alert(mensaje);
	if (oBrico.citas.length>iNumCitas)
		cancelar();
}

function modificarCliente(){
	validarModificarCliente();
	oBrico.clientes = oBrico.clientes.filter(n=>(n.NIF!=txtDniModificarDatosCliente.value));	
	oCliente = new Cliente(txtDniModificarDatosCliente.value.trim(),txtNombreModificarDatosCliente.value.trim(),txtDireccionModificarDatosCliente.value.trim(),txtTfnoModificarDatosCliente.value.trim())
	oBrico.clientes.push(oCliente);
	alert("Datos del cliente modificados satisfactoriamente");
	cancelar();
}

function modificarCita(){
	validarModificarCita();
	var id = document.getElementById("txtNumModificarDatosCita").value.trim();
	var oCitaAnt = oBrico.buscarCita(id);
	var incidencias = oCitaAnt.incidencias;
	var operarios = oCitaAnt.operarios;
	var admin = oCitaAnt.administrativo;
	oBrico.citas = oBrico.citas.filter(n=>(n.ID!=id));	
	oCita = new Cita(txtNumModificarDatosCita.value.trim(),new Date((new Date(txtFechaModificarDatosCita.value.trim())).getTime()- 24*60*60*1000),txtClienteModificarDatosCita.value.trim(),txtDescripcionModificarDatosCita.value.trim())
	oCita.incidencias = incidencias;
	oCita.operarios = operarios;
	oCita.administrativo = admin;
	oBrico.citas.push(oCita);
	alert("Datos de la cita modificados satisfactoriamente");
	cancelar();
}

function modificarMaterial(){
	validarModificarMaterial();
	oBrico.materiales = oBrico.materiales.filter(n=>(n.ID!=txtCodModificarDatosMaterial.value));	
	oMaterial = new Material(txtCodModificarDatosMaterial.value.trim(),txtNombreModificarDatosMaterial.value.trim(),txtPrecioModificarDatosMaterial.value.trim(),txtDescripcionModificarDatosMaterial.value.trim())
	oBrico.materiales.push(oMaterial);
	alert("Datos del material modificados satisfactoriamente");
	cancelar();
}


function borrarCliente(){
	validarBorrarCliente();
	sNIF = document.getElementById("txtBorrarCliente").value;
	if (oBrico.buscar(sNIF,oBrico.clientes)!=null){
	oBrico.clientes = oBrico.clientes.filter(n=>(n.NIF!=sNIF));	
	alert("Cliente borrado de la base de datos");
	cancelar();
	}
	else
		alert("No existe un cliente con ese NIF");
}


function borrarOperario(){
	validarBorrarOperario();
	sNIF = document.getElementById("txtBorrarOperario").value;

	if (oBrico.buscar(sNIF,oBrico.operarios)!=null){
	oBrico.operarios = oBrico.operarios.filter(n=>(n.NIF!=sNIF));	
	alert("Operario borrado de la base de datos");
	cancelar();
	}
	else
		alert("No existe un operario con ese NIF");
}

function borrarAdministrativo(){
	validarBorrarAdministrativo();
	sNIF = document.getElementById("txtBorrarAdmin").value;

	if (oBrico.buscar(sNIF,oBrico.administrativos)!=null){
	oBrico.administrativos = oBrico.administrativos.filter(n=>(n.NIF!=sNIF));	
	alert("Administrativo borrado de la base de datos");
	cancelar();
	}
	else
		alert("No existe un administrativo con ese NIF");
}

function borrarMaterial(){
	validarBorrarMaterial();
	sCodigo = document.getElementById("txtBorrarMaterial").value;

	if (oBrico.buscarMaterial(sCodigo)!=null){
	oBrico.materiales = oBrico.administrativos.filter(n=>(n.ID!=sCodigo));	
	alert("Material borrado de la base de datos");
	cancelar();
	}
	else
		alert("No existe un material con ese código");
}

function borrarCita(){
	validarBorrarCita();
	sID = document.getElementById("txtBorrarCita").value;

	if (oBrico.buscarCita(sID)!=null){
	oBrico.citas = oBrico.citas.filter(n=>(n.ID!=sID));	
	alert("Cita borrada de la base de datos");
	cancelar();
	}
	else
		alert("No existe una cita con ese identificador");
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
        oCelda.textContent = oBrico.citas[i].fecha;
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
        oCelda.textContent = citasPeriodo[i].getID();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = citasPeriodo[i].getFecha();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = citasPeriodo[i].getCliente();
		oCelda = oFila.insertCell(-1);
        oCelda.textContent = citasPeriodo[i].getDescripcion();
	}
    oVentana.document.body.appendChild(oTabla);
	ocultarCapas();
	mostrarJumbotron();
}

function listadoMateriales(){
	var oVentana = open("","_blank");
	oVentana.document.title = "Listado materiales";
	
	var oTitulo =document.createElement("h1");
	oTitulo.textContent = "Listado de materiales";
	oVentana.document.body.appendChild(oTitulo);

	var oTabla = document.createElement("table");
        oTabla.border = "1";

        // THEAD
        var oTHead = oTabla.createTHead();
        var oFila = oTHead.insertRow(-1);
        var oCelda = document.createElement("TH");
        oCelda.textContent = "ID";
        oFila.appendChild(oCelda);
        oCelda = document.createElement("TH");
        oCelda.textContent = "NOMBRE";
        oFila.appendChild(oCelda);
        oCelda = document.createElement("TH");
        oCelda.textContent = "PRECIO";
        oFila.appendChild(oCelda);
        oCelda = document.createElement("TH");
        oCelda.textContent = "DESCRIPCION";
        oFila.appendChild(oCelda);
        
	
	var oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

	for (let i=0;i<oBrico.materiales.length;i++)
	{
		oFila = oTBody.insertRow(-1);
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.materiales[i].getID();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.materiales[i].getNombre();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.materiales[i].getPrecio();
		oCelda = oFila.insertCell(-1);
        oCelda.textContent = oBrico.materiales[i].getDescripcion();
    }    
	
	oVentana.document.body.appendChild(oTabla);
	ocultarCapas();
	mostrarJumbotron();
}

function listadoCitasCliente(){
	validarlistarCitasClientes();
		
	if (oBrico.buscar(txtDniCitaCli.value,oBrico.clientes)!=null){
	oBrico.clientes = oBrico.clientes.filter(n=>(n.NIF!=txtDniCitaCli.value));		
	
	var oVentana = null;
	var sCliente = document.getElementById("txtDniCitaCli").value;
	
	var citasClientePeriodo = obtenerCitasCliente(sCliente);
	
	cancelar();
	oVentana = open("","_blank");
	oVentana.document.title = "Listado Citas Cliente";
	
	var oTitulo =document.createElement("h1");
	oTitulo.textContent = "Listado de Citas del cliente: "+sCliente;
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
        oCelda.textContent = "DESCRIPCION";
        oFila.appendChild(oCelda);
	
		var oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

	for (let i=0;i<citasClientePeriodo.length;i++)
	{

		oFila = oTBody.insertRow(-1);
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = citasClientePeriodo[i].getID();
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = citasClientePeriodo[i].getFecha();
		oCelda = oFila.insertCell(-1);
        oCelda.textContent = citasClientePeriodo[i].getDescripcion();
	}
    oVentana.document.body.appendChild(oTabla);
	ocultarCapas();
	mostrarJumbotron();
	
		cancelar();
	}
	else
		alert("No existe un cliente con ese NIF");
}

function obtenerCitasCliente(sCliente){
	var array = oBrico.citas.filter(n=>(n.cliente==sCliente));
	return array;
}

function obtenerCitas(fechaI, fechaF){
	var array = oBrico.citas.filter(n=>(n.fecha>=fechaI.toLocaleDateString() && n.fecha <=fechaF.toLocaleDateString()));
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

function mostrarFormularioCitasCliente(){
	ocultarCapas();
	document.getElementById("divFrmCitasCliente").style.display = "block";
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

function mostrarFormularioModificarDatosCita(){
	var id = document.getElementById("txtModificarCita").value;
	var oCita = oBrico.buscarCita(id);
	if (oCita != null){
		ocultarCapas();
		document.getElementById("txtNumModificarDatosCita").value = oCita.ID;
		document.getElementById("txtFechaModificarDatosCita").value = new Date(oCita.fecha.getTime() + 24*60*60*1000).toISOString().substr(0,10);
		document.getElementById("txtClienteModificarDatosCita").value = oCita.cliente;
		document.getElementById("txtDescripcionModificarDatosCita").value = oCita.descripcion;	
		document.getElementById("divFrmModificarDatosCita").style.display = "block";
	}else
		alert ("El Identificador introducido no corresponde a ninguna cita");
}

function mostrarFormularioModificarDatosMaterial(){
	var id = document.getElementById("txtModificarMaterial").value;
	var oMaterial = oBrico.buscarMaterial(id);
	if (oMaterial != null){
		ocultarCapas();
		document.getElementById("txtCodModificarDatosMaterial").value = id;
		document.getElementById("txtNombreModificarDatosMaterial").value = oMaterial.nombre;
		document.getElementById("txtPrecioModificarDatosMaterial").value = oMaterial.precio;
		document.getElementById("txtDescripcionModificarDatosMaterial").value = oMaterial.descripcion;	
		document.getElementById("divFrmModificarDatosMaterial").style.display = "block";
	}else
		alert ("El código introducido no corresponde a ningún material");
}




function ocultarCapas(){
	borrarCampos();
	var array = document.getElementsByClassName("divFrm");
	for (var i=0;i<array.length;i++)
		array[i].style.display = "none";

	document.getElementById("jumbo").style.display = "none";
}

function cancelar(){
	ocultarCapas();
	mostrarJumbotron();
}

function borrarCampos(){
	limpiarErrores();
	limpiarErrores();
	var citaMod = document.getElementById("txtNumModificarDatosCita").value;
	var clienteMod = document.getElementById("txtDniModificarDatosCliente").value;
	var materialMod = document.getElementById("txtCodModificarDatosMaterial").value;
	var array = document.getElementsByTagName("form");
	for (var i=0;i<array.length;i++)
		array[i].reset();

	document.getElementById("txtNumModificarDatosCita").value = citaMod;
	document.getElementById("txtDniModificarDatosCliente").value =clienteMod;
	document.getElementById("txtCodModificarDatosMaterial").value = materialMod;
	document.getElementById("txtNumCita").value = oBrico.iNumCita;

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
//Validar Modificar cita
function validarModificarCita(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

	 //Validar DNI de cita
    var sDNI = frmModificarDatosCita.txtClienteModificarDatosCita.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmModificarDatosCita.txtClienteCita.classList.add("error");
        frmModificarDatosCita.txtClienteCita.focus();
        sError += "\n El DNI debe contener 8 numeros y una letra final.";
    }

	//Validar fecha
	var sFecha = frmModificarDatosCita.txtFechaModificarDatosCita.value.trim();
   // var oExpReg = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/

    if (sFecha == "") {
        bValido = false;

        frmModificarDatosCita.txtFechaModificarDatosCita.classList.add("error");
        frmModificarDatosCita.txtFechaModificarDatosCita.focus();
        sError += "\n Debe elegir una fecha.";
    }
    //Validar Descripcion 
	var sDes = frmModificarDatosCita.txtDescripcionModificarDatosCita.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sDes) == false) {
        bValido = false;

        frmModificarDatosCita.txtDescripcionModificarDatosCita.classList.add("error");
        frmModificarDatosCita.txtDescripcionModificarDatosCita.focus();
        sError += "\n Añade una descripción.";
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
        sError += "\n Debe elegir una fecha.";
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

function validarModificarCliente(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

	//Validar nombre del cliente
    var sNombre = frmModificarDatosCliente.txtNombreModificarDatosCliente.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmModificarDatosCliente.txtNombreModificarDatosCliente.classList.add("error");
        frmModificarDatosCliente.txtNombreModificarDatosCliente.focus();
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }

    //Validar Direccion del cliente
    var sDireccion = frmModificarDatosCliente.txtDireccionModificarDatosCliente.value.trim();
    oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sDireccion) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmModificarDatosCliente.txtDireccionModificarDatosCliente.focus();
            bValido = false;
        }

        frmModificarDatosCliente.txtDireccionModificarDatosCliente.classList.add("error");

        sError += "\n La direccion es incorrecta.";
    }

    //Validar telefono del cliente 
    var sTelefono = frmModificarDatosCliente.txtTfnoModificarDatosCliente.value.trim();
    oExpReg = /^[679]\d{8}$/;

    if (oExpReg.test(sTelefono) == false) {

        if (bValido == true) { // ==> Primer error detectado en este campo
            frmModificarDatosCliente.txtTfnoModificarDatosCliente.focus();
            bValido = false;
        }

        frmModificarDatosCliente.txtTfnoModificarDatosCliente.classList.add("error");

        sError += "\n El teléfono es incorrecto.";
    }


    
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }

}

function validarBorrarCliente(oEvento){

 var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del Ciente
    var sDNI = frmBorrarCliente.txtBorrarCliente.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmBorrarCliente.txtBorrarCliente.classList.add("error");
        frmBorrarCliente.txtBorrarCliente.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	 if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }
}

function validarBorrarOperario(oEvento){

 var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del operario
    var sDNI = frmBorrarOperario.txtBorrarOperario.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmBorrarOperario.txtBorrarOperario.classList.add("error");
        frmBorrarOperario.txtBorrarOperario.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	 if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }
}

function validarBorrarAdministrativo(oEvento){

 var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del admin
    var sDNI = frmBorrarAdmin.txtBorrarAdmin.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmBorrarAdmin.txtBorrarAdmin.classList.add("error");
        frmBorrarAdmin.txtBorrarAdmin.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
    }
	 if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }
}

function validarBorrarCita(oEvento){

 var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del Ciente
    var sID = frmBorrarCita.txtBorrarCita.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;


    if (oExpReg.test(sID) == false) {
        bValido = false;

        frmBorrarCita.txtBorrarCita.classList.add("error");
        frmBorrarCita.txtBorrarCita.focus();
        sError += " El identificador de cita debe ser un numero entero.";
    }
	 if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }
}

function validarBorrarMaterial(oEvento){

 var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar codigo material
    var sCod = frmBorrarMaterial.txtBorrarMaterial.value.trim();
     var oExpReg = /^[a-zA-Z]{3}\d{3}$/;


    if (oExpReg.test(sCod) == false) {
        bValido = false;

        frmBorrarMaterial.txtBorrarMaterial.classList.add("error");
        frmBorrarMaterial.txtBorrarMaterial.focus();
        sError += " El codigo debe contener 3 letras y 3 numeros.";
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
	var sID = frmAsignarMaterial.txtCitaMatAs.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(sID) == false) {
        bValido = false;
		
        frmAsignarMaterial.txtCitaMatAs.classList.add("error");
        frmAsignarMaterial.txtCitaMatAs.focus();
        sError += " El ID debe ser numérico entre 1 y 9 digitos.";
    }
	

	
	//Validar Cita de Asignar Material
	var sCita = frmAsignarMaterial.txtIDMatAs.value.trim();
    var oExpReg = /^[a-zA-Z]{3}\d{3}$/;

    if (oExpReg.test(sCita) == false) {
        bValido = false;

        frmAsignarMaterial.txtIDMatAs.classList.add("error");
        frmAsignarMaterial.txtIDMatAs.focus();
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

//validar asignar incidencia
function validarAsignarIncidencia(oEvento){
var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

limpiarErrores();

//Validar Cita de Asignar incidencia
	var sCita = frmAltaIncidencia.txtCitaInc.value.trim();
    var oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(sCita) == false) {
        bValido = false;

        frmAltaIncidencia.txtCitaInc.classList.add("error");
        frmAltaIncidencia.txtCitaInc.focus();
        sError += "\n La cita debe ser numérico entre 1 y 9 digitos.";
    }

        //Validar Descripcion 
	var sDes = frmAltaIncidencia.txtDescInc.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sDes) == false) {
        bValido = false;

        frmAltaIncidencia.txtDescInc.classList.add("error");
        frmAltaIncidencia.txtDescInc.focus();
        sError += "\n Añade una descripción.";
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

//Validar Modificar Material
function validarModificarMaterial(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

	//Validar nombre de Alta Material
    var sNombre = frmModificarDatosMaterial.txtNombreModificarDatosMaterial.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{2,50}$/;

    if (oExpReg.test(sNombre) == false) {
        bValido = false;

        frmModificarDatosMaterial.txtNombreModificarDatosMaterial.classList.add("error");
        frmModificarDatosMaterial.txtNombreModificarDatosMaterial.focus();
        sError += "\n El nombre debe ser alfanumérico entre 2 y 50 caracteres.";
    }
	//Validar Precio de Alta Material
	var sPrecio = frmModificarDatosMaterial.txtPrecioModificarDatosMaterial.value.trim();
    var oExpReg = /^\d+(\.\d{1,2})?$/;

    if (oExpReg.test(sPrecio) == false) {
        bValido = false;

        frmModificarDatosMaterial.txtPrecioModificarDatosMaterial.classList.add("error");
        frmModificarDatosMaterial.txtPrecioModificarDatosMaterial.focus();
        sError += "\n El Precio debe ser numérico y contener como maximo 2 decimales.";
    }
	//Validar Descripcion de Alta Material
	var sDes = frmModificarDatosMaterial.txtDescripcionModificarDatosMaterial.value.trim();
    var oExpReg = /^[a-zA-Z0-9\s]{1,50}$/;

    if (oExpReg.test(sDes) == false) {
        bValido = false;

        frmModificarDatosMaterial.txtDescripcionModificarDatosMaterial.classList.add("error");
        frmModificarDatosMaterial.txtDescripcionModificarDatosMaterial.focus();
        sError += "\n Añade una descripción.";
    }
	
    if (bValido == false) {
        // Mostrar errores
        alert(sError);

        //Cancelar submit
        oE.preventDefault();
    }

}

//validar listar cistas cliente
function validarlistarCitasClientes(oEvento) {

    var oE = oEvento || window.event;
    var bValido = true;
    var sError = "";

    limpiarErrores();

    //Validar DNI del cliente
    var sDNI = frmCitasCliente.txtDniCitaCli.value.trim();
    var oExpReg = /^\d{8}[a-zA-Z]$/;

    if (oExpReg.test(sDNI) == false) {
        bValido = false;

        frmCitasCliente.txtDniCitaCli.classList.add("error");
        frmCitasCliente.txtDniCitaCli.focus();
        sError += " El DNI debe contener 8 numeros y una letra final.";
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

	var array = document.getElementsByClassName("error");
	for (var i=0;i<array.length;i++)
		array[i].classList.remove("error");

	array = document.getElementsByClassName("error");
	for (var i=0;i<array.length;i++)
		array[i].classList.remove("error");

}

