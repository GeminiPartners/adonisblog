'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthRequired {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    try{
      await auth.check();
    } catch ( error ){
      response.redirect( '/' );
      return null;
    }
    
    // call next to advance the request
    await next()
  }
}

module.exports = AuthRequired
