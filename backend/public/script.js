document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            saveLocation, 
            (error) => errorSaveLocation(content),
            options
        );
    } else {
        console.log('Erro ao obter localização');
    };
});

function saveLocation(position) {
    const {latitude, longitude} = position.coords;
    console.log(latitude.toString());
    console.log(longitude.toString());
}

function errorSaveLocation(content) {
    content.textContent = 'Não foi possível obter a localização';
    content.style.color = 'red';
}

const options = {
    enableHighAccuracy: true
};
