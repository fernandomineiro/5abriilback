'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BiodieselSchema extends Schema {
  up () {
    this.create('biodiesels', (table) => {
      table.increments()
      table.string('pessoa')
      table.string('idmunicipio')
      table.string('municipio')
      table.string('filial')
      table.string('id_filial')
      table.string('id_uf')
      table.string('AREA DAP')
      table.string('AREA_CONTRATADA')
      table.string('CPF')
      table.string('CONSULTOR_1')
      table.string('QTDE (KG) CONTRATADA')
      table.string('identificação')
      table.string('nome da propriedade')
      table.timestamps()
    })
  }

  down () {
    this.drop('biodiesels')
  }
}

module.exports = BiodieselSchema
