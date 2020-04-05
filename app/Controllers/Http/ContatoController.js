'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contatoes
 */
const Database = use('Database')
class ContatoController {
  async index ({ request, response, view }) {
    const a = await Database.raw('select a.id_contrato, a.dap, a.numero_contrato, a.area_contratada, a.qtde_contratada, b.login, c.propriedade from usuario a inner join pessoa b on a.id_pessoa = b.id_pessoa inner join perfil c on a.id_perfil = c.id_perfil ')
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

module.exports = ContatoController
