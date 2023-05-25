// Función para mostrar los comentarios almacenados en localStorage
function mostrarComentarios() {
    var comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    var comentariosContainer = document.getElementById('comentarios-container');
    comentariosContainer.innerHTML = '';
  
    for (var i = 0; i < comentarios.length; i++) {
      var comentarioDiv = document.createElement('div');
      comentarioDiv.innerHTML = '<strong>' + comentarios[i].nombre + '</strong>: ' + comentarios[i].comentario;
      comentariosContainer.appendChild(comentarioDiv);
    }
  }
  
  // Función para agregar un nuevo comentario
  function agregarComentario(event) {
    event.preventDefault();
  
    var nombreInput = document.getElementById('nombre');
    var comentarioInput = document.getElementById('comentario');
  
    var nombre = nombreInput.value;
    var comentario = comentarioInput.value;
  
    var comentarioNuevo = {
      nombre: nombre,
      comentario: comentario
    };
  
    var comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentarios.push(comentarioNuevo);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  
    nombreInput.value = '';
    comentarioInput.value = '';
  
    mostrarComentarios();
  }
  
  // Event listener para el formulario de comentarios
  var comentarioForm = document.getElementById('comentario-form');
  comentarioForm.addEventListener('submit', agregarComentario);
  
  // Función para limpiar los comentarios almacenados en localStorage
  function limpiarComentarios() {
    localStorage.removeItem('comentarios');
    mostrarComentarios();
  }
  
  // Event listener para el botón de limpiar comentarios
  var limpiarComentariosButton = document.getElementById('limpiar-comentarios');
  limpiarComentariosButton.addEventListener('click', limpiarComentarios);
  
  // Mostrar los comentarios al cargar la página
  mostrarComentarios();
  