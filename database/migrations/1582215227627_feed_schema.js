'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedSchema extends Schema {
  up () {
    this.create('feeds', (table) => {
      table.increments()
      table.string('email')
      table.string('nome')
      table.timestamps()
    })
  }

  down () {
    this.drop('feeds')
  }
}

module.exports = FeedSchema
