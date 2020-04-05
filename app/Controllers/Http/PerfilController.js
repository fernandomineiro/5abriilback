'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Database = use('Database')
const Contact = use('App/Models/Perfil');
const User = use('App/Models/Perfil')
class PerfilController {

  async index ({ request, response, view }) {
    const a = await Database.select('*').from('perfil')
    return response.json(a)
  } 

  async store ({ request, response }) {

    const nome = request.input('nome')
    const tipopermissao = request.input('tipopermissao') 
  
    const user = await Database
    .table('perfil')
    const a = await Database.raw(`INSERT INTO perfil (nome, tipopermissao) VALUES ('${nome}', '${tipopermissao}')`)
    return response.json(a)
  }
 
  async update ({ params, request, response }) {    
    const id = request.input('id_perfil')
    const nome = request.input('nome')
    const tipopermissao = request.input('tipopermissao')
    const a = await Database.raw(`UPDATE perfil set nome = '${nome}', tipopermissao = '${tipopermissao}' WHERE id_perfil ='${id}'`)
  return response.send(a)
  }

  async destroy ({ params, request, response }) {
    const a = await Database.raw('delete from perfil where id_perfil = 1')

    return response.send(a)

  }

  async busca ({ request, response, view, send }) {
    const nome = request.input('nome')
    const tipo = request.input('tipopermissao')
    if (!nome && !tipo){
      const a = await Database.raw(`SELECT id_perfil, nome, tipopermissao FROM perfil`)
    return response.json(a)
    } 
    
    else{ 
      const a = await Database.raw(`SELECT id_perfil, nome, tipopermissao FROM perfil WHERE nome ILIKE '%${nome}%' or tipopermissao ILIKE '%${tipo}%'`)
      return response.json(a)
    }
  } 

  async buscada ({ request, response, view, send }) {
    
    const id = request.input('id_perfil')
      const a = await Database.raw(`SELECT * FROM perfil WHERE id_perfil = '${id}'`)
      return response.json(a)
  } 

}

module.exports = PerfilController
