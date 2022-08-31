odoo.define('md_barber.barber', function(require) {
    "use strict";

    var models = require('point_of_sale.models');
    var _super_orderline = models.Orderline.prototype;

    models.Orderline = models.Orderline.extend({
        initialize: function(attr,options){
            var self = this;
            _super_orderline.initialize.apply(this,arguments);
            // Add new command inside function
            this.barber = this.barber || '';
        },

        set_barber: function(barber) {
            this.barber = barber;
        },

        get_barber: function() {
            return this.barber;
        },

        export_as_JSON: function() {
            var pack_lot_ids = [];
            if (this.has_product_lot){
                this.pack_lot_lines.each(_.bind( function(item) {
                    return pack_lot_ids.push([0, 0, item.export_as_JSON()]);
                }, this));
            }
            //console.log('Export Override');
            return {
                qty: this.get_quantity(),
                price_unit: this.get_unit_price(),
                price_subtotal: this.get_price_without_tax(),
                price_subtotal_incl: this.get_price_with_tax(),
                discount: this.get_discount(),
                product_id: this.get_product().id,
                tax_ids: [[6, false, _.map(this.get_applicable_taxes(), function(tax){ return tax.id; })]],
                id: this.id,
                pack_lot_ids: pack_lot_ids,
                description: this.description,
                full_product_name: this.get_full_product_name(),
                price_extra: this.get_price_extra(),
                customer_note: this.get_customer_note(),
                refunded_orderline_id: this.refunded_orderline_id,
                price_manually_set: this.price_manually_set,
                barber: this.get_barber().id
            };
        },
    });

});