# -*- coding: utf-8 -*-
# Copyright (c) 2021, Vesper Solutions  and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.document import Document

class Client(Document):
	def on_update(self):
		if self.email_group:
			exists = frappe.db.exists(
				"Email Group Member",
					{
						"email_group": self.email_group,
						"email": self.primary_contact_email,
					},
					)
			if not exists:
				todo = frappe.get_doc({"doctype":"Email Group Member","email_group": self.email_group,"email": self.primary_contact_email,})
				todo.insert()


