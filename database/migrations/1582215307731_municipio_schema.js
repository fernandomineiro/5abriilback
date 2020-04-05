'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MunicipioSchema extends Schema {
  up () {
    this.create('municipios', (table) => {
      table.increments()
      table.string('cep')
      table.string('codigo')
      table.string('nome')
      table.string('id_estado')
      table.timestamps()
    })
  }

  down () {
    this.drop('municipios')
  }
}

module.exports = MunicipioSchema
