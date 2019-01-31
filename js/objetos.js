// archivo con las clases

function Brico(){
	this.clientes = [];
	this.citas = [];
	this.operarios = [];
	this.materiales = [];	
	this.iNumCita=1;
	this.administrativos = [];

}

Brico.prototype.getCita = function(){
	return this.iNumCita;
}


Brico.prototype.buscar = function(sNIF,lista){

	var oObjeto = null;
	var array = lista.filter(n => n.NIF == sNIF);


	if (array.length > 0){
		oObjeto = array[0];
	}

	return oObjeto;    
}

Brico.prototype.altaCliente = function(oCliente){

	var sRespuesta = "Ya existe un cliente con ese NIF en la base de datos ";
	if(this.buscar(oCliente.NIF,this.clientes)==null){
		this.clientes.push(oCliente);
		sRespuesta = "Cliente dado de alta satisfactoriamente"; 	
	}
	return sRespuesta;
}

Brico.prototype.altaOperario = function(oOperario){

	var sRespuesta = "No se ha podido dar de alta al operario";
	if(this.buscar(oOperario.NIF,this.operarios)==null){
		this.operarios.push(oOperario);
		sRespuesta = "Operario dado de alta satisfactoriamente"; 	
	}
	return sRespuesta;
}

Brico.prototype.altaAdministrativo = function(oAdministrativo){

	var sRespuesta = "No se ha podido dar de alta al administrativo";
	if(this.buscar(oAdministrativo.NIF,this.administrativos)==null){
		this.administrativos.push(oAdministrativo);
		sRespuesta = "Administrativo dado de alta satisfactoriamente"; 	
	}
	return sRespuesta;
}

Brico.prototype.altaMaterial = function(oMaterial){

	var sRespuesta = "No se ha podido dar de alta el material";
	if(this.buscarMaterial(oMaterial.ID)==null){
		this.materiales.push(oMaterial);
		sRespuesta = "Material dado de alta satisfactoriamente"; 	
	}
	return sRespuesta;
}

Brico.prototype.buscarMaterial = function(sID){

	var oMaterial = null;
	var array = this.materiales.filter(n => n.ID == sID);

	if (array.length > 0)
		oMaterial = array[0];

	return oMaterial;    
}
Brico.prototype.buscarCita = function(sID){

	var oCita = null;
	var array = this.citas.filter(n => n.ID == sID);
	
		
	if (array.length > 0)
		oCita = array[0];

	return oCita;    
}
Brico.prototype.altaCita = function(oCita){

	var sRespuesta = "No se ha podido crear la cita. El cliente no existe.";
	if(this.buscar(oCita.cliente,this.clientes)!=null){
		this.citas.push(oCita);
		this.iNumCita++;
		sRespuesta = "Cita creada satisfactoriamente"; 	
	}
	return sRespuesta;
}

Brico.prototype.asignarMaterial = function(oAsignarMaterial){

	var sRespuesta = "No se ha podido Asignar el material";
	if(this.buscarMaterial(oAsignarMaterial.ID)==null){
		this.material.push(oAsignarMaterial);
		sRespuesta = "Material asignado satisfactoriamente"; 	
	}
	return sRespuesta;
}

Brico.prototype.asignarOperario = function(oAsignarOperario){

	var sRespuesta = "No se ha podido Asignar el Operario";
	if(this.buscarMaterial(oAsignarOperario.ID)==null){
		this.operario.push(oAsignarOperario);
		sRespuesta = "Operario asignado satisfactoriamente"; 	
	}
	return sRespuesta;
}

Brico.prototype.asignarAdmin = function(oAsginarAdmin){

	var sRespuesta = "No se ha podido Asignar el Operario";
	if(this.buscarMaterial(oAsginarAdmin.ID)==null){
		this.operario.push(oAsginarAdmin);
		sRespuesta = "Operario asignado satisfactoriamente"; 	
	}
	return sRespuesta;
}

class Cliente{
	constructor(sNIF,sNombre,sDireccion,iTelefono) {
		this.NIF = sNIF;
		this.nombre = sNombre ;
		this.direccion = sDireccion;
		this.telefono = iTelefono ;
	}

	getNif(){
		return this.NIF;
	}

	getNombre(){
		return this.nombre;
	}
	
	getDireccion(){
		return this.direccion;
	}
	
	getTelefono(){
		return this.telefono;
	}
}	

class Operario{
	constructor(sNIF,sNombre) {
		this.NIF = sNIF;
		this.nombre = sNombre ;
	}

	getNif(){
		return this.NIF;
	}

	getNombre(){
		return this.nombre;
	}
}	

class Cita{
	constructor(iID,dFecha,sCliente,sDescripcion) {
		this.ID = iID;
		this.fecha = dFecha;
		this.cliente = sCliente;
		this.descripcion = sDescripcion;
		this.materiales = [];
		this.incidencias = [];
		this.operarios = [];
		this.administrativos = null;		
	}

	getID(){
		return this.ID;
	}
	getFecha(){
		return this.fecha;
	}
	getCliente(){
		return this.cliente;
	}
	getDescripcion(){
		return this.descripcion;
	}
}

class Material{
	constructor(sID,sNombre,fPrecio,sDescripcion){
		this.ID = sID;
		this.nombre = sNombre;
		this.precio = fPrecio;
		this.descripcion = sDescripcion;
	}
	getID(){
		return this.ID;
	}
	getNombre(){
		return this.nombre;
	}
	getPrecio(){
		return this.precio;
	}
	getDescripcion(){
		return this.descripcion;
	}
}


class Incidencia{
	constructor(sID,sCita,sDescripcion){
		this.ID = sID;
		this.cita = sCita;
		this.descripcion = sDescripcion;
	}
}

class Administrativo{
	constructor(sNIF,sNombre) {
		this.NIF = sNIF;
		this.nombre = sNombre ;
	}
}