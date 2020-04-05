'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuePerguntaSchema extends Schema {
  up () {
    this.create('que_perguntas', (table) => {
      table.increments()
      table.string('ativo')
      table.string('item')
      table.string('nivel_de_importancia')
      table.string('nome')
      table.string('observacoes')
      table.string('id_local_verificacao')
      table.string('id_tema')
      table.string('id_verificador')
      table.string('contabilizar')
      table.string('id_criterio')
      table.string('escolha_multipla')
      table.string('id_grupo_lista')
      table.string('qual')
      table.string('quantidade')
      table.string('porque')
      table.string('obriga_nao')
      table.string('obriga_sim')
      table.string('obriga_foto')
      table.string('posicao')
      table.timestamps()
    })
  }

  down () {
    this.drop('que_perguntas')
  }
}

module.exports = QuePerguntaSchema
