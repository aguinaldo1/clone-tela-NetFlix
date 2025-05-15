# Clone da Netflix

Este é um projeto de clone da Netflix desenvolvido como parte de um estudo/prática de desenvolvimento web. Ele utiliza HTML, CSS, JavaScript e integração com API externa para criar uma interface dinâmica com filmes populares e trailers reais.

## Funcionalidades

* **Layout Responsivo:** Se adapta a diferentes tamanhos de tela (mobile, tablet e desktop).
* **Filme em Destaque:** Mostra um banner de destaque estático (House of Cards).
* **Carrossel Dinâmico de Filmes:** Os filmes populares são carregados diretamente da API do TMDb.
* **Trailer via YouTube:** Cada filme possui botão para assistir trailer que é carregado automaticamente em um modal com player embutido.
* **Integração com TMDb:** A aplicação consome dados reais da API do [The Movie Database (TMDb)](https://www.themoviedb.org/).

## Tecnologias Utilizadas

* **HTML:** Estrutura da página.
* **CSS:** Estilos visuais e responsividade.
* **JavaScript/jQuery:** Lógica de interação e requisições.
* **Owl Carousel:** Biblioteca de carrossel.
* **Font Awesome:** Ícones dos botões.
* **API do TMDb:** Fonte de dados dos filmes e trailers.

## Estrutura do Projeto

```
projeto-netflix/
├── index.html                 # HTML principal
├── style/
│   ├── main.css               # Estilos principais
│   ├── responsive.css         # Regras para responsividade
│   └── owl/                   # Estilos do Owl Carousel
│       ├── owl.carousel.css
│       └── owl.theme.default.css
├── js/
│   ├── owl/                   # Scripts da biblioteca Owl
│   │   ├── jquery.min.js
│   │   ├── owl.carousel.min.js
│   │   └── setup.js           # Configuração do carrossel
│   └── popular-filmes.js      # Script para carregar filmes e trailers
└── img/                       # Imagens utilizadas
```

## Como Usar

1. Clone o repositório.
2. Gere uma chave de API no site [https://www.themoviedb.org](https://www.themoviedb.org).
3. Substitua a string `'SUA_CHAVE_AQUI'` em `popular-filmes.js` pela sua chave TMDb.
4. Abra o `index.html` em um navegador web.

## Melhorias Futuras

- Implementar sistema de busca de filmes e séries.
- Adicionar seção de séries e documentários.
- Melhorar acessibilidade.
- Modo claro/escuro.

## Autor

Aguinaldo Américo

## 📝 Licença

Este projeto é de uso educacional e pessoal. Você pode reutilizá-lo e modificá-lo livremente.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, melhorias ou pull requests.