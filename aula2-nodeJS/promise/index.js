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
const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a função .then
// para manipular erros usamos o .catch
// usuario -> telefone -> telefone
usuarioPromise
  // o que veio de usuario foi nomeado como resultado
  .then(function (resultado) {
    return obterTelefone(resultado.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: resultado.nome,
            id: resultado.id
          },
          telefone: {
            telefone: result.telefone,
            ddd: result.ddd
          }
        }
      })
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    })
  })
  .then(function (resultado) {
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
  })
  .catch(function (error) {
    console.error('Deu Ruim', error)
  })

