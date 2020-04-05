'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImportacaoSchema extends Schema {
  up () {
    this.create('importacaos', (table) => {
      table.increments()
      table.string('cliente')
      table.string('municipio')
      table.string('filial')
      table.string('uf')
      table.string('dap')
      table.string('area_dap')
      table.string('numero_contrato')
      table.string('area_contratada')
      table.string('comprador')
      table.string('qtde_contratada')
      table.string('telefone')
      table.string('consultor')
      table.string('id_estado')
      table.string('id_municipio')
      table.string('id_produtor')
      table.string('id_filial')
      table.string('id_consultor')
      table.string('id_propriedade')
      table.timestamps()
    })
  }

  down () {
    this.drop('importacaos')
  }
}

module.exports = ImportacaoSchema
