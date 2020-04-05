'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with importacaos
 */
const Database = use('Database')
class ImportacaoController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('importacao')
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
}

module.exports = ImportacaoController
