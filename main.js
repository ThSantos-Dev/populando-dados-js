'use strict'

const db = [
    {
        id: 1, 
        nome: 'Microfone Kingston', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 5,  
        preco: 999.99, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/microfone_kingston_hyperx_quadcast.png'
    },
    {
        id: 1, 
        nome: 'Microfone Kingston', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 5,  
        preco: 999.99, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/microfone_kingston_hyperx_quadcast.png'
    },
    {
        id: 2, 
        nome: 'Monitor AOC', 
        descricao: "Monitor Gamer Curvo 240Hz Full HD 27” AOC", 
        avaliacao: 3,  
        preco: 2500, 
        parcelamento: 'ou 10x de 250 sem juros',
        imagem: './img/monitor_gamer_curvo.png'
    },
    {
        id: 3, 
        nome: 'Mouse Logitech', 
        descricao: "Mouse Sem Fio M170 Nano LOGITECH Prata", 
        avaliacao: 2,  
        preco: 350, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/mouse.png'
    },
    {
        id: 4, 
        nome: 'Mouse Logitech', 
        descricao: "Mouse Sem Fio M170 Nano LOGITECH Prata", 
        avaliacao: 2,  
        preco: 350, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/mouse.png'
    },
    {
        id: 5, 
        nome: 'Mouse Logitech', 
        descricao: "Mouse Sem Fio M170 Nano LOGITECH Prata", 
        avaliacao: 2,  
        preco: 350, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/mouse.png'
    },
]

const geraEstrelas = (avaliacao) => {
    let starf = '&starf;'.repeat(avaliacao)
    let star = '&star;'.repeat(5 - avaliacao)

    let estrelas = starf + star

    return estrelas
}

const criarCard = (produto) => {

    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${produto.imagem}" alt="" class="card-image">
        </div>

        <span class="card-description">
            ${produto.descricao}
        </span>

        <span class="card-rating">
            ${geraEstrelas(produto.avaliacao)}
        </span>

        <span class="card-price">
           R$${produto.preco}
        </span>

        <span class="card-subdivision">
            ${produto.parcelamento}
        </span>
    `



    return card
}

const carregarProdutos = (produtos) => {
    const container = document.querySelector('.card-container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
    console.log(cards)
}

carregarProdutos(db)