'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MenuSchema extends Schema {
  up () {
    this.create('menus', (table) => {
      table.increments()
      table.string('diretorio')
      table.string('nome')
      table.string('role_menu')
      table.timestamps()
    })
  }

  down () {
    this.drop('menus')
  }
}

module.exports = MenuSchema
