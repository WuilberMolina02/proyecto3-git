function mostrarEstadisticas(piloto) {
     if (piloto === 1) {
    document.getElementById("estadisticas1").textContent =
        "Carreras: 10 | Puntos: 250";
    }
 
    if (piloto === 2) {
        document.getElementById("estadisticas2").textContent =
            "Carreras: 7 | Puntos: 180";
    }
}
