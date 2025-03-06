// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = []; // Array para almacenar los nombres de amigos

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Obtener el valor del input y eliminar espacios

    if (nombre === '') { // Validar que el campo no esté vacío
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ''; // Limpiar el campo de entrada
    mostrarLista(); // Actualizar la lista visible
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de mostrarla

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo; // Crear un nuevo elemento de lista
        lista.appendChild(li); // Agregar el elemento a la lista
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya amigos en la lista
        alert('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Seleccionar un índice aleatorio
    const amigoSeleccionado = amigos[indiceAleatorio]; // Obtener el amigo seleccionado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSeleccionado}</li>`; // Mostrar el resultado

    const sonido = document.getElementById('sonidoRuleta'); // Obtener el elemento de audio
    sonido.currentTime = 0; // Reiniciar el sonido
    sonido.play(); // Reproducir el sonido
}
