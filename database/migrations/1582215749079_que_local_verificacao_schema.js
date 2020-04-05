'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QueLocalVerificacaoSchema extends Schema {
  up () {
    this.create('que_local_verificacaos', (table) => {
      table.increments()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('que_local_verificacaos')
  }
}

module.exports = QueLocalVerificacaoSchema
