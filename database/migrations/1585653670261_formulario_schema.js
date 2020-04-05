'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormularioSchema extends Schema {
  up () {
    this.create('formularios', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('formularios')
  }
}

module.exports = FormularioSchema
