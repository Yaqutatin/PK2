function changeBackground() {
    var input = document.getElementById('backgroundInput');
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
    }

    reader.readAsDataURL(file);
}
