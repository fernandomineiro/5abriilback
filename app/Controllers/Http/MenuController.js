'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with menus
 */

const Database = use('Database')
class MenuController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('menu')
    return response.json(a)
  }
  
  async indexa ({ request, response, view }) {
    const a = await Database.raw(`SELECT role_menu FROM menu`)
      return response.json(a)
  } 



  async store ({ request, response }) {
    const diretorio = request.input('diretorio')
    const nome = request.input('nome')
    const role_menu = request.input('role_menu')
    const a = await Database.raw(`INSERT INTO menu (diretorio, nome, role_menu)
    VALUES ('${diretorio}', '${nome}', '${role_menu}')`)
      return response.json(a)
    

  }
 
  async update ({ params, request, response }) {

    const nome = request.input('nome')
    const diretorio = request.input('diretorio')
    const id = request.input('id_menu')
    const a = await Database.raw(`UPDATE menu SET nome='${nome}', diretorio= '${diretorio}' WHERE id_menu='${id}'`)
 
  return response.json(a)  
}

  async destroy ({ params, request, response }) {
    const b = params.id
    const a = await Database.table('menu').where('id_menu', b).delete()
    return response.json(a)
  }

  async busca ({ request, response, view, send }) {
    
    const nome = request.input('nome')
    const diretorio = request.input('diretorio')
    if (!nome && !diretorio && !id){
      const a = await Database.raw(`SELECT id_menu, nome, diretorio, role_menu FROM menu`)
      return response.json(a)
    }
    else {
      const a = await Database.raw(`SELECT id_menu,  nome, diretorio, role_menu FROM menu WHERE nome ILIKE '%${nome}%' or diretorio ILIKE '%${diretorio}%'`)
      return response.json(a)
    }
    
   
  } 

  async buscada ({ request, response, view, send }) {
    
    const id = request.input('id_menu')
      const a = await Database.raw(`SELECT * FROM menu WHERE id_menu = '${id}'`)
      return response.json(a)
  } 


}

module.exports = MenuController
