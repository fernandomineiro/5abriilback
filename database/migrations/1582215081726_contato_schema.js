'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatoSchema extends Schema {
  up () {
    this.create('contatoes', (table) => {
      table.increments()
      table.string('assunto')
      table.string('email')
      table.string('nome')
      table.string('mensagem')
      table.string('telefone')
      table.timestamps()
    })
  }

  down () {
    this.drop('contatoes')
  }
}

module.exports = ContatoSchema
