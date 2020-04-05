'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnexoSchema extends Schema {
  up () {
    this.create('anexos', (table) => {
      table.increments()
      table.string('cadastro')
      table.string('nome')
      table.string('tipo')
      table.string('id_resposta')
      table.timestamps()
    })
  }

  down () {
    this.drop('anexos')
  }
}

module.exports = AnexoSchema
