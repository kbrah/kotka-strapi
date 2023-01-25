'use strict';

/**
 * instrument service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instrument.instrument');
