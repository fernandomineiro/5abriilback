'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with filials
 */
const Database = use('Database')
class FilialController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('filial')
    return response.json(a)
  } 

  async store ({ request, response }) {

    const nome = request.input('nome')
    const a = await Database.raw(`INSERT INTO filial (nome) values ('${nome}') `)
    return response.json(a)
  }
 
  async update ({ params, request, response }) {   
    const id = request.input('id_filial') 
    const nome = request.input('nome')
    const a = await Database.raw(`UPDATE filial set nome ='${nome}' WHERE id_filial='${id}'`)
    return response.json(a)
  }

  async destroy ({ params, request, response }) {
    

    const id = request.input('id_filial')
    const a = await Database.raw(`DELETE FROM filial WHERE id_filial = '${id}'`)
    return response.json(a)

  }
  
  async busca ({ request, response, view, send }) {
    
    const nome = request.input('nome')
    if(!nome){
      const a = await Database.raw(`SELECT * FROM filial`)
      return response.json(a)
    }
    else{
      const a = await Database.raw(`SELECT * FROM filial WHERE nome ILIKE '%${nome}%' `)
      return response.json(a)
    }
      
  }
  
  async buscada ({ request, response, view, send }) {
    
    const id = request.input('id_filial')
      const a = await Database.raw(`SELECT * FROM filial WHERE id_filial = '${id}'`)
      return response.json(a)
  } 

  async ad({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('filial')
  .where('id_filial', b)
  .update({ acesso: 'false' })
  return response.json(a)
   }

  async da({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('filial')
  .where('id_filial', b)
  .update({ acesso: 'true' })
  return response.json(a)
   }

}

module.exports = FilialController
