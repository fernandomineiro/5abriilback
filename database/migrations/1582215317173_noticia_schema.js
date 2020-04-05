'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoticiaSchema extends Schema {
  up () {
    this.create('noticias', (table) => {
      table.increments()
      table.string('data_alteracao')
      table.string('data_cadastro')
      table.string('informacao')
      table.string('status')
      table.string('titulo')
      table.string('id_usuario')
      table.string('id_foto')
      table.timestamps()
    })
  }

  down () {
    this.drop('noticias')
  }
}

module.exports = NoticiaSchema
