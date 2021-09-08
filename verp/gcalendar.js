frappe.ui.form.on('Google Calendar', {
	refresh(frm) {
		frm.set_value("docname",frm.doc.name);
		refresh_field("docname");
		frappe.call({
					"method": "frappe.client.set_value",
					"args": {
						//replace "Target DocType" with the actual target doctype
						"doctype": "User",
						"name": frm.doc.user,
						//replace target_doctype_link with a link to the document to be changed
						filters: [
                            ["email","=", frm.doc.user]  // You can set any filter you want
                        ],
						"fieldname": {
							//You can update as many fields as you want.  
							"google_calendar": frm.doc.docname
							 //Make sure that you do not put a comma over the last value
						},
					}
				});

	}
});