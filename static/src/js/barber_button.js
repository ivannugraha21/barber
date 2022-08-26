odoo.define('md_barber.barber_button', function (require) {
	"use strict"

    const ProductScreen = require('point_of_sale.ProductScreen');
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    const ajax = require('web.ajax');
    const { useListener } = require('web.custom_hooks');




    class BarberWidget extends PosComponent {
    	constructor() {
            super(...arguments);
            useListener('click', this.onClick);
        }
        async onClick() {
            const selectedOrderline = this.env.pos.get_order().get_selected_orderline();
            if (!selectedOrderline) return;

            console.log("Ke trigger 1")

           

            // const { confirmed, payload: inputNote } = await this.showPopup('BarberPopupWidget', {
            //     startingValue: selectedOrderline.get_customer_note(),
            //     title: this.env._t('Select Barber'),
            // });

            this.showPopup('BarberListPopup', {
            	title: this.env._t('Select Barber'),
            });

            // if (confirmed) {
            // 	console.log(inputNote);
            //     selectedOrderline.set_customer_note(inputNote);
            // }
        }
    }

    BarberWidget.template = 'BarberWidget';
    Registries.Component.add(BarberWidget);
    return BarberWidget;





/*
    // Start PosBagWidget
    class BarberWidget extends PosComponent {
        constructor() {
            super(...arguments);
            console.log('OnLoad 1')
        }

        get Barbers() {
        	var res = this.env.pos.db.get_partners_sorted(1000);
        	var filter = [];
        	console.log(res);
        	for (var i = 0; i < res.length; i++) {
        		if (res[i].partner_status == 'barber') {
        			filter.push(res[i]);
        		}
        	}
        	return filter;
        }

        renderElement (){
            var self = this;
            //self.showPopup('BarberPopupWidget', {});

            //self.showTempScreen('BarberListScreen', {})
            //

            var res = this.env.pos.db.get_partners_sorted(1000);
            //console.log(res);




            const selectedOrderline = this.env.pos.get_order().get_selected_orderline();
            if (!selectedOrderline) return;

            const { confirmed, payload: inputNote } = await this.showPopup('TextAreaPopup', {
                startingValue: selectedOrderline.get_customer_note(),
                title: this.env._t('Add Customer Note'),
            });

            if (confirmed) {
                selectedOrderline.set_customer_note(inputNote);
            }







            console.log("Button Pressed!!!");
            // var models = require('point_of_sale.models');
			
            // var rpc = require('web.rpc')

   //          rpc.query({
			// 	model: 'res.partner',
			// 	method: 'search_read',
			// 	fields: [],
			// 	domain: [['partner_status', '=', 'barber']],
			// }).then(function(res){
			// 	console.log(res);
			// });
        }



        // get clients() {
        //     let res;
        //     if (this.state.query && this.state.query.trim() !== '') {
        //         res = this.env.pos.db.search_partner(this.state.query.trim());
        //     } else {
        //         res = this.env.pos.db.get_partners_sorted(1000);
        //     }
        //     return res.sort(function (a, b) { return (a.name || '').localeCompare(b.name || '') });
        // }

    };

*/


})