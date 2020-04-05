'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with usuarios
 */
const Database = use('Database')
const Hash = use("Hash");
class UsuarioController {
  async index ({ request, response, view }) {
   
    const a = await Database.raw('select c.nome as tipo,a.id_usuario, a.status, a.login, b.nome from usuario a inner join pessoa b on a.id_pessoa = b.id_pessoa inner join perfil c on a.id_perfil = c.id_perfil ')
    return response.json(a)
  } 

  async store ({ request, auth, response }) {
    const nome = request.input('nome')
    const pergunta = request.input('pergunta')
    const tema = request.input('tema')

    const a = await Database.raw(`INSERT INTO questionario (ativo, nome, , id_pessoa)
    VALUES ('${login}', '${password}', '${perfil}', '${pessoa}')`)
    return response.json(a)

  }
 
  async update ({ params, request, response }) {    
   return response.send('ok')
  }

  async destroy ({ params, request, response }) {
    const b = params.id
    const a = await Database.table('usuario').where('id_usuario', b).delete()
    return response.json(a)
    

  }

  async buscada ({ request, response, view, send }) {
    
    const id = request.input('id_usuario')
      const a = await Database.raw(`SELECT * FROM usuario WHERE id_usuario = '${id}' `)
      return response.json(a)
  }
 
  async ad ({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('usuario')
  .where('id_usuario', b)
  .update({ status: 'false' })
  return response.json(a)
   }

   async da({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('usuario')
  .where('id_usuario', b)
  .update({ status: 'true' })
  return response.json(a)
   }

   async busca ({ request, response, view, send }) {
    const nome = request.input('nome')
    const perfil = request.input('perfil')
    if (!nome && !perfil){
      const a = await Database.raw(`select c.nome as tipo,a.id_usuario, a.status, a.login, b.nome from usuario a inner join pessoa b on a.id_pessoa = b.id_pessoa inner join perfil c on a.id_perfil = c.id_perfil `)
    return response.json(a)
    }
    else{
      const a = await Database.raw(`select c.nome as tipo,a.id_usuario, a.status, a.login, b.nome from usuario a inner join pessoa b on a.id_pessoa = b.id_pessoa inner join perfil c on a.id_perfil = c.id_perfil WHERE b.nome ILIKE '%${nome}%' or c.nome ILIKE '%${perfil}%'`)
      return response.json(a)
    }
  } 
}

module.exports = UsuarioController
