'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerguntaAtendimentoViewSchema extends Schema {
  up () {
    this.create('pergunta_atendimento_views', (table) => {
      table.increments()
      table.string('data_atendimento')
      table.string('id_estado')
      table.string('id_municipio')
      table.string('id_pergunta')
      table.string('id_produtor')
      table.string('id_propriedade')
      table.string('id_questionario')
      table.string('id_tema')
      table.string('item_pergunta')
      table.string('justificativa')
      table.string('nome_consultor')
      table.string('nome_estado')
      table.string('nome_filial')
      table.string('nome_imagem')
      table.string('nome_municipio')
      table.string('nome_pergunta')
      table.string('nome_propriedade')
      table.string('nome_questionario')
      table.string('nome_tema')
      table.string('resultado')
      table.timestamps()
    })
  }

  down () {
    this.drop('pergunta_atendimento_views')
  }
}

module.exports = PerguntaAtendimentoViewSchema
