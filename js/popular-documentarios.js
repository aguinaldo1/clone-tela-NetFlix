$(document).ready(function () {
    const documentarios = [
        {
            titulo: "Nosso Planeta",
            imagem: "https://via.placeholder.com/300x450?text=Nosso+Planeta"
        },
        {
            titulo: "O Dilema das Redes",
            imagem: "https://via.placeholder.com/300x450?text=Dilema+das+Redes"
        },
        {
            titulo: "Explicando",
            imagem: "https://via.placeholder.com/300x450?text=Explicando"
        },
        {
            titulo: "Coded Bias",
            imagem: "https://via.placeholder.com/300x450?text=Coded+Bias"
        }
    ];

    documentarios.forEach(d => {
        $('#carrosel-documentarios').append(`
            <div class="item">
                <img src="${d.imagem}" alt="${d.titulo}">
                <h3>${d.titulo}</h3>
            </div>
        `);
    });

    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: { items: 1 },        // Para telas até 600px mostra 1 item
        600: { items: 2 },      // Para telas até 1000px mostra 2 itens
        1000: { items: 4 }      // Para telas maiores mostra 4 itens
    }
});
});
