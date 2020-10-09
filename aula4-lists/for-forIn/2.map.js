const service = require('./service');

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []
  for (let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice)
    novoArrayMapeado.push(resultado)
  }
  return novoArrayMapeado;
}

async function main() {
  try {
    const results = await service.obterPessoas(`a`)
    // FOREACH
    // const names = []
    // results.results.forEach(item => {
    //   names.push(item.name)
    // })

    // MAP
    // const names = results.results.map(pessoa => pessoa.name)
    // console.log(names)
    // const names = results.results.map(pessoa => pessoa.name)
    // console.log(names)

    // meuMap
    const names = results.results.meuMap(function (pessoa,indice) {
      return `[${indice}] ${pessoa.name}`
    })
    console.log(names)

  } catch (error) {
    console.log('Deu Ruim', error)
  }
}
main()