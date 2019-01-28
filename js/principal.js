// programa principal
ocultarCapas();
mostrarJumbotron();

// funciones

// funciones para el tratamiento de capas
function mostrarFormularioCliente(){
	ocultarCapas();
	document.getElementById("divFrmCliente").style.display = "block";
	
}

function mostrarFormularioOperario(){
	ocultarCapas();	
	document.getElementById("divFrmOperario").style.display = "block";
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
	borrarCamposCita();
	borrarCamposAsignarMaterial();
	borrarCamposAsignarOperario();
	borrarCamposFechaCitas();
}

function salir(){
	window.location = "http://google.com";
}