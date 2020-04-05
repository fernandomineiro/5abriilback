'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContratoSchema extends Schema {
  up () {
    this.create('contratoes', (table) => {
      table.increments()
      table.string('area_contratada')
      table.string('area_dap')
      table.string('ativo')
      table.string('dap')
      table.string('data_exclusao')
      table.string('numero_contrato')
      table.string('qtde_contratada')
      table.string('id_filial')
      table.string('id_produtor')
      table.string('id_propriedade')
      table.string('id_safra')
      table.string('id_usuario_exclusao')
      table.timestamps()
    })
  }

  down () {
    this.drop('contratoes')
  }
}

module.exports = ContratoSchema
