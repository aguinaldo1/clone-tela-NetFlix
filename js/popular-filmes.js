const API_KEY = 'cbd611f029194220e4b922fd5bf9e91d';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w1280';

$(document).ready(function () {
    const $carroselDestaques = $('#carrosel-destaques');
    const $carroselPopulares = $('.owl-carousel');

    $.get(API_URL)
        .done(function (response) {
            const filmes = response.results;

            // Carregar filme destaque
            if (filmes.length > 0) {
                const filmeDestaque = filmes[0];
                $("#imagem-destaque").attr("src", BASE_IMAGE_URL + filmeDestaque.backdrop_path);
                $("#titulo-destaque").text(filmeDestaque.title);
                $("#sinopse-destaque").text(filmeDestaque.overview);
                $("#botao-trailer-destaque").data("id", filmeDestaque.id);
            }

            // Carregar carrossel de filmes em destaque
            filmes.slice(0, 5).forEach(filme => {
                const poster = filme.backdrop_path ? BASE_IMAGE_URL + filme.backdrop_path : "img/default.jpg";
                const itemHTML = `
                    <div class="item">
                        <img src="${poster}" alt="Imagem do Filme">
                    </div>
                `;
                $carroselDestaques.append(itemHTML);
            });

            // Inicializar carrossel de destaques
            $carroselDestaques.owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                items: 3
            });

            // Carregar carrossel de filmes populares
            filmes.forEach(filme => {
                const poster = filme.poster_path ? BASE_IMAGE_URL + filme.poster_path : "img/default.jpg";
                const sinopse = filme.overview || "Sinopse não disponível.";

                const itemHTML = `
                    <div class="item">
                        <img class="box-filme" src="${poster}" alt="Imagem do Filme">
                        <p class="sinopse-filme">${sinopse}</p>
                        <button class="botao-trailer" data-id="${filme.id}">Ver Trailer</button>
                    </div>
                `;
                $carroselPopulares.append(itemHTML);
            });

            // Inicializar carrossel de filmes populares
            $carroselPopulares.owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                items: 4
            });
        });

    // Evento para abrir trailer do filme destaque
    $("#botao-trailer-destaque").click(function () {
        const filmeId = $(this).data("id");
        abrirTrailer(filmeId);
    });

    $(".owl-carousel").on("click", ".botao-trailer", function () {
        const filmeId = $(this).data("id");
        abrirTrailer(filmeId);
    });

    function abrirTrailer(filmeId) {
        const urlTrailer = `https://api.themoviedb.org/3/movie/${filmeId}/videos?api_key=${API_KEY}&language=pt-BR`;
        $.get(urlTrailer).done(function (data) {
            const trailer = data.results.find(v => v.type === "Trailer" && v.site === "YouTube");
            if (trailer) {
                abrirModalTrailer(trailer.key);
            } else {
                alert("Trailer não disponível.");
            }
        });
    }

    function abrirModalTrailer(youtubeKey) {
        const modal = $("#modal-trailer");
        const iframe = $("#iframe-trailer");
        iframe.attr("src", `https://www.youtube.com/embed/${youtubeKey}?autoplay=1`);
        modal.removeClass("hidden");
    }

    function fecharModalTrailer() {
        $("#modal-trailer").addClass("hidden");
        $("#iframe-trailer").attr("src", "");
    }

    $("#fechar-modal").click(fecharModalTrailer);
});

// Marcar item ativo no clique
$('.menu-item').on('click', function (e) {
    e.preventDefault();
    $('.menu-item').removeClass('ativo');
    $(this).addClass('ativo');
});

// Abrir e fechar menu hamburguer com GSAP
$('#menu-toggle').click(function () {
    const $menu = $('#menu-navegacao');
    const isOpen = $menu.hasClass('aberto');

    if (isOpen) {
        gsap.to($menu, { y: -50, opacity: 0, duration: 0.3, onComplete: () => $menu.removeClass('aberto') });
    } else {
        $menu.addClass('aberto');
        gsap.fromTo($menu, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
    }
});

// Menu mobile com overlay e animações GSAP
const $menuToggle = $('#menu-toggle');
const $menu = $('#menu-navegacao');
const $overlay = $('#overlay-menu');
const $iconeMenu = $('#icone-menu');
const $menuItems = $menu.find('.menu-item');

$menuToggle.click(() => {
    const isOpen = $menu.hasClass('aberto');

    if (isOpen) {
        // Fecha o menu
        gsap.to($menuItems.toArray().reverse(), {
            y: -20,
            opacity: 0,
            duration: 0.2,
            stagger: 0.05
        });

        gsap.to($menu, {
            y: -60,
            opacity: 0,
            duration: 0.3,
            onComplete: () => $menu.removeClass('aberto')
        });

        $overlay.removeClass('visivel');
        $iconeMenu.removeClass('fa-xmark').addClass('fa-bars');
    } else {
        // Abre o menu
        $menu.addClass('aberto');

        gsap.fromTo($menu, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });
        gsap.fromTo($menuItems, {
            y: -20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1
        });

        $overlay.addClass('visivel');
        $iconeMenu.removeClass('fa-bars').addClass('fa-xmark');
    }
});

// Clicar no overlay também fecha o menu
$overlay.click(() => {
    $menuToggle.click();
});

// Mapeia os links do menu para as seções
$('.menu-item').on('click', function (e) {
    e.preventDefault();

    $('.menu-item').removeClass('ativo');
    $(this).addClass('ativo');

    const destino = $(this).find('span').text().toLowerCase(); // 'séries' → 'series'
    $('.secao').removeClass('ativa');

    switch (destino) {
        case 'início':
            $('#inicio').addClass('ativa');
            break;
        case 'séries':
            $('#series').addClass('ativa');
            break;
        case 'filmes':
            $('#filmes').addClass('ativa');
            break;
        case 'documentários':
            $('#documentarios').addClass('ativa');
            break;
    }

    // Fecha o menu mobile se estiver aberto
    if ($('#menu-navegacao').hasClass('aberto')) {
        $('#menu-toggle').click();
    }
});
