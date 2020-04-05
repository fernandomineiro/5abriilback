'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PessoaCpfSchema extends Schema {
  up () {
    this.create('pessoa_cpfs', (table) => {
      table.increments()
      table.string('administrador')
      table.string('bairro')
      table.string('celular')
      table.string('consultor')
      table.string('endereco')
      table.string('nome')
      table.string('produtor')
      table.string('telefone')
      table.string('id_municipio')
      table.string('email')
      table.string('cpf')
      table.timestamps()
    })
  }

  down () {
    this.drop('pessoa_cpfs')
  }
}

module.exports = PessoaCpfSchema
