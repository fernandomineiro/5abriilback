'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CriterioSchema extends Schema {
  up () {
    this.create('criterios', (table) => {
      table.increments()
      table.string('nome')
      table.timestamps()
    })
  }

  down () {
    this.drop('criterios')
  }
}

module.exports = CriterioSchema
