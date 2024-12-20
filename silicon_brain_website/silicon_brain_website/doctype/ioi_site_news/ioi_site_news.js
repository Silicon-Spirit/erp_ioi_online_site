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
		}
		let newnameel=document.querySelector("[data-fieldname=__newname]")
		if (newnameel){
			newnameel.addEventListener("blur", function(){
				frm.save()
			}, true);
		}
		frm.add_custom_button(__("Clear News Website Cache"), () => {
			frappe.call({
				method:"silicon_brain_website.silicon_brain_website.doctype.ioi_site_news.ioi_site_news.clear_news_cache",
			})
		});
	}
	
});

