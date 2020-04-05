'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with municipios
 */
const Database = use('Database')
class MunicipioController {
  async index ({ request, response, view }) {
    const a = await Database.raw('select municipio.id_municipio, municipio.acesso, municipio.cep, municipio.nome, estado.nome as estado from municipio inner join estado on municipio.id_estado = estado.id_estado')
    return response.json(a)
  } 

  async store ({ request, response }) {
    const nome = request.input('nome')
    const estado = request.input('estado')
    const a = await Database.raw(`INSERT INTO municipio (nome, id_estado)
    VALUES ('${nome}', '${estado}')`)
    return response.json(a)
  }
 
  async update ({ params, request, response }) {    
   return response.send('ok')
  }

  async destroy ({ params, request, response }) {
    

    const id = request.input('id_municipio')
    const a = await Database.raw(`DELETE FROM municipio WHERE id_municipio = '${id}'`)
    return response.json(a)
 
  }

  async busca ({ request, response, view, send }) {
    const nome = request.input('nome')
    const estado = request.input('estado')
    if (!nome && !estado){
      const a = await Database.raw(`select municipio.id_municipio, municipio.acesso, municipio.cep, municipio.nome, estado.nome as estado from municipio inner join estado on municipio.id_estado = estado.id_estado  `)
    return response.json(a)
    } 
    
    else{
      const a = await Database.raw(`select municipio.id_municipio, municipio.acesso, municipio.cep, municipio.nome, estado.nome as estado from municipio inner join estado on municipio.id_estado = estado.id_estado WHERE estado.nome ILIKE '%${estado}%' or municipio.nome ILIKE '%${nome}%'`)
      return response.json(a)
    }
    
  }
  
  async buscada ({ request, response, view, send }) {
    
    const id = request.input('id_municipio')
      const a = await Database.raw(`select * FROM municipio WHERE id_municipio = '${id}'`)
      return response.json(a)
  }
  
  async ad ({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('municipio')
  .where('id_municipio', b)
  .update({ acesso: 'false' })
  return response.json(a)
   }

   async da({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('municipio')
  .where('id_municipio', b)
  .update({ acesso: 'true' })
  return response.json(a)
   }
}

module.exports = MunicipioController
