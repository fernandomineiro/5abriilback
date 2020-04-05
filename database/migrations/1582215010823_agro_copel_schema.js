'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgroCopelSchema extends Schema {
  up () {
    this.create('agro_copels', (table) => {
      table.increments()
      table.string('cidade')
      table.string('consumidor')
      table.string('data_atendimento')
      table.string('descricao')
      table.string('grupo')
      table.string('metas')
      table.string('numero_atendimento')
      table.string('obs')
      table.string('produtor')
      table.string('projeto')
      table.string('resultado')
      table.string('situacao_encontrada')
      table.string('uf')
      table.timestamps()
    })
  }

  down () {
    this.drop('agro_copels')
  }
}

module.exports = AgroCopelSchema
