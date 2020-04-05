'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VariedadeSchema extends Schema {
  up () {
    this.create('variedades', (table) => {
      table.increments()
      table.string('nome')
      table.string('id_cultura')
      table.timestamps()
    })
  }

  down () {
    this.drop('variedades')
  }
}

module.exports = VariedadeSchema
