'use strict';

/**
 *  instrument controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::instrument.instrument');
