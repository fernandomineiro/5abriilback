'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanoAcaoPendenteViewSchema extends Schema {
  up () {
    this.create('plano_acao_pendente_views', (table) => {
      table.increments()
      table.string('resposta_atendidas')
      table.string('respostas_pendentes')
      table.string('resposta_total')
      table.string('id_questionario')
      table.string('id_propriedade')
      table.string('id_pridutor')
      table.string('id_consultor')
      table.timestamps()
    })
  }

  down () {
    this.drop('plano_acao_pendente_views')
  }
}

module.exports = PlanoAcaoPendenteViewSchema
