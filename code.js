// Finished project

const generate = document.querySelector('.generate');
const qrImage = document.getElementById('qrImg')
const input = document.querySelector('.input');

function getApi() {
    
    generate.addEventListener('click', () => {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        input.value = '';
    })
}

getApi();