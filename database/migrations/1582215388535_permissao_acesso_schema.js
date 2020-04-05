'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissaoAcessoSchema extends Schema {
  up () {
    this.create('permissao_acessos', (table) => {
      table.increments()
      table.string('id_menu')
      table.string('id_perfil')
      table.timestamps()
    })
  }

  down () {
    this.drop('permissao_acessos')
  }
}

module.exports = PermissaoAcessoSchema
