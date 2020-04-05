'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaisSchema extends Schema {
  up () {
    this.create('pais', (table) => {
      table.increments()
      table.string('nome')
      table.timestamps()
    })
  }

  down () {
    this.drop('pais')
  }
}

module.exports = PaisSchema
