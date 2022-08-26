odoo.define('point_of_sale.BarberLine', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');

    class BarberLine extends PosComponent {
        get highlight() {
            return this.props.partner !== this.props.selectedClient ? '' : 'highlight';
        }
    }
    BarberLine.template = 'BarberLine';

    Registries.Component.add(BarberLine);

    return BarberLine;
});
