const list = document.querySelector('ul')
const buttonshowall = document.querySelector('.show-all')
const buttonmapall = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum')
const filterall = document.querySelector('.filter-all')

function formacurrency(value) {
    const newvalue = value.toLocaleString('pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        });
    return newvalue
}

function showall(productarray) {
    let myli = ''
    productarray.forEach(product => {


        myli += `
<li > <img src=${product.src} alt="x-bacon">
                <p>${formacurrency(product.name)}</p>
                <p class = item-price > ${formacurrency(product.price)}</p>
            </li>`
    })
    list.innerHTML = myli

}

function mapitem() {

    const priceitem = menuOptions.map((product) =>
    ({
        ...product,
        price: product.price * 0.9,// dar 10% de desconto//



    }))
    showall(priceitem)
}



function Valuewas() {
    const valuetotal = menuOptions.reduce((acc, corr) => acc + corr.price, 0)
    list.innerHTML =
        `<li>
     <p>o valor toral foi de R$ ${valuetotal}</p>
    </li>`
}

function filterallitem() {
    const justfiltervegan = menuOptions.filter((product) => product.vegan)
    showall(justfiltervegan)

}




buttonshowall.addEventListener('click', () => showall(menuOptions))
buttonmapall.addEventListener('click', mapitem)
sumAll.addEventListener('click', Valuewas)
filterall.addEventListener('click', filterallitem)