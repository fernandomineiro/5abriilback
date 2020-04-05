'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with safras
 */
const Database = use('Database')
class SafraController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('safra')
    return response.json(a)
  } 

  async store ({ request, response }) {

    const nome = request.input('nome')
    const inicio = request.input('inicio')
    const termino = request.input('termino')
    const a = await Database.raw(`INSERT INTO safra (nome, data_inicio, data_fim)
    VALUES ('${nome}', '${inicio}', '${termino}')`)
    return response.json(a)

  }
 
  async update ({ params, request, response }) {    
   return response.send('ok')
  }

  async destroy ({ params, request, response }) {
    

    return response.send('ok')

  }
}

module.exports = SafraController
