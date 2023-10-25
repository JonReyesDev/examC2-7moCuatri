// Función para manejar el cambio en el input de tipo archivo
document.getElementById('inputFile').addEventListener('change', function (e) {
    const file = e.target.files[0];

    if (file) {
        // Crear un objeto URL para la imagen seleccionada
        const imageUrl = URL.createObjectURL(file);

        // Mostrar la imagen en la etiqueta img
        document.getElementById('imagePreview').src = imageUrl;
    } else {
        // Si no se selecciona ningún archivo, mostrar una imagen por defecto o borrar la imagen actual
        document.getElementById('imagePreview').src = '';
    }
});