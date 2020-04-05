'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QueRespostaSchema extends Schema {
  up () {
    this.create('que_respostas', (table) => {
      table.increments()
      table.string('id_pergunta')
      table.string('id_propriedade')
      table.string('id_consultor')
      table.string('data_atendimento')
      table.string('resposta')
      table.string('justificativa')
      table.string('qual')
      table.string('quantidade')
      table.string('porque')
      table.string('imagem')
      table.string('url_imagem')
      table.string('resultado')
      table.string('id_atendimento')
      table.string('ativo')
      table.string('data_inativacao')
      table.string('id_foto')
      table.string('id_informacao')
      table.string('id_usuario_exclusao')
      table.timestamps()
    })
  }

  down () {
    this.drop('que_respostas')
  }
}

module.exports = QueRespostaSchema
