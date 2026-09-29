function cambiarColor() {
    const colores = [
        "#e8f5e9",
        "#e3f2fd",
        "#fff8e1",
        "#f3e5f5",
        "#e0f7fa"
    ];

    const colorAleatorio =
        colores[Math.floor(Math.random() * colores.length)];

    document.body.style.backgroundColor = colorAleatorio;
}
