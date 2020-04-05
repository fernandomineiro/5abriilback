'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CulturaSchema extends Schema {
  up () {
    this.create('culturas', (table) => {
      table.increments()
      table.string('nome')
      table.timestamps()
    })
  }

  down () {
    this.drop('culturas')
  }
}

module.exports = CulturaSchema
