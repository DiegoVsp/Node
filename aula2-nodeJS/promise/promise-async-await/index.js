/*
0 Obter um usuario
1 Obter o numero de telefone de um usuário a partir de seu ID
2 Obter o endereço do usuário pelo seu ID
 */
// importamos um modulo interno do nodeJS
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco);
//  COM PROMISSE
function obterUsuario() {
  // quando der algum problema  -> reject(Erro)
  // quando success -> resolve
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // return reject(new Error('Deu Ruim de verdade!'))
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
    }, 1000)
  })

}
function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: '1199002',
        ddd: 11
      })
    }, 2000);
  })
}
function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}

// Async / Await
// 1º adicionar a palavra async -> automaticamente ela retornará uma promise

main()

async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])

    const endereco = resultado[1]
    const telefone = resultado[0]

    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      Endereco: ${endereco.rua} nº${endereco.numero}
    `)

    console.timeEnd('medida-promise')
  } catch (error) {
    console.error('Deu Ruim', error)
  }
}



