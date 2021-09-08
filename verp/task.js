frappe.ui.form.on('Task', {
	refresh:function(frm) {
		if (frm.doc.percompleted != 100){
		    if (frm.doc.status == "Completed"){
		        msgprint('Warning Status is Completed and Item checklist is incomplete');
		    }
		}
	},
	date1:function(frm){
	    var daydiff = frm.doc.date2 - frm.doc.date1;
	    frm.set_value("date3",daydiff);
	    refresh_field("date3");
	},
	date2:function(frm){
	    var daydiff = frm.doc.date2 - frm.doc.date1;
	    frm.set_value("date3",daydiff);
	    refresh_field("date3");
	}
});

frappe.ui.form.on("Task Checklist", {
	completed: function(frm, cdt, cdn) {
		var d = locals[cdt][cdn];
		var total = 0;
		var stat = 0;
		var per = 0;
		var hun = 100;
        frm.doc.checklist.forEach(function(d) {
            total+= d.total;
            if (d.completed == 1){
                d.stat = 1;
                stat+=1;
            } 
            per = (stat/total)*hun;
            
        });
        frm.set_value('percompleted', per);
        refresh_field("percompleted");
	},
	item: function(frm, cdt, cdn) {
		var d = locals[cdt][cdn];
		var total = 0;
		var stat = 0;
		var per = 0;
		var hun = 100;
        frm.doc.checklist.forEach(function(d) {
            total+= d.total;
            if (d.completed == 1){
                d.stat = 1;
                stat+=1;
            } 
            per = (stat/total)*hun;
            
        });
        frm.set_value('percompleted', per);
        refresh_field("percompleted");
	}
});