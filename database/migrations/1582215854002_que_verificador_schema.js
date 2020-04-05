'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QueVerificadorSchema extends Schema {
  up () {
    this.create('que_verificadors', (table) => {
      table.increments()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('que_verificadors')
  }
}

module.exports = QueVerificadorSchema
