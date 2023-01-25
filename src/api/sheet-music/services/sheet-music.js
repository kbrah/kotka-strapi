'use strict';

/**
 * sheet-music service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sheet-music.sheet-music');
