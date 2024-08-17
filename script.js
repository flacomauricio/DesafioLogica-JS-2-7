function ingresoDatos(){

    // Capturar información del usuario
    const nombre = prompt("¿Cuál es tu nombre?");
    const edad = prompt("¿Cuántos años tienes?");
    const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

     // mensaje personalizado
     const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;

     // Mostrar el mensaje en un alert y en el HTML
     alert(mensaje);
     document.getElementById("mensaje").innerText = mensaje;

     // Pregunta adicional
     const respuestaUsuario = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

     if (respuestaUsuario == 1) {
        const respuestaPositiva = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
        alert(respuestaPositiva);
        console.log(respuestaPositiva);
        document.getElementById("mensaje").innerText += `\n${respuestaPositiva}`;
    }

    if (respuestaUsuario == 2) {
        const respuestaNegativa = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
        alert(respuestaNegativa);
        console.log(respuestaNegativa);
        document.getElementById("mensaje").innerText += `\n${respuestaNegativa}`;
    }


}