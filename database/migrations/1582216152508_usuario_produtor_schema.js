'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioProdutorSchema extends Schema {
  up () {
    this.create('usuario_produtors', (table) => {
      table.string('id_usuario')
      table.string('id_produtor')
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario_produtors')
  }
}

module.exports = UsuarioProdutorSchema
