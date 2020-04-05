'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnexoRespostaSchema extends Schema {
  up () {
    this.create('anexo_respostas', (table) => {
      table.increments()
      table.string('arquivo')
      table.string('cadastro')
      table.string('nome')
      table.string('tipo')
      table.string('id_resposta')
      table.timestamps()
    })
  }

  down () {
    this.drop('anexo_respostas')
  }
}

module.exports = AnexoRespostaSchema
