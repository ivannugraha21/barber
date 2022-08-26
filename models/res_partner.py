# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ResPartner(models.Model):
    _inherit = 'res.partner'

    partner_status = fields.Selection([
        ('barber', 'Barber'),
        ('pelanggan', 'Pelanggan')
        ],  default='pelanggan', string="Status Partner")


 


