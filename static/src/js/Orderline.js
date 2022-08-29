odoo.define('md_barber.Orderline', function(require) {
    // Add new function for Barber inside Orderline Class
    'use strict';

 	const Registries = require('point_of_sale.Registries');
   	const Orderline = require('point_of_sale.Orderline');

    const PosLineDiscount = (Orderline) => class extends Orderline {

        get barber() {
            console.log('triger : get barber()25');
            if (this.props.line.get_barber()) {
            	return this.props.line.get_barber().name;	
            }
            // var getBarber = this.props.line.get_barber();
            // console.log(getBarber);  
        }
    };
    Registries.Component.extend(Orderline, PosLineDiscount);
    return Orderline;


});
