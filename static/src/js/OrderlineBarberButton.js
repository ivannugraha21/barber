odoo.define('md_barber.OrderlineBarberButton', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require('web.custom_hooks');
    const Registries = require('point_of_sale.Registries');

    class OrderlineBarberButton extends PosComponent {
        constructor() {
            super(...arguments);
            useListener('click', this.onClick);
        }
        async onClick() {
            const selectedOrderline = this.env.pos.get_order().get_selected_orderline();
            if (!selectedOrderline) return;

            const { confirmed, payload: inputNote } = await this.showPopup('TextAreaPopup', {
                startingValue: selectedOrderline.get_customer_note(),
                title: this.env._t('Add Customer Note'),
            });

            if (confirmed) {
                selectedOrderline.set_customer_note(inputNote);
            }
        }
    }
    OrderlineBarberButton.template = 'OrderlineBarberButton';

    ProductScreen.addControlButton({
        component: OrderlineBarberButton
    });

    Registries.Component.add(OrderlineBarberButton);

    return OrderlineBarberButton;
});
