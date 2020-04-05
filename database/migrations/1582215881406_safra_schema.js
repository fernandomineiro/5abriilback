'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SafraSchema extends Schema {
  up () {
    this.create('safras', (table) => {
      table.increments()
      table.string('data_fim')
      table.string('data_inicio')
      table.string('nome')
      table.timestamps()
    })
  }

  down () {
    this.drop('safras')
  }
}

module.exports = SafraSchema
