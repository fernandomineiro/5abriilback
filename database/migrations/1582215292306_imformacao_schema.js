'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImformacaoSchema extends Schema {
  up () {
    this.create('imformacaos', (table) => {
      table.increments()
      table.string('nome')
      table.string('valor')
      table.string('posicao')
      table.timestamps()
    })
  }

  down () {
    this.drop('imformacaos')
  }
}

module.exports = ImformacaoSchema
