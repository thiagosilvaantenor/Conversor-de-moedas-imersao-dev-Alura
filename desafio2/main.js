// Desafios => - Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.

function ConverterKmEmAnosLuz() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmKmNumerico = parseFloat(valor)

  var valorEmAnosLuz = valorEmKmNumerico * 0.00000000000010570.toFixed(15)
  console.log(valorEmAnosLuz)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `O resultado de, ${valor}Km, em anos luz é ${valorEmAnosLuz} anos luz de distância`
  elementoValorConvertido.innerHTML = valorConvertido
}
