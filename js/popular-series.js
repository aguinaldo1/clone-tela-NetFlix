$(document).ready(function () {
    const filmes = [
        {
            titulo: "A Origem",
            imagem: "https://via.placeholder.com/300x450?text=A+Origem"
        },
        {
            titulo: "Interestelar",
            imagem: "https://via.placeholder.com/300x450?text=Interestelar"
        },
        {
            titulo: "O Senhor dos Anéis",
            imagem: "https://via.placeholder.com/300x450?text=O+Senhor+dos+Anéis"
        },
        {
            titulo: "Matrix",
            imagem: "https://via.placeholder.com/300x450?text=Matrix"
        }
    ];

    filmes.forEach(f => {
        $('#carrosel-filmes').append(`
            <div class="item">
                <img src="${f.imagem}" alt="${f.titulo}">
                <h3>${f.titulo}</h3>
            </div>
        `);
    });

    $('#carrosel-filmes').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    });
});
