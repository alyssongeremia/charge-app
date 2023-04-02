const btnSendtext = document.querySelector('.send-text')
const collectText = document.querySelector('#collect-text')

const btnCopy = document.querySelector('.copy-icon')

const inputAmount = document.querySelector('#amount')
const inputDate = document.querySelector('#date')

btnSendtext.addEventListener('click', function(event) {
    event.preventDefault()

    //formatar da data para padrao brasileiro
    data = new Date(inputDate.value)
    formatteddate = data.toLocaleDateString('pt-br', {timeZone: 'UTC'})

    //trocar o ponto do valor pela vírgula
    value = inputAmount.value.toString().replace('.', ',')


    collectText.innerText = `
        Bom dia, tudo bem?

        Observei que até o momento o título no valor de R$ ${value} com vencimento para ${formatteddate}, ainda encontra-se em aberto.
        
        Para facilitar, acabei de gerar um novo boleto com data atualizada.`
})

function copyText() {
    navigator.clipboard.writeText(collectText.innerText)
}

btnCopy.addEventListener('click', function() {
    copyText()
    alert('Texto Copiado')
    inputAmount.select()
})

const btnMoon = document.querySelector('.moon-icon')
const btnSun = document.querySelector('.sun-icon')

const textArea = document.querySelector('.text-area')

/*
function darkMode() {
    btnMoon.classlist.add('hidden')
    btnSun.classList.remove('hidden')
}
*/

btnMoon.addEventListener('click', function() {
    btnMoon.classList.toggle('hidden')
    btnSun.classList.toggle('hidden')

    textArea.classList.toggle('dark-mode-color')
    btnCopy.classList.toggle('dark-mode-color')

    inputAmount.classList.toggle('dark-mode-color')
    inputDate.classList.toggle('dark-mode-color')
})

btnSun.addEventListener('click', function() {
    btnSun.classList.toggle('hidden')
    btnMoon.classList.toggle('hidden')

    textArea.classList.toggle('dark-mode-color')
    btnCopy.classList.toggle('dark-mode-color')

    inputAmount.classList.toggle('dark-mode-color')
    inputDate.classList.toggle('dark-mode-color')
})

