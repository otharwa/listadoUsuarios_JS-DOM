/*
 * Arca Sebastian
 */
 
var formulario = document.getElementsByTagName('form')[0];
formulario.onsubmit=agregar;

var selec_tabla = document.getElementsByTagName('table')[0];

function agregar(){
	var input_nombre = document.getElementById('nombre');	
	var aprobado = document.getElementsByTagName('input')[1];
	aprobado = aprobado.checked; //devuelve true o false	
	
	if(input_nombre.value == ""){alert('Complete El Campo Alumno'); return false;}	
	
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = td1.cloneNode(false);
	var td3 = td1.cloneNode(false);
	
	var link1 = document.createElement('a');
	link1.setAttribute('href','#');
	var link2 = link1.cloneNode(false);
	var span1 = document.createElement('span');
	
	var nombre = document.createTextNode(input_nombre.value);
	switch(aprobado){
		case true:var estado_materia = document.createTextNode('Aprobado'); break;
		case false:var estado_materia = document.createTextNode('Desaprobado'); break;		
	}
	
	link1.className='text-success';
	link2.className='btn btn-mini btn-danger';
	span1.className='icon-remove icon-white';
	link1.onclick=cambiar;
	link2.onclick=remover;
	
	selec_tabla.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	td1.appendChild(nombre);
	td2.appendChild(link1);
	link1.appendChild(estado_materia);
	td3.appendChild(link2);
	link2.appendChild(span1);
	
		
	return false;
}

function cambiar(){
		var estado_materia = this.innerHTML;
		switch(estado_materia){
			case 'Aprobado':this.innerHTML='Desaprobado';break;
			case 'Desaprobado':this.innerHTML='Aprobado';break;			
			}
	}
	
function remover(){
		console.log(this.parentNode);
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	}