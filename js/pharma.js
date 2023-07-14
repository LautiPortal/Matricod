import image from '../assets/images/sections/pharma/'

const pharmaData = [
    {
        title: 'Tipo de matriz 1',
        image: `../assets/images/sections/pharma/alimentador1.jpg`,
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 1',
        image: '',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 1',
        image: '',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
    {
        title: 'Tipo de matriz 1',
        image: '',
        info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ',
    },
]

const pharmaCardsContainer = document.getElementById('pharma-cards-container');

const pharmaMap = pharmaData.map(product => {
    return (
        `<div class='pharma-card'>
            <img src=${product.image}/>
            <div class='pharma-card-info'>
                <h3>${product.title}</h3>
                <p>${product.info}</p>
            </div>
        </div>`
    )
})

console.log(pharmaData)

pharmaCardsContainer.innerHTML = pharmaMap.join('')