'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QueTemaSchema extends Schema {
  up () {
    this.create('que_temas', (table) => {
      table.increments()
      table.string('ativo')
      table.string('nome')
      table.string('id_questionario')
      table.string('item')
      table.string('posicao')
      table.timestamps()
    })
  }

  down () {
    this.drop('que_temas')
  }
}

module.exports = QueTemaSchema
