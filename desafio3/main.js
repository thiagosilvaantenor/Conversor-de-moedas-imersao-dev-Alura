// Desafios => - Conversor de temperaturas entre farenheit, kelvin e celcius.

// F = C x 1,8 + 32
function ConverterCelciusEmF() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmC = parseInt(valor)

  var valorEmF = valorEmC * 1.8 + 32
  console.log(valorEmF)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `'Convertendo...
  O resultado de, ${valorEmC} graus C°, em Fahrenheint é ... ${valorEmF}`
  elementoValorConvertido.innerHTML = valorConvertido
}

// K = C + 273
function ConverterCelciusEmK() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmC = parseInt(valor)

  var valorEmK = valorEmC + 273
  console.log(valorEmK)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `'Convertendo...
  O resultado de, ${valorEmC} graus C°, em Kelvin é ... ${valorEmK}`
  elementoValorConvertido.innerHTML = valorConvertido
}

// °C = (°F − 32) ÷ 1, 8
function ConverterFahrenheintEmC() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmF = parseInt(valor)

  var valorEmC = (valorEmF - 32) / 1.8
  console.log(valorEmC)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `'Convertendo...
  O resultado de, ${valorEmF} graus F°, em Celcius é ... ${valorEmC}`
  elementoValorConvertido.innerHTML = valorConvertido
}

//  K = (F-32) * 5/9 + 273
function ConverterFahrenheintEmK() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmF = parseInt(valor)

  var valorEmK = (valorEmF - 32 * 5) / 9 + 273
  console.log(valorEmK)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `'Convertendo...
  O resultado de, ${valorEmF} graus F°, em Kelvin é ... ${valorEmK}`
  elementoValorConvertido.innerHTML = valorConvertido
}

// C = k - 273
function ConverterKelvinEmC() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmK = parseInt(valor)

  var valorEmC = valorEmK - 273
  console.log(valorEmC)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `'Convertendo...
  O resultado de, ${valorEmK} graus K°, em Celcius é ... ${valorEmC}`
  elementoValorConvertido.innerHTML = valorConvertido
}

// (K-273) * 1.8 + 32
function ConverterKelvinEmF() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmK = parseInt(valor)

  var valorEmF = (valorEmK - 273) * 1.8 + 32
  console.log(valorEmF)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `'Convertendo...
  O resultado de, ${valorEmK} graus K°, em Fahrenheint é ... ${valorEmF}`
  elementoValorConvertido.innerHTML = valorConvertido
}
