function abrirModalTrailer(youtubeKey) {
    const modal = document.getElementById("modal-trailer");
    const iframe = document.getElementById("iframe-trailer");
    iframe.src = `https://www.youtube.com/embed/${youtubeKey}?autoplay=1`;
    modal.classList.remove("hidden");
}

function fecharModalTrailer() {
    const modal = document.getElementById("modal-trailer");
    const iframe = document.getElementById("iframe-trailer");
    iframe.src = ""; // Limpa o iframe para parar o vídeo ao fechar
    modal.classList.add("hidden");
}
