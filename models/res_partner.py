# -*- coding: utf-8 -*-

from odoo import models, fields, api
from datetime import date


class ResPartner(models.Model):
    _inherit = 'res.partner'

    partner_status = fields.Selection([
        ('barber', 'Barber'),
        ('customer', 'Customer')
        ],  default='customer', string="Partner Status")

    #
    partner_dob = fields.Date(string="Date of Birth")
    partner_age = fields.Integer(string="Age", compute="compute_age", store=True)



    # Everytime theres a change on the input
    @api.depends('partner_dob')
    # Trigger this function
    def compute_age(self):

        for rec in self:
            today = date.today()
            if rec.partner_dob:
                rec.partner_age = today.year - rec.partner_dob.year - ((today.month, today.day) < (rec.partner_dob.month, rec.partner_dob.day))
            else:
                rec.partner_age = 0





