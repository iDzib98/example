document.addEventListener('DOMContentLoaded', () => {
    const btnMenos = document.getElementById('btnMenos')
    const btnMas = document.getElementById('btnMas')
    const numero = document.getElementById('numero')
    
    const presionarBtn = (e) => {
        e.preventDefault()
        let numAux = parseInt(numero.value)
        console.log(numAux)
        let operacion = e.target.innerText
        console.log(operacion)
        switch (operacion) {
            case '-': 
                numAux--
                break;
            case '+':
                numAux++
                break;
        }
        console.log(numAux)
        numero.value = numAux
    }
    
    btnMenos.addEventListener('click', presionarBtn)
    btnMas.addEventListener('click', presionarBtn)
})


