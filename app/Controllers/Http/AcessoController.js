'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with acessos
 */
const Database = use('Database')
class AcessoController {
  
  async a ({ request, response, view }) {
    let ws = null
    ws = adonis.Ws().connect()
    ws.onmessage()
  } 


  async index ({ request, response, view }) {
    const a = await Database.select('*').from('acesso')
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

  async a({ params, request, response }) {
    let ws = null
    ws = adonis.Ws().connect()
  }
}

module.exports = AcessoController
