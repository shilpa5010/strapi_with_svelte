'use strict';

/**
 *  per-mission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::per-mission.per-mission');
