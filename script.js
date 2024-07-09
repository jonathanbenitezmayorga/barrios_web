// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Simular carga de datos del barrio
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const barrioId = urlParams.get('id');

    if (barrioId) {
        fetch(`https://api.example.com/barrios/${barrioId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('barrio-name').textContent = data.nombre;
                const barrioInfoElement = document.getElementById('barrio-info');
                barrioInfoElement.innerHTML = `
                    <p><strong>Descripción:</strong> ${data.descripcion}</p>
                    <p><strong>Población:</strong> ${data.poblacion}</p>
                    <!-- Agregar más detalles -->
                `;
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});

