'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TelhaoSchema extends Schema {
  up () {
    this.create('telhaos', (table) => {
      table.increments()
      table.string('latitude')
      table.string('longitude')
      table.string('nome')
      table.string('id_propriedade')
      table.timestamps()
    })
  }

  down () {
    this.drop('telhaos')
  }
}

module.exports = TelhaoSchema
