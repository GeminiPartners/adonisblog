'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunitiesSchema extends Schema {
  up () {
    this.create('communities', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('communities')
  }
}

module.exports = CommunitiesSchema
