'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('data_alteracao')
      table.string('data_cadastro')
      table.string('login')
      table.string('senha')
      table.string('status')
      table.string('id_perfil')
      table.string('id_pessoa')
      table.string('id_foto')
      table.string('id_exclusao')
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
