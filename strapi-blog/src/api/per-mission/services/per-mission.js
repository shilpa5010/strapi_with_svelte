'use strict';

/**
 * per-mission service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::per-mission.per-mission');
