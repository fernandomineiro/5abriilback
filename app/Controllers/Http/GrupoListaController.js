'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with grupolistas
 */
const Database = use('Database')
class GrupoListaController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('grupo_lista')
    return response.json(a)
  } 

  async store ({ request, response }) {

    const a = await Database.raw(`SELECT * FROM grupo_lista`)
    return response.json(a)

  }
 
  async update ({ params, request, response }) {    
   return response.send('ok')
  }

  async destroy ({ params, request, response }) {
    

    const id = request.input('id')
    const a = await Database.raw(`DELETE FROM grupo_lista WHERE id_grupo_lista = '${id}'`)
      return response.json(a)
 
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
  
  async ad({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('grupo_lista')
  .where('id_grupo_lista', b)
  .update({ acesso: 'false' })
  return response.json(a)
   }

  async da({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('grupo_lista')
  .where('id_grupo_lista', b)
  .update({ acesso: 'true' })
  return response.json(a)
   }
}

module.exports = GrupoListaController
