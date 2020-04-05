'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrupoListaSchema extends Schema {
  up () {
    this.create('grupo_listas', (table) => {
      table.increments()
      table.string('data_alteracao')
      table.string('data_cadastro')
      table.string('nome')
      table.string('posicao')
      table.timestamps()
    })
  }

  down () {
    this.drop('grupo_listas')
  }
}

module.exports = GrupoListaSchema
