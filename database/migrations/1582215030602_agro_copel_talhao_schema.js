'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgroCopelTalhaoSchema extends Schema {
  up () {
    this.create('agro_copel_talhaos', (table) => {
      table.increments()
      table.string('consultor')
      table.string('cultura')
      table.string('data_atendimento')
      table.string('faturamento')
      table.string('id_talhao')
      table.string('numero_atendimento')
      table.string('numero_talhao')
      table.string('producao')
      table.string('produtor')
      table.string('imagem')
      table.timestamps()
    })
  }

  down () {
    this.drop('agro_copel_talhaos')
  }
}

module.exports = AgroCopelTalhaoSchema
