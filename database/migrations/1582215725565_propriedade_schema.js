'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropriedadeSchema extends Schema {
  up () {
    this.create('propriedades', (table) => {
      table.increments()
      table.string('ativo')
      table.string('bairro')
      table.string('data_cadastro')
      table.string('endereco')
      table.string('latitude')
      table.string('longitude')
      table.string('nome')
      table.string('telefone')
      table.string('id_municipio')
      table.string('id_produtor')
      table.string('area_total')
      table.string('atividade')
      table.string('id_foto_localizacao')
      table.string('id_foto_sede')
      table.string('id_filial')
      table.string('dap')
      table.string('numero_contrato')
      table.string('area_dap')
      table.string('area_contratada')
      table.string('qtde_contratada')
      table.string('nome_backup')
      table.string('area_produtiva')
      table.string('numero_funcionario')
      table.string('data_inativacao')
      table.string('id_usuario_inativacao')
      table.timestamps()
    })
  }

  down () {
    this.drop('propriedades')
  }
}

module.exports = PropriedadeSchema
