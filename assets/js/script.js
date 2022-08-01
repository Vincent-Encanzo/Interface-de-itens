let modalQt = 1
let modalKey = 0
let cart = []

const S = (el) => document.querySelector(el)
const SA = (el) => document.querySelectorAll(el)

itensJson.map((item, index) => {
    let productItem = S('.models .product-item').cloneNode(true)

    modalQt = 1

    productItem.querySelector('.product-item--img img').src = item.img
    productItem.querySelector('.product-item--price').innerHTML = `G$ ${item.price}`
    productItem.querySelector('.product-item--name').innerHTML = item.name
    productItem.querySelector('.product-item--desc').innerHTML = item.description

    productItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        
        productItem.setAttribute('data-key', index)
        let key = e.target.closest('.product-item').getAttribute('data-key')
        modalKey = key

        S('.productBig img').src = itensJson[key].img
        S('.productInfo h1').innerHTML = itensJson[key].name
        S('.productInfo--desc').innerHTML = itensJson[key].description
        S('.productInfo--actualPrice').innerHTML = `G$ ${itensJson[key].price}`
        S('.productInfo--active').innerHTML = itensJson[key].attributes.active
        S('.productInfo--passive').innerHTML = itensJson[key].attributes.passive

        console.log(key)
        S('.productWindowArea').style.opacity = 0
        S('.productWindowArea').style.display = 'flex'
        setTimeout(() => {
            S('.productWindowArea').style.opacity = 1
        }, 200)

    })

    S('.productInfo--qt').innerHTML = modalQt
    S('.product-area').append(productItem)
})

let closeModal = () => {
    S('.productWindowArea').style.opacity = 0
    setTimeout(() => {
        S('.productWindowArea').style.display = 'none'
    }, 500)
}

SA('.productInfo--cancelMobileButton, .productInfo--cancelButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})

S('.productInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1){
        modalQt--
        S('.productInfo--qt').innerHTML = modalQt
    }
})

S('.productInfo--qtmais').addEventListener('click', () => {
    modalQt++
    S('.productInfo--qt').innerHTML = modalQt
})

S('.productInfo--addButton').addEventListener('click', () => {
    let key = cart.findIndex((item) => {
        return item
    })
    if(key > -1){
        cart[key].qt += modalQt
    } else {
        cart.push({
            id: itensJson[modalKey].id,
            qt: modalQt
        })
    }

    updateCart()
    closeModal()
})

S('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0){
        S('aside').style.left = '0'
    }
})
S('.menu-closer').addEventListener('click', () => {
    S('aside').style.left = '100vw'
})

let updateCart = () => {
    S('.menu-openner span').innerHTML = cart.length

    if (cart.length > 0){
        S('aside').classList.add('show')
        S('.cart').innerHTML = ''

        let subtotal = 0
        let desconto = 0
        let total = 0

        for (let i in cart){
            let productItem = itensJson.find((item)=>item.id == cart[i].id);
            let cartItem = S('.models .cart--item').cloneNode(true)

            subtotal += productItem.price * cart[i].qt

            cartItem.querySelector('img').src = productItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = productItem.name
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if(cart[i].qt > 1){
                    cart[i].qt--
                } else {
                    cart.splice(i, 1)
                }
                updateCart()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++
                updateCart()
            })

            S('.cart').append(cartItem)

        }

        desconto = subtotal * 0.1
        total = subtotal - desconto

        S('.subtotal span:last-child').innerHTML = `G$ ${subtotal.toFixed(2)}`
        S('.desconto span:last-child').innerHTML = `G$ ${desconto.toFixed(2)}`
        S('.total span:last-child').innerHTML = `G$ ${total.toFixed(2)}`
        S('.debit').innerHTML = `<b>G$ ${total}</b> de gold foram debitados de sua bag.`

    } else {
        S('aside').classList.remove('show')
        S('aside').style.left = '100vw'
    }
}
S('.cart--finalizar').addEventListener('click', () => {
    S('.loading--screen').style.opacity = 0
    S('.loading--screen').style.display = 'flex'
    setTimeout(() => {
        S('.loading--screen').style.opacity = 1
    }, 200)

    setTimeout(() => {
        S('.loading--screen').style.display = 'none'
    }, 5000)

    setTimeout(() => {
        S('.finished').style.opacity = 0
        S('.finished').style.display = 'flex'
        setTimeout(() => {
            S('.finished').style.opacity = 1
        }, 200)
    }, 4500)
    S('aside').style.left = '100vw'
})
S('.reload').addEventListener('click', () => {
    document.location.reload(true)
})