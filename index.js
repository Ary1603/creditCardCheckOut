let cardNumberInput = document.querySelector('#input-card-number')
let expDate = document.querySelector('#exp-date-input')
let cardNumber = document.querySelector('.number')
let cardImg = document.querySelector('.company')
let expMonth = document.querySelector('#month')
let expYear = document.querySelector('#year')
let btnCheck = document.querySelector('.check')

btnCheck.addEventListener('click', () => {
    if (btnCheck.style.color == 'green') {
        btnCheck.style.color = 'black'
    } else {
        btnCheck.style.color = 'green'
    }
})

const tarjeta = []

function numTarjet() {
    tarjeta.splice(0, tarjeta.length)
    for (let i = 0; i <= cardNumberInput.value.length; i++) {
        if (cardNumberInput.value[0] == 4) {
            cardImg.src = 'img/visa.png'
            cardImg.style.marginBottom = '25%'
        } else {
            if (cardNumberInput.value[0] == 5) {
                cardImg.src = 'img/mastercard.png'
                cardImg.style.marginBottom = '10%'
            }
        }

        if ((i + 1) % 4 == 0) {
            tarjeta.push(cardNumberInput.value[i])
            tarjeta.push(" ")

        } else {
            tarjeta.push(cardNumberInput.value[i])
        }
    }
    cardNumber.textContent = tarjeta.join("")
}

function expirationCard() {
    expMonth.textContent = expDate.value[5] + expDate.value[6]
    expYear.textContent = expDate.value[2] + expDate.value[3]
}