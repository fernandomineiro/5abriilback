'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with atendimentos
 */
const Database = use('Database')
class AtendimentoController {
  async index ({ request, response, view }) {
    const a = await Database.raw(` SELECT que_atendimento.data_atendimento, que_atendimento.id_atendimento, pessoa.nome, usuario.login, questionario.nome as questionario, que_atendimento.ativo
    FROM ((( que_atendimento
      INNER JOIN pessoa on que_atendimento.id_consultor = pessoa.id_pessoa)
      INNER JOIN usuario on que_atendimento.id_produtor = usuario.id_usuario)
      INNER JOIN questionario on que_atendimento.id_questionario = questionario.id_questionario)`)
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
    const a = await Database.table('menu').where('id_atendimento', b).delete()
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

  
}
 

module.exports = AtendimentoController
