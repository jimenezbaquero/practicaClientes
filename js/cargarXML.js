var oXML = loadXMLDoc("./XML/UPOBRICO.xml");
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
	var oClientes = oXML.querySelector("CLIENTES");
	var arrayClientes = oClientes.querySelectorAll("CLIENTE");
	
	for(var i=0; i<arrayClientes.length; i++)
	{
		var oNIF = arrayClientes[i].querySelector("NIF").textContent;
		var oNombre = arrayClientes[i].querySelector("NOMBRE").textContent;
		var oDireccion = arrayClientes[i].querySelector("DIRECCION").textContent;
		var oTelefono = arrayClientes[i].querySelector("TELEFONO").textContent;
		
		oBrico.altaCliente(new Cliente(oNIF, oNombre, oDireccion, oTelefono));
	}
}

function cargarOperarios(){
	var oOperarios = oXML.querySelector("OPERARIOS");
	var arrayOperarios = oOperarios.querySelectorAll("OPERARIO"); 
	
	for(var j=0; j<arrayOperarios.length; j++)
	{
		var oNIF = arrayOperarios[j].querySelector("NIF").textContent;
		var oNombre = arrayOperarios[j].querySelector("NOMBRE").textContent;
		
		oBrico.altaOperario(new Operario(oNIF, oNombre));
	}
}

function cargarMateriales(){
	var oMaterial = oXML.querySelector("MATERIALES");
	var arrayMateriales = oMaterial.querySelectorAll("MATERIAL");

	for(var i=0; i<arrayMateriales.length; i++)
	{
		var oID = arrayMateriales[i].querySelector("CODIGO").textContent;
		var oNombre = arrayMateriales[i].querySelector("NOMBRE").textContent;
		var oPrecio = arrayMateriales[i].querySelector("PRECIO").textContent;
		var oDescripcion = arrayMateriales[i].querySelector("DESCRIPCION").textContent;
		
		oBrico.altaMaterial(new Material(oID,oNombre,oPrecio,oDescripcion));
	}
}

function cargarAdministrativos(){
	var oAdministrativo = oXML.querySelector("ADMINISTRATIVOS");
	var arrayAdmin = oAdministrativo.querySelectorAll("ADMINISTRATIVO");

	
	for(var i=0; i<arrayAdmin.length; i++)
	{
		var oNIF = arrayAdmin[i].querySelector("NIF").textContent;
		var oNombre = arrayAdmin[i].querySelector("NOMBRE").textContent;
		
		oBrico.altaAdministrativo(new Administrativo(oNIF, oNombre));
	}
}

function cargarCitas(){
	var oCita = oXML.querySelector("CITAS");
	var arrayCitas = oCita.querySelectorAll("CITA");
	var cita = null;

	for(var i=0; i<arrayCitas.length; i++)
	{
		var oID = arrayCitas[i].querySelector("ID").textContent;
		var oFecha = arrayCitas[i].querySelector("FECHA").textContent;
		var oCliente = arrayCitas[i].querySelector("CLIENTE").textContent;
		var oDescripcion = arrayCitas[i].querySelector("DESCRIPCION").textContent;
		var oAdministrativo = arrayCitas[i].querySelector("ADMINISTRATIVO").textContent;
		var oMateriales = arrayCitas[i].querySelector("MATERIALES");
		var arrayMateriales = oMateriales.querySelectorAll("MATERIAL");
		var materiales = [];
		for (var t=0;t<arrayMateriales.length;t++){
			materiales.push(arrayMateriales[t].textContent);
		}
		//Recorremos todos los materiales de cada cita
		
		var oIncidencias = arrayCitas[i].querySelector("INCIDENCIAS");
		var arrayIncidencias = oIncidencias.querySelectorAll("INCIDENCIA")
		var incidencias = [];
		for(var a=0; a<arrayIncidencias.length; a++){
			incidencias.push(new Incidencia(arrayIncidencias[a].querySelector("NUMERO").textContent,oID,arrayIncidencias[a].querySelector("DESCRIPCION").textContent))	
		}
		var oOperarios = arrayCitas[i].querySelector("OPERARIOS");
		var arrayOperarios = oOperarios.querySelectorAll("OPERARIO");
		var operarios = [];
		for (var t=0;t<arrayOperarios.length;t++){
			operarios.push(arrayOperarios[t].textContent);
		}

		

		
		
		cita =new Cita(oID,new Date(oFecha),oCliente,oDescripcion);
		cita.materiales = materiales;
		cita.operarios = operarios;
		cita.incidencias = incidencias;
		cita.administrativos = oAdministrativo;

		oBrico.altaCita(cita);

	}
}
