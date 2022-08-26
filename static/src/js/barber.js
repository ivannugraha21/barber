odoo.define('md_barber.barber', function(require) {
    "use strict";

    var models = require('point_of_sale.models');
    var _super_orderline = models.Orderline.prototype;

    models.Orderline = models.Orderline.extend({
        // initialize: function(attr,options){
        //     // Call SUPER method!!
        //     _super_orderline.init_from_JSON.apply(this,arguments);
        //     console.log('Extend Orderline initialize');
        //     this.customerNote = this.customerNote || '';
        // }
        init_from_JSON: function(json){
            // Call SUPER method!!
            _super_orderline.init_from_JSON.apply(this,arguments);
            // =============
            // DO YOUR STUFF
            // =============
            console.log('Extend Init From Json')
            this.set_barber(json.barber)
        }
        
        // set_barber: function(barber) {
        //     this.braber = barber;
        // },

        // get_barber: function() {
        //     return this.barber;
        // },
    });


    // models.Order = models.Order.extend({

    //     init: function(parent, options) {
    //         var self = this;
    //         this._super(parent,options);
    //         this.set_barber();
    //         console.log("Load Init Order Line")
    //     },
        
    //     set_barber: function(barber){
    //         if (!this.barber){
    //             this.barber = barber
    //         }
    //         console.log("Set Barber")
    //     },

    //     get_barber: function(){
    //         var order = this.pos.get_order();
    //         if (order) {
    //             var barber = this.barber
    //             return barber
    //         }
    //     },

      

    // });
});