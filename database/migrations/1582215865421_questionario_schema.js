'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionarioSchema extends Schema {
  up () {
    this.create('questionarios', (table) => {
      table.increments()
      table.string('ativo')
      table.string('nome')
      table.string('nr_perguntas')
      table.string('nr_temas')
      table.string('contabilizar')
      table.timestamps()
    })
  }

  down () {
    this.drop('questionarios')
  }
}

module.exports = QuestionarioSchema
