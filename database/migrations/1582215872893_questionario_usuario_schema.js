'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionarioUsuarioSchema extends Schema {
  up () {
    this.create('questionario_usuarios', (table) => {
      table.increments()
      table.string('selecionado')
      table.string('id_questionado')
      table.string('id_usuario')
      table.timestamps()
    })
  }

  down () {
    this.drop('questionario_usuarios')
  }
}

module.exports = QuestionarioUsuarioSchema
