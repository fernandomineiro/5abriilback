'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtendimentoSchema extends Schema {
  up () {
    this.create('atendimentos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('atendimentos')
  }
}

module.exports = AtendimentoSchema
