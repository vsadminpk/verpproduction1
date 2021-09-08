// Copyright (c) 2019, Vesper Solutions
// For license information, please see license.txt

frappe.ui.form.on('Appointment', {
	refresh: function(frm) {

		if(frm.doc.calendar_event){
			frm.add_custom_button(__(frm.doc.calendar_event),()=>{
				frappe.set_route("Form", "Event", frm.doc.calendar_event);
			});
		}
	}/*,
	onload: function(frm){
		frm.set_query("appointment_with", function(){
			return {
				filters : {
					"name": ["in", ["Customer", "Lead"]]
				}
			};
		});
	}*/
});
