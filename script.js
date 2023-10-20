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
    alert("archivo cargado");
}
