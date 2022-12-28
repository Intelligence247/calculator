// Selectors
const buttons = Array.from(document.querySelectorAll('.button'))
const display = document.querySelector('.display')
const ans = document.querySelector('#ans')
buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText === '=') {
            try {
                return ans.innerHTML = eval(display.innerText)
            } catch (error) {
                ans.innerHTML = 'Error Input'

            }

        } else if (e.target.textContent === 'AC') {
            display.textContent = ''
            ans.textContent = ''
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
