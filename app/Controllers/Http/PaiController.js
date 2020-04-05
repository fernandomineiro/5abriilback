'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pais
 */
const Database = use('Database')
class PaiController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('pai')
    return response.json(a)
  } 

  async store ({ request, response }) {

    return response.send('ok')

  }
 
  async update ({ params, request, response }) {    
   return response.send('ok')
  }

  async destroy ({ params, request, response }) {
    

    const b = params.id
    const a = await Database.table('menu').where('id_pai', b).delete()
    return response.json(a)

  }
}

module.exports = PaiController
