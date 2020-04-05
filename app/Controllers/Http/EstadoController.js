'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with estados
 */
const Database = use('Database')
class EstadoController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('estado')
    return response.json(a)
  } 

  async store ({ request, response }) {

    return response.send('ok')

  }
 
  async update ({ params, request, response }) {    
   return response.send('ok')
  }

  async destroy ({ params, request, response }) {
    

    return response.send('ok')

  }

  async busca ({ request, response, view, send }) {
    const nome = request.input('nome')
    const sigla = request.input('sigla')
    if (!nome && sigla != null){
      const a = await Database.raw(`SELECT id_estado, nome, sigla FROM estado WHERE sigla ILIKE '%${sigla}%' `)
    return response.json(a)
    } 
    else if(!sigla &&  nome != null){
      const a = await Database.raw(`SELECT id_estado, nome, sigla FROM estado WHERE nome ILIKE '%${nome}%' `)
      return response.json(a)
    }
    else if(!sigla && !nome){
      const a = await Database.raw(`SELECT * from estado `)
      return response.json(a)
    }
    else{
      const a = await Database.raw(`SELECT id_estado, nome, sigla FROM estado WHERE nome ILIKE '%${nome}%' or sigla ILIKE '%${sigla}%' `)
      return response.json(a)
    }
    
  } 
}

module.exports = EstadoController
