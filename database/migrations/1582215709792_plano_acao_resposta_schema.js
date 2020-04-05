'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanoAcaoRespostaSchema extends Schema {
  up () {
    this.create('plano_acao_respostas', (table) => {
      table.increments()
      table.string('id_orientacao')
      table.string('id_plano_acao')
      table.string('id_resposta')
      table.timestamps()
    })
  }

  down () {
    this.drop('plano_acao_respostas')
  }
}

module.exports = PlanoAcaoRespostaSchema
