function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const message = document.getElementById('message');

    if (fileInput.files.length === 0) {
        message.innerHTML = 'Por favor, selecciona un archivo.';
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('archivo', file);

    // Aquí puedes usar fetch o cualquier método para enviar el archivo al servidor.
    // Por ejemplo, puedes usar fetch para enviarlo a una API.
    // Reemplaza 'URL_DE_TU_API' con la URL de tu servidor.
    // fetch('URL_DE_TU_API', {
    //     method: 'POST',
    //     body: formData,
    // })
    // .then(response => response.json())
    // .then(data => {
    //     message.innerHTML = data.message;
    // })
    // .catch(error => {
    //     message.innerHTML = 'Hubo un error al subir el archivo.';
    // });
}
