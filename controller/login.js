back.addEventListener('click', () => {
    location.href = "../index.html"
})

var eye3 = document.getElementById('eye2')
eye3.style.display = "none"

var eye = document.getElementById('eye')

eye.addEventListener('click', () => {
    var pass = document.getElementById('contra').value
    var pass2 = document.getElementById('contra')
    if (pass.length != 0) {
        var eye2 = document.getElementById('eye')
        eye2.style.display = "none"
        eye3.style.display = "block"
        pass2.type = "text"
    }
    else {
        alert("Debes colocar primero la contraseña")
    }
})

eye3.addEventListener('click', () => {
    var pass = document.getElementById('contra').value
    var pass2 = document.getElementById('contra')
    var eye2 = document.getElementById('eye')
    eye2.style.display = "block"
    eye3.style.display = "none"
    pass2.type = "password"
})