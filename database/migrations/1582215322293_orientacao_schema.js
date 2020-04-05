'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrientacaoSchema extends Schema {
  up () {
    this.create('orientacaos', (table) => {
      table.increments()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('orientacaos')
  }
}

module.exports = OrientacaoSchema
