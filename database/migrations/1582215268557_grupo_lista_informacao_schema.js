'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrupoListaInformacaoSchema extends Schema {
  up () {
    this.create('grupo_lista_informacaos', (table) => {
      table.increments()
      table.string('id_informacao')
      table.string('posicao')
      table.timestamps()
    })
  }

  down () {
    this.drop('grupo_lista_informacaos')
  }
}

module.exports = GrupoListaInformacaoSchema
