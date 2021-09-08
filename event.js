frappe.ui.form.on('Event', {
	user:function(frm) {
	   var resp = frappe.db.get_value(
		doctype="Google Calendar",
		filters={"user": frm.doc.user},
		fieldname=["docname"]
	);
	    msgprint(resp);
	    frm.set_value("google_calendar",resp);
	    refresh_field("google_calendar");
		},
	starts_on:function(frm) {
		let today = new Date();

		// setting datepicker options to set min date & min time
		today.setHours(today.getHours() + 1 );
		frm.get_field('starts_on').$input.datepicker({
			maxMinutes: 0,
			minDate: today,
			timeFormat: 'hh:00',
			onSelect: function (fd, d, picker) {
				if (!d) return;
				var date = d.toDateString();
				if (date === today.toDateString()) {
					picker.update({
						minHours: (today.getHours() + 1)
					});
				} else {
					picker.update({
						minHours: 0
					});
				}
				frm.get_field('starts_on').$input.trigger('change');
			}
		});
		const $tp = frm.get_field('starts_on').datepicker.timepicker;
		$tp.$minutes.parent().css('display', 'none');
		$tp.$minutesText.css('display', 'none');
		$tp.$minutesText.prev().css('display', 'none');
		$tp.$seconds.parent().css('display', 'none');
	}
});