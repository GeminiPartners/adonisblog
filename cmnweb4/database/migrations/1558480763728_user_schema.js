'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('email')
      table.integer('role')
      table.string('location')
      table.text('instructions_default')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
