'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AcessoSchema extends Schema {
  up () {
    this.create('acessos', (table) => {
      table.increments()
      table.string('data_acesso')
      table.string('id_usuario')
      table.timestamps()
    })
  }

  down () {
    this.drop('acessos')
  }
}

module.exports = AcessoSchema
