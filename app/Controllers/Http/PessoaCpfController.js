'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pessoacpfs
 */
const Database = use('Database')
class PessoaCpfController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('pessoa_cpf')
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
    const a = await Database.table('menu').where('id_pessoa', b).delete()
    return response.json(a)

  }
}

module.exports = PessoaCpfController
