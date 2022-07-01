let btn = document.querySelector(".btn")
let colorText = document.querySelector(".color")
let bg = document.querySelector(".principal")
let corSorteada = '#'
const caracteres = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
              'A', 'B', 'C', 'D', 'E', 'F']

const tamanhoLista = caracteres.length

function mudarCor() {
    
    for(p = 0; p < 6; p++) {
        let i = Math.floor(Math.random() * (tamanhoLista))
        corSorteada += caracteres[i]
    }

    colorText.innerHTML = corSorteada

    bg.style.backgroundColor = corSorteada

    corSorteada = "#"
}

btn.addEventListener("click", mudarCor)

