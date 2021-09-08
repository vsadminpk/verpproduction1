frappe.ui.form.on('Project', {
	refresh(frm) {
	frm.add_custom_button(__("Kanban Board"), () => {
					frappe.call('verp.crm.doctype.project.project.create_kanban_board_if_not_exists', {
						project: frm.doc.name
					}).then(() => {
						frappe.set_route('List', 'Task', 'Kanban', frm.doc.project_name);
					});
				});
	}
});