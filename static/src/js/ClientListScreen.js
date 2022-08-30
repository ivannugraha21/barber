odoo.define('md_barber.ClientListScreen', function(require) {
    // Add filter inside get clients function in ClientListScreen Class
    'use strict';

 	const Registries = require('point_of_sale.Registries');
   	const ClientListScreen = require('point_of_sale.ClientListScreen');

    const Update = (ClientListScreen) => class extends ClientListScreen {

        get clients() {
            let res;
            if (this.state.query && this.state.query.trim() !== '') {
                res = this.env.pos.db.search_partner(this.state.query.trim());
            } else {
                res = this.env.pos.db.get_partners_sorted(1000);
            }
            //
            var filterData = [];
            for (var i = 0; i < res.length; i++) {
                if (res[i].partner_status != 'barber') {
                    filterData.push(res[i]);
                }
            }
            //
            //return res.sort(function (a, b) { return (a.name || '').localeCompare(b.name || '') });
            return filterData.sort(function (a, b) { return (a.name || '').localeCompare(b.name || '') });
        }

    };
    Registries.Component.extend(ClientListScreen, Update);
    return ClientListScreen;


});
