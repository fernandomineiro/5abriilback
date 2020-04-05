'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventoSchema extends Schema {
  up () {
    this.create('eventos', (table) => {
      table.increments()
      table.string('data_alteracao')
      table.string('data_cadastro')
      table.string('informacao')
      table.string('status')
      table.string('titulo')
      table.string('id_usuario')
      table.string('foto_descricao')
      table.string('foto_imagem')
      table.string('data_inicio')
      table.string('data_termino')
      table.string('id_foto')
      table.timestamps()
    })
  }

  down () {
    this.drop('eventos')
  }
}

module.exports = EventoSchema
