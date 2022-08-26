odoo.define('md_barber.models', function (require) {
    "use strict";
    // Add Partner Status Field in Clients
    var models = require('point_of_sale.models');
    models.load_fields('res.partner', 'partner_status');


});
