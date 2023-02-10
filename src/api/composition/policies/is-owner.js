'use strict';

/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In is-owner policy.');
    const id = policyContext.params.id

    const entity = await strapi.entityService.findOne('api::composition.composition', id, { fields: ["title"], populate: { added_by: true } })

    const user = await policyContext.state.user

    console.log(entity)
    if (entity?.added_by && user.id === entity.added_by.id) {

        return true;
    }
    return false;

    // const canDoSomething = true;

    // if (canDoSomething) {
    //     return true;
    // }

    // return false;
};
