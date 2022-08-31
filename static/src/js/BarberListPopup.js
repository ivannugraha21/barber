odoo.define('md_barber.BarberListPopup', function(require) {
    'use strict';

    const { useState, useRef } = owl.hooks;
    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');
    const { _lt } = require('@web/core/l10n/translation');

    class BarberListPopup extends AbstractAwaitablePopup {
        /**
         * @param {Object} props
         * @param {string} props.startingValue
         */
        constructor() {
            super(...arguments);
            this.state = useState({ inputValue: this.props.startingValue });
            this.inputRef = useRef('input');
        }

        // Ketika save button pada modal di klik
        confirm() {
            var textInput = $('.barber-select option:selected').text();
            var valueInput = $('.barber-select option:selected').val();
            //console.log(valueInput);
            //
            var dataPartners = this.env.pos.db.get_partners_sorted(1000);
            //console.log(dataPartners);
            var dataPartner = false;
            for (var i = 0; i < dataPartners.length; i++) {
                //console.log(dataPartners[i].id + ' / ' + valueInput);
                if (+dataPartners[i].id == +valueInput) {
                    dataPartner = dataPartners[i];
                }
            }
            //console.log(dataPartner.name);
            //
            //console.log(selectedOrderline);
            //
            const selectedOrderline = this.env.pos.get_order().get_selected_orderline();
            selectedOrderline.set_barber(dataPartner);
            //
            this.showScreen('ProductScreen');
            this.trigger('close-popup');
        }


        get Barbers() {
            var res = this.env.pos.db.get_partners_sorted(1000);
            var filter = [];
            //console.log(res);
            for (var i = 0; i < res.length; i++) {
                if (res[i].partner_status == 'barber') {
                    filter.push(res[i]);
                }
            }
            return filter;
        }

    }
    BarberListPopup.template = 'BarberListPopup';
    BarberListPopup.defaultProps = {
        confirmText: _lt('Ok'),
        cancelText: _lt('Cancel'),
        title: '',
        body: '',
    };

    Registries.Component.add(BarberListPopup);

    return BarberListPopup;
});
