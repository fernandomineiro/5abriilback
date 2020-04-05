'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstadoSchema extends Schema {
  up () {
    this.create('estados', (table) => {
      table.increments()
      table.string('nome')
      table.string('sigla')
      table.string('id_pais')
      table.timestamps()
    })
  }

  down () {
    this.drop('estados')
  }
}

module.exports = EstadoSchema
