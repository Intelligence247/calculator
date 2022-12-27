// Selectors
const buttons = Array.from(document.querySelectorAll('.button'))
const display = document.querySelector('.display')
buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText === '=') {
            try {
                return display.innerHTML = eval(display.innerText)
            } catch (error) {
                display.innerHTML = 'Error Input'

            }

        } else if (e.target.textContent === 'AC') {
            return display.textContent = ''
        } else if (e.target.textContent === '␡') {
            return display.textContent = display.innerHTML.slice(0, -1)
        } else if (e.target.innerHTML === '×') {
            display.textContent += '*'
        } else if (e.target.innerHTML === '÷') {
            display.textContent += '/'
        } else {
            display.textContent += e.target.innerText

        }

    })


})
