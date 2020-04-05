'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagemSchema extends Schema {
  up () {
    this.create('imagems', (table) => {
      table.increments()
      table.string('data')
      table.string('nome')
      table.string('id_produtor')
      table.string('id_propriedade')
      table.string('id_pergunta')
      table.string('id_resposta')
      table.string('projeto')
      table.string('imagem')
      table.string('id_imagem')
      table.string('id_resposta_web')
      table.timestamps()
    })
  }

  down () {
    this.drop('imagems')
  }
}

module.exports = ImagemSchema
