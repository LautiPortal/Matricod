
const pharmaData = [
    {
        title: 'Alimentadores',
        image: '../assets/images/sections/pharma/alimentador1.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Matricerias de moldeo',
        image: '../assets/images/sections/pharma/matricerias-moldeo2.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Cortantes',
        image: '../assets/images/sections/pharma/alimentador3.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Precortes',
        image: '../assets/images/sections/pharma/precortes1.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Piezas especiales',
        image: '../assets/images/sections/pharma/piezas-especiales1.jpg',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Digitos',
        image: '../assets/images/sections/pharma/digito1.jpeg',
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