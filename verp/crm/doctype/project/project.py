from __future__ import unicode_literals
import frappe
from frappe import _
from six import iteritems
from email_reply_parser import EmailReplyParser
from frappe.utils import (flt, getdate, get_url, now,
	nowtime, get_time, today, get_datetime, add_days)
from frappe.model.document import Document

class Project(Document):
	pass

@frappe.whitelist()
def create_kanban_board_if_not_exists(project):
	from frappe.desk.doctype.kanban_board.kanban_board import quick_kanban_board

	project = frappe.get_doc('Project', project)
	if not frappe.db.exists('Kanban Board', project.project_name):
		quick_kanban_board('Task', project.project_name, 'status', project.name)

	return True