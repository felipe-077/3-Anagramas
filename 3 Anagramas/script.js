function verificarAnagrama() {

    const cadena1 = document.getElementById("cadena1").value;
    const cadena2 = document.getElementById("cadena2").value;

    document.getElementById("resultado").textContent = "";

    if (sonAnagramas(cadena1, cadena2)) {
        document.getElementById("resultado").textContent = "Son anagramas";
    } else {
        document.getElementById("resultado").textContent = "No son anagramas";
    }
}

function sonAnagramas(cadena1, cadena2) {

    cadena1 = cadena1.replace(/\s/g, "").toLowerCase();
    cadena2 = cadena2.replace(/\s/g, "").toLowerCase();

    if (cadena1.length !== cadena2.length) {
        return false;
    }

    return cadena1.split("").sort().join("") === cadena2.split("").sort().join("");
}