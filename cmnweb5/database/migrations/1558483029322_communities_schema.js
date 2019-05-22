'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunitiesSchema extends Schema {
  up () {
    this.create('communities', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('desc')
      table.integer('type')
      
    })
  }

  down () {
    this.drop('communities')
  }
}

module.exports = CommunitiesSchema
