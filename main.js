const cotizarButton = document.querySelector('#cotizar-btn')

cotizarButton.addEventListener('click', () => {
    const montoInput = document.querySelector('#monto')
    const targetValor = document.querySelector('#resultado')
    const radioSeleccionado = document.querySelector('input[type="radio"]:checked')
    const targetSelect = document.querySelector('#target-select')

    const divisa = radioSeleccionado.value
    const valorObjetivo = targetSelect.value

    const valorMonto = parseFloat(montoInput.value)

    const tablaConversion = {
        'USD': {
            'USD': 1,
            'EUR': 0.94,
            'PEN': 3.70,
        },
        'EUR': {
            'USD': 1.07,
            'EUR': 1,
            'PEN': 3.96,
        },
        'PEN': {
            'USD': 0.27,
            'EUR': 0.25,
            'PEN': 1,
        }   
    }

    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'PEN': 'S/',
    }
    const valorCambiado = valorMonto * tablaConversion[divisa][valorObjetivo]
    const symbol = currencySymbols[valorObjetivo];
    const resultado = `${symbol} ${valorCambiado.toFixed(2)}`

    alert("El cambio es " + resultado )
})

