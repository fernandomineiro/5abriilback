'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with questionarios
 */
const Database = use('Database')
class QuestionarioController {
  async index ({ request, response, view }) {
    const a = await Database.raw(`SELECT * FROM questionario`)
    return response.json(a)
  } 

  async store ({ request, response }) {

    const nome = request.input('nome')
    const pergunta = request.input('pergunta')
    const tema = request.input('tema')

    const a = await Database.raw(`INSERT INTO questionario (ativo, nome, nr_perguntas, nr_temas, contabilizar)
    VALUES ('true', '${nome}', '${pergunta}', '${tema}','true')`)
    return response.json(a)

  }
 
  async update ({ params, request, response }) {    
    const nome = request.input('nome')
    const pergunta = request.input('pergunta')
    const tema = request.input('tema')
    const id = request.input('id')

    const a = await Database.raw(`UPDATE `)
    return response.json(a)
  }

  async destroy ({ params, request, response }) {
    

    return response.send('ok')

  }

  async busca ({ params, request, response }) {
    

    const nome = request.input('nome')
    
    if(!nome){
      const a = await Database.raw(`SELECT * FROM  questionario `)
      return response.json(a)
    }else{
      const a = await Database.raw(`SELECT * FROM questionario WHERE nome ILIKE '%${nome}%'`)
      return response.json(a)
    }


  }
 
  async ad ({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('questionario')
  .where('id_questionario', b)
  .update({ ativo: 'false' })
  return response.json(a)
   }

   async da({ params, request, response }) {    
    const b = params.id   
    const a = await Database
  .table('questionario')
  .where('id_questionario', b)
  .update({ ativo: 'true' })
  return response.json(a)
   }
}

module.exports = QuestionarioController
