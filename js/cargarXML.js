var oXML = loadXMLDoc("UPOBRICO.xml");
cargarClientes();
cargarOperarios();
cargarMateriales();
cargarAdministrativos();
cargarCitas();

//Cargar datos de xml
function loadXMLDoc(filename)
    {
        if (window.XMLHttpRequest)
        {
            xhttp=new XMLHttpRequest();
        }
        else // code for IE5 and IE6
        {
            xhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET",filename,false);

        xhttp.send();

        return xhttp.responseXML;
    }
	
function cargarClientes(){
	var oCliente = oXML.querySelectorAll("cliente");
	
	for(var i=0; i<oCliente.length; i++)
	{
		var oNIF = oCliente[i].querySelector("NIF").textContent;
		var oNombre = oCliente[i].querySelector("NOMBRE").textContent;
		var oDireccion = oCliente[i].querySelector("Direccion").textContent;
		var oTelefono = oCliente[i].querySelector("Telefono").textContent;
		
		oBrico.altaCliente(new Cliente(oNIF, oNombre, oDireccion, oTelefono));
	}
}

function cargarOperarios(){
	var oOperario = oXML.querySelectorAll("operario");
	
	for(var i=0; i<oOperario.length; i++)
	{
		var oNIF = oOperario[i].querySelector("NIF").textContent;
		var oNombre = oOperario[i].querySelector("NOMBRE").textContent;
		
		oBrico.altaOperario(new Operario(oNIF, oNombre));
	}
}

function cargarMateriales(){
	var oMaterial = oXML.querySelectorAll("material");
	
	for(var i=0; i<oMaterial.length; i++)
	{
		var oID = oMaterial[i].querySelector("ID").textContent;
		var oNombre = oMaterial[i].querySelector("NOMBRE").textContent;
		var oPrecio = oMaterial[i].querySelector("PRECIO").textContent;
		var oDescripcion = oMaterial[i].querySelector("DESCRIPCION").textContent;
		
		oBrico.altaMaterial(new Material(oID,oNombre,oPrecio,oDescripcion));
	}
}

function cargarAdministrativos(){
	var oAdministrativo = oXML.querySelectorAll("administrativo");
	
	for(var i=0; i<oAdministrativo.length; i++)
	{
		var oNIF = oAdministrativo[i].querySelector("NIF").textContent;
		var oNombre = oAdministrativo[i].querySelector("NOMBRE").textContent;
		
		oBrico.altaAdministrativo(new Administrativo(oNIF, oNombre));
	}
}

function cargarCitas(){
	var oCita = oXML.querySelectorAll("cita");
	
	for(var i=0; i<oCita.length; i++)
	{
		var oID = oCita[i].querySelector("ID").textContent;
		var oFecha = oCita[i].querySelector("FECHA").textContent;
		var oCliente = oCita[i].querySelector("CLIENTE").textContent;
		var oDescripcion = oCita[i].querySelector("DESCRIPCION").textContent;
		var oMateriales = oCita[i].querySelectorAll("MATERIAL");
		var aMateriales = new Array();
		//Recorremos todos los materiales de cada cita
		for(var a=0; a<oMateriales.length; a++){
			aMateriales.push(oMateriales[a].textContent);
		}
		var oIncidencias = oCita[i].querySelectorAll("INCIDENCIA");
		var aIncidencias = new Array();
		//Recorremos todos las incidencias de cada cita
		for(var a=0; a<oIncidencias.length; a++){
			aIncidencias.push(oIncidencias[a].textContent);
		}
		var oOperarios = oCita[i].querySelectorAll("OPERARIO");
		var aOperarios = new Array();
		//Recorremos todos los operarios de cada cita
		for(var a=0; a<oOperarios.length; a++){
			aOperarios.push(oOperarios[a].textContent);
		}
		
		oBrico.altaCita(new Cita(oID,oNombre,oPrecio,oDescripcion,aMateriales,aIncidencias,aOperarios));
	}
}
