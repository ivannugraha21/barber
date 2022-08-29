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
           	// Show PopUp 
            this.showPopup('BarberListPopup', {
            	title: this.env._t('Select Barber'),
            });
        }
    }

    BarberWidget.template = 'BarberWidget';
    Registries.Component.add(BarberWidget);
    return BarberWidget;

})