'use strict'
const Community = use('App/Models/Community');


class CommunityController {
  
  async index ({ view }) {
    const communities = await Community.all();

    return view.render('communities.index', { communities: communities.toJSON() });
  };

  
}


module.exports = CommunityController