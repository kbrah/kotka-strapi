'use strict';

/**
 * instrument router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::instrument.instrument');
