'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanoAcaoSchema extends Schema {
  up () {
    this.create('plano_acaos', (table) => {
      table.increments()
      table.string('ativo')
      table.string('data_cadastro')
      table.string('data_exclusao')
      table.string('instrucao')
      table.string('id_consultor')
      table.string('id_produtor')
      table.string('id_propriedade')
      table.string('id_questionario')
      table.string('id_usuario_exclusao')
      table.timestamps()
    })
  }

  down () {
    this.drop('plano_acaos')
  }
}

module.exports = PlanoAcaoSchema
