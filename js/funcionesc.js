function validar() {
var texto=document.getElementById("titulo").value;

if (texto.length<4) {
    alert("ERROR FATAL");



}


}

function cargagen() {

var lista_generos=["Fantástico", "Histórico", "Documental"];
var objeto_select=document.getElementById("genero");

for (i=0; i<lista_generos.length; i++)
{
var obj_opt=document.createElement("option");
obj_opt.innerHTML=lista_generos[i];
objeto_select.appendChild(obj_opt);

}



}
function mensaje() {
var texto=document.getElementById("titulo").value;
var objeto_select=document.getElementById("genero").value;
alert("Se va a registrar la película con título " +  texto +  " y de género " + objeto_select);


}