//Primer api requerida. Divisas.
function apiDivisasDolar(){
	const api = new XMLHttpRequest();
	var url = 'https://mindicador.cl/api/dolar'; 
	api.open('GET', url, true);
	api.send();
	
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4) 
		{
			var d = JSON.parse(this.responseText);
			document.getElementById("tdCodigo").innerHTML = d.codigo;
			document.getElementById("tdFecha").innerHTML = d.serie[0].fecha;
			document.getElementById("tdNombre").innerHTML = d.nombre;
			document.getElementById("tdUM").innerHTML = d.unidad_medida;
			document.getElementById("tdValor").innerHTML = d.serie[0].valor;

		}
		if(this.status == 500) 
		{
			document.getElementById("lblMsj").innerHTML ='No se encontraron datos.'; 
			setTimeout(limpiarMsj, 5000);
		}
	}

}

//Segunda api requerida. Buscar divisa.
function apiDivisasBuscar(){
	var divisa = document.getElementById("buscar").value;
	const api = new XMLHttpRequest();
	var url = 'https://mindicador.cl/api/' + divisa; 
	api.open('GET', url, true);
	api.send();
	document.getElementById("lblMsj").innerHTML ='Procesando'; 

	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4) 
		{
			setTimeout(limpiarMsj, 1000);
			
			var d = JSON.parse(this.responseText);
			document.getElementById("tdCodigo1").innerHTML = d.codigo;
			document.getElementById("tdFecha1").innerHTML = d.serie[0].fecha;
			document.getElementById("tdNombre1").innerHTML = d.nombre;
			document.getElementById("tdUM1").innerHTML = d.unidad_medida;
			document.getElementById("tdValor1").innerHTML = d.serie[0].valor;

		}
		if(this.status == 500) 
		{
			document.getElementById("lblMsj").innerHTML ='No se encontraron datos.'; 
			setTimeout(limpiarMsj, 5000);
		}

	}

}

//Tercer api requerida. Usuario random.
function apiRandomUser(){
	
	const api = new XMLHttpRequest();
	var url = 'https://randomuser.me/api'; 
	api.open('GET', url, true);
	api.send();

	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4) 
		{
			
			var d = JSON.parse(this.responseText);
			document.getElementById("tdNombre2").innerHTML = d.results[0].name.first;
			document.getElementById("tdSegNom").innerHTML = d.results[0].name.last;
			document.getElementById("tdNomenc").innerHTML = d.results[0].name.title;
			document.getElementById("tdImagen").innerHTML = '<img src=' + d.results[0].picture.medium + '>';

		}
		if(this.status == 500) 
		{
			document.getElementById("lblMsj").innerHTML ='No se encontraron datos.'; 
			setTimeout(limpiarMsj, 5000);
		}

	}

}

//Cuarta api requerida. Mercado Libre. 
function apiMercado(){
	const api = new XMLHttpRequest();
	var item = document.getElementById("buscarI").value;
	var url = 'https://api.mercadolibre.com/sites/MLU/search?q=' + item; 
	api.open('GET', url, true);
	api.send();

	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4) 
		{
			var tabla = document.getElementById("tblApiM");
			tabla.innerHTML = "";
			for (var i = 0; i < 3; i++) {
				var d = JSON.parse(this.responseText);

      			var f = "<tr><td>" + d.results[i].title + "</td><td>" +	d.results[i].currency_id  +"</td><td>" + d.results[i].price + "</td><td> <img style='width:150px;height:80px' src="+ d.results[i].thumbnail +"> </td></tr>";
				
				var r = document.createElement("TR");
   				r.innerHTML=f;
   	 			document.getElementById("tblApiM").appendChild(r);

			}
		}
		if(this.status == 500) 
		{
			document.getElementById("lblMsj").innerHTML ='No se encontraron datos.'; 
			setTimeout(limpiarMsj, 5000);
		}

	}
}

//Quinta api requerida.
function apiIp(){
	const api = new XMLHttpRequest();
	var url = 'http://api.ipapi.com/186.54.148.131?access_key=6b8c565d7757c65b442c9d9d49827ecf'; 
	api.open('GET', url, true);
	api.send();

	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4) 
		{
			
			var d = JSON.parse(this.responseText);
			document.getElementById("tdIP").innerHTML= d.ip;
			document.getElementById("tdCodPais").innerHTML= d.country_code;
			document.getElementById("tdPais").innerHTML= d.country_name;
			document.getElementById("tdBandera").innerHTML='<img alt= "Bandera" style="width:100px;height:60px" src=' + d.location["country_flag"] + '>';


		}
		if(this.status == 500) 
		{
			document.getElementById("lblMsj").innerHTML ='No se encontraron datos.'; 
			setTimeout(limpiarMsj, 5000);
		}

	}
}

//Ejecuta las dos funciones al cargarse la pagina principal.html.
function funcOnload()
{
	apiDivisasDolar();
	apiRandomUser();
}

//Limpia parrafo para mensajes de error.
function limpiarMsj(){
	document.getElementById("lblMsj").innerHTML = "";
}

function volver(){
	window.open("PRINCIPAL.html","_blank");
	window.close("SECUNDARIO.html");
}


