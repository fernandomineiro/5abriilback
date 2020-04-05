'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with imformacaos
 */
const Database = use('Database')
class ImformacaoController {
  async index ({ request, response, view }) {
    const a = await Database.select('*').from('informacao')
    return response.json(a)
  } 

  async store ({ request, response }) {

    const nome = request.input('nome')
    const valor = request.input('valor')
    const posicao = request.input('posicao')

    const a = await Database.raw(`INSERT INTO informacao (nome, valor, posicao)
    VALUES ('${nome}', '${valor}', '${posicao}')`)
      return response.json(a)

  }
 
  async update ({ params, request, response }) {  
    const id_informacao = request.input('id_informacao')  
    const nome = request.input('nome')
    const valor = request.input('valor')
    const posicao = request.input('posicao')

    const a = await Database.raw(`UPDATE informacao SET nome='${nome}', valor='${valor}', 
    posicao = '${posicao}' WHERE id_informacao='${id_informacao}'`)
      return response.json(a)
  }

  async destroy ({ params, request, response }) {
     
    const id = request.input('id')
    const a = await Database.raw(`DELETE FROM informacao WHERE id_informacao = '${id}'`)
      return response.json(a)
    

  }

  async busca ({ request, response, view, send }) {
    const nome = request.input('nome')
    
    if (!nome ){
      const a = await Database.raw(`SELECT * FROM informacao`)
      return response.json(a)
    }
    
    else {
      const a = await Database.raw(`SELECT *FROM informacao WHERE nome ILIKE '%${nome}%'`)
      return response.json(a)
    }
   
   
  }
  
  async buscada ({ request, response, view, send }) {
    
    const id = request.input('id_informacao')
      const a = await Database.raw(`SELECT * FROM informacao WHERE id_informacao = '${id}' `)
      return response.json(a)
  }
  
  async ad({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('informacao')
  .where('id_informacao', b)
  .update({ acesso: 'false' })
  return response.json(a)
   }

  async da({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('informacao')
  .where('id_informacao', b)
  .update({ acesso: 'true' })
  return response.json(a)
   }

}

module.exports = ImformacaoController
