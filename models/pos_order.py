# -*- coding: utf-8 -*-

from odoo import api, fields, models, _
from datetime import datetime, timedelta
from functools import partial
import pytz

# class PosOrder(models.Model):
#     _inherit = "pos.order"

#     barber = fields.Many2one('res.partner', string="Barber")


class PosOrderLine(models.Model):
    _inherit = "pos.order.line"

    barber = fields.Many2one('res.partner', string="Barber")
    #barber = fields.Char(string='Barber Info', help='Barber Info')


