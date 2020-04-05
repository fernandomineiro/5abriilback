'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with propriedades
 */
const Database = use('Database')
class PropriedadeController {
  async index ({ request, response, view }) {
    const a = await Database.raw(`SELECT propriedade.id_propriedade, propriedade.nome as propriedade, pessoa.nome,  propriedade.ativo, filial.nome as filial, municipio.nome as municipio FROM ((( propriedade
    INNER JOIN filial ON propriedade.id_filial = filial.id_filial)
    INNER JOIN municipio on propriedade.id_municipio = municipio.id_municipio)
    INNER JOIN pessoa on propriedade.id_produtor = pessoa.id_pessoa) `)
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
    const a = await Database.table('menu').where('id_propriedade', b).delete()
    return response.json(a)

  }

  async ad ({ params, request, response }) { 
    const b = params.id   
    const a = await Database
  .table('propriedade')
  .where('id_propriedade', b)
  .update({ ativo: 'false' })
  return response.json(a)
   }

   async da ({ params, request, response }) { 
    const b = params.id   
    const a = await Database
  .table('propriedade')
  .where('id_propriedade', b)
  .update({ ativo: 'true' })
  return response.json(a)
   }

   async busca ({ request, response, view, send }) {
    const propriedade = request.input('propriedade')
    const filial = request.input('filial')
    const estado = request.input('estado')
    const municipio = request.input('municipio')
    const produtor = request.input('produtor')
    const cpf = request.input('cpf')

    if(!propriedade && !filial && !estado && !municipio && !produtor && !cpf){
      const a = await Database.raw(`SELECT propriedade.nome, pessoa.nome, pessoa.cpf, pessoa.telefone, municipio.nome as municipio FROM pessoa inner join municipio on pessoa.id_municipio = municipio.id_municipio`)
      return response.json(a)
    }else{
      const a = await Database.raw(`SELECT pessoa.id_pessoa, pessoa.nome, pessoa.cpf, pessoa.telefone, municipio.nome as municipio FROM pessoa inner join municipio on pessoa.id_municipio = municipio.id_municipio WHERE pessoa.nome ILIKE '%${nome}%' or pessoa.cpf ILIKE '%${cpf}%' or municipio.nome ILIKE '%${municipio}%' `)
      return response.json(a)
    }
      
  } 
}

module.exports = PropriedadeController
