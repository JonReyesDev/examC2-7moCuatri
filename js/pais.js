const inputRange = document.getElementById('rango');
const valorMostrado = document.getElementById('valorMostrado');


document.getElementById('seleccionPais').addEventListener('input', function () {
    const selectedIndex = parseInt(this.value) - 1;

    // Cargar el archivo paises.json
    fetch('paises.json')
        .then(response => response.json())
        .then(data => {
            const pais = data[selectedIndex];
            const info = `País: ${pais.pais}<br>Moneda: ${pais.moneda}<br>Valor de Cambio: ${pais.valor_cambio}`;
            document.getElementById('paisInfo').innerHTML = info;
            const valor = seleccionPais.value;
            valorMostrado.textContent = valor
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
