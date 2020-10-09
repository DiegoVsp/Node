/*
0 Obter um usuario
1 Obter o numero de telefone de um usuário a partir de seu ID
2 Obter o endereço do usuário pelo seu ID
 */

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    })
  }, 1000)
}
function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    //  primeiro parametro callback é o erro e o segundo é o sucesso
    return callback(null, {
      telefone: '1199002',
      ddd: 11
    })
  }, 2000);
}
function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}

// function resolverUsuario(erro, usuario) {
//   console.log('usuario' + usuario)

// }
 
obterUsuario(function resolverUsuario(error, usuario) {
  //  null || "" || 0 === false
  if (error) {
    console.error('Deu Ruim em usuário', error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error('Deu Ruim em Telefone', error)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error('Deu ruim em Endereço', error)
        return;
      }
      console.log(`
        Nome: ${usuario.nome}
        Endereço: ${endereco.rua}, nº ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.telefone} 
      `)
    })
  })
})
//  const telefone = obterTelefone()

//  console.log('telefone' + usuario.telefone)
