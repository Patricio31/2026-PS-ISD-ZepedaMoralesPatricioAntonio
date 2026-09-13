/* Vamos a programar un cliente, mediante el cual vamos a probat la arquitectura cliente-servidor por medio de una peticion mediante protocolo hhtp utilizando metido get a la ruta: /api/talleres

Tenemos que conectarnos al servibio de la BD
El rpoblema es como apuntar al backend
*/

const API_URL = 
"https://proyectobackcecyt9.onrender.com"// cambia esto segun la URL de tu backend

async function main(){

    consol.log("Cliente Peticion Get -> a ${API_URL}/api/talleres");

    const inicio = Date.now();
    const respuesta = await fetch(${API_URL}/api/talleres);// nis da el tiempo de ude¿a y vuelta por medio de la petivion mediate RTT
    
    const duracionMs = Date.now() - inicio;
    //un status de error de 500 seria una respuesta valida si el servicio de la BD no esta disponible
    const cuerpo = await respuesta.json();
    console.log("Ciclo de peticion - respuesta");
    console.log("Protocolo HTTPS sobre TCP : ${respuesta.url}");
    console.log()

}

