function kolory() {
    
    var h = document.getElementById("kolor").value;
    var table = document.querySelector('table');
    var kolorTabeli = table.querySelectorAll('td');

    for (var i = 0; i<kolorTabeli.length; i++) {
        if (i === 0){
            kolorTabeli[i].style.backgroundColor = "hsl(" + h + ", 100%, 50%)";
        }
        else if (i === 1) {
            kolorTabeli[i].style.backgroundColor = "hsl(" + h + ", 80%, 50%)";
        }
        else if (i === 2) {
            kolorTabeli[i].style.backgroundColor = "hsl(" + h + ", 60%, 50%)";
        }
        else if (i === 3) {
            kolorTabeli[i].style.backgroundColor = "hsl(" + h + ", 40%, 50%)";
        }
        else {
            kolorTabeli[i].style.backgroundColor = "hsl(" + h + ", 20%, 50%)";
        }
    }
}
