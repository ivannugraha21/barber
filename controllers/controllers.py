# -*- coding: utf-8 -*-
# from odoo import http


# class MdBarber(http.Controller):
#     @http.route('/md_barber/md_barber', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/md_barber/md_barber/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('md_barber.listing', {
#             'root': '/md_barber/md_barber',
#             'objects': http.request.env['md_barber.md_barber'].search([]),
#         })

#     @http.route('/md_barber/md_barber/objects/<model("md_barber.md_barber"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('md_barber.object', {
#             'object': obj
#         })
