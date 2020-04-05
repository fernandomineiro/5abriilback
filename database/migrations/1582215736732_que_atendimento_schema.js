'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QueAtendimentoSchema extends Schema {
  up () {
    this.create('que_atendimentos', (table) => {
      table.increments()
      table.string('data_atendimento')
      table.string('id_consultor')
      table.string('id_produtor')
      table.string('id_propriedade')
      table.string('id_questionario')
      table.string('ativo')
      table.string('data_exclusao')
      table.string('id_usuario_exclusao')
      table.string('id_fase')
      table.timestamps()
    })
  }

  down () {
    this.drop('que_atendimentos')
  }
}

module.exports = QueAtendimentoSchema
