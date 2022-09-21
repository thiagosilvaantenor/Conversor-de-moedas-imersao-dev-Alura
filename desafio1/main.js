//Desafio => Adicionar outras moedas para converter.
function ConverterDolar() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmDolarNumerico = parseFloat(valor)

  valorEmReal = valorEmDolarNumerico * 5
  console.log(valorEmReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `${valor} dolares, em real é R$ ${valorEmReal}`
  elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterEuro() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmEuroNumerico = parseFloat(valor)

  valorEmReal = valorEmEuroNumerico * 5
  console.log(valorEmReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `${valor} euros, em real é R$ ${valorEmReal}`
  elementoValorConvertido.innerHTML = valorConvertido
}
