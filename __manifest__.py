# -*- coding: utf-8 -*-
{
    'name': "md_barber",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'point_of_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        'views/res_partner_inherit.xml',
        'views/pos_order_inherit.xml',
    ],

    'assets': {
        'point_of_sale.assets': [
            #
            '/md_barber/static/src/js/barber_button.js',
            '/md_barber/static/src/js/barber.js',
            '/md_barber/static/src/js/BarberListPopup.js',
            '/md_barber/static/src/js/models.js',
            '/md_barber/static/src/js/Orderline.js',
            #
            '/md_barber/static/src/css/custom_barber.css',
        ],
        'web.assets_qweb': [
            '/md_barber/static/src/xml/barber_button_view.xml',
        ],
    },
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
