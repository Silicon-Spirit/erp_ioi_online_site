// Copyright (c) 2024, Silicon Brain and contributors
// For license information, please see license.txt

frappe.ui.form.on("ioi Site News", {
	refresh(frm) {
		if (frm.is_new()){
			frm.set_df_property("portal_result","hidden",1)
			frm.set_df_property("single_result","hidden",1)
		}else{
			frm.set_df_property("portal_result","hidden",0)
			frm.set_df_property("single_result","hidden",0)
			add_lock_unlock_button(frm)
		}
		let newnameel=document.querySelector("[data-fieldname=__newname]")
		if (newnameel){
			newnameel.addEventListener("blur", function(){
				frm.save()
			}, true);
		}
	},
});

function add_lock_unlock_button(frm) {
	if (frm.doc.enabled == 0) {
		frm.add_custom_button(__("Enable"), function() {
			frm.set_value("enabled",1);
			frm.save()
		});
	} else {
		frm.add_custom_button(__("Disable"), function() {
			frm.set_value("enabled",0);
			frm.save()
		});
	}
  }