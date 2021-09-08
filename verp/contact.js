frappe.ui.form.on('Contact',"validate", function(frm) {
    if (frm.doc.date_of_birth){
            if (frm.doc.date_of_birth > frappe.datetime.get_today()) {
                    frappe.msgprint(__("Enter a valid Date of Birth"));
                    frappe.validated = false;
                }
    }

});