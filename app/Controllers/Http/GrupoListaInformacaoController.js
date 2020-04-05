'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with grupolistainformacaos
 */
const Database = use('Database')
class GrupoListaInformacaoController {
  async index ({ request, response, view }) {
    const a = await Database.raw('select grupo_lista_informacao.posicao,  grupo_lista.id_grupo_lista, grupo_lista.nome FROM grupo_lista INNER JOIN grupo_lista_informacao ON grupo_lista.id_grupo_lista = grupo_lista_informacao.id_informacao')
    return response.json(a)
  } 

  async store ({ request, response }) {

    return response.send('ok')

  }
 
  async update ({ params, request, response }) {    
    const id = request.input('id_informacao') 
    const nome = request.input('nome')
    const valor = request.input('valor')
    const posicao = request.input('posicao')
    const a = await Database.raw(`UPDATE grupo_lista, grupo_lista_informacao SET grupo_lista_informacao.posicao = '${nome}', grupo_lista.nome = '${nome}'`)
    return response.json(a)
  }

  async destroy ({ params, request, response }) {
    

    return response.send('ok')

  }
  async busca ({ request, response, view, send }) {
    const nome = request.input('nome')
    
    if (!nome ){
      const a = await Database.raw(`SELECT * FROM grupo_lista`)
      return response.json(a)
    }
    
    else {
      const a = await Database.raw(`SELECT id_grupo_lista, nome FROM grupo_lista WHERE nome ILIKE '%${nome}%'`)
      return response.json(a)
    }
   
   
  } 
}

module.exports = GrupoListaInformacaoController
