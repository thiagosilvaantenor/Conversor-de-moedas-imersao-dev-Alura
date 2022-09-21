// Desafios - Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.

function Converter() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmDolarNumerico = parseFloat(valor)

  var novoValor = valorEmDolarNumerico * (0.000051).toFixed(4)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O resultado em bit coin é ₿' + novoValor
  elementoValorConvertido.innerHTML = valorConvertido
}
