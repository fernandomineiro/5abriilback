'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilialSchema extends Schema {
  up () {
    this.create('filials', (table) => {
      table.increments()
      table.string('nome')
      table.timestamps()
    })
  }

  down () {
    this.drop('filials')
  }
}

module.exports = FilialSchema
