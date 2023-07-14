
const pharmaData = [
    {
        title: 'Tipo de matriz 1',
        image: '../assets/images/sections/pharma/alimentador1.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 2',
        image: '../assets/images/sections/pharma/alimentador2.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 3',
        image: '../assets/images/sections/pharma/alimentador3.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 4',
        image: '../assets/images/sections/pharma/alimentador4.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 2',
        image: '../assets/images/sections/pharma/alimentador4.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 1',
        image: '../assets/images/sections/pharma/alimentador4.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
]

const pharmaCardsContainer = document.getElementById('pharma-cards-container');

const pharmaMap = pharmaData.map(product => {
    return (
        `<div class='pharma-card'>
            <img class='pharma-card-img' src=${product.image} />
            <div class='pharma-card-info'>
                <h3 class='pharma-card-title'>${product.title}</h3>
                <p class='pharma-card-p'>${product.info}</p>
            </div>
        </div>`
    )
})

console.log(pharmaData)

pharmaCardsContainer.innerHTML = pharmaMap.join('')