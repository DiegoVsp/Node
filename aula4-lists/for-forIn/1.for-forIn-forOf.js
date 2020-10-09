const service = require('./service');

async function main() {
  try {
    const result = await service.obterPessoas('a')
    let name = [];
    console.time('for')
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoas = result.results[i]
      name.push(pessoas.name)
    }
    console.timeEnd('for')


    console.time('forIn')
    for (let i in result.results) {
      const pessoas = result.results[i]
      name.push(pessoas.name)
    }
    console.timeEnd('forIn')

    console.time('forOf')
    for (let pessoa of result.results) {
      name.push(pessoa.name)
    }
    console.timeEnd('forOf')

    console.log(name)
  } catch (error) {
    console.error('Error', error)
  }
}
main()
