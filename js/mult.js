// Función para generar la tabla de multiplicar y mostrarla en imágenes
document.getElementById('tablaMultiplicar').addEventListener('change', function () {
    const selectedValue = parseInt(this.value);
    const tablaImagenes = document.getElementById('tablaImagenes');
    tablaImagenes.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const resultado = selectedValue * i;
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/100x100?text=${selectedValue}x${i}=${resultado}`;
        img.alt = `${selectedValue}x${i}=${resultado}`;
        tablaImagenes.appendChild(img);
    }
});