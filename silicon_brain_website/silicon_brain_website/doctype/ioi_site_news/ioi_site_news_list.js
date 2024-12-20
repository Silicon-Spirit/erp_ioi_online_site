// Copyright (c) 2024, Silicon Brain and contributors
// For license information, please see license.txt
let CurrentList = Object;
frappe.listview_settings['ioi Site News'] = {

	hide_name_column: true,
	
	onload(listview) {
		CurrentList = new silicon_ioi.list.ioiList(listview);
		CurrentList.hide_sidebar();
		CurrentList.set_title('ioi Site News');

		let me = this
		listview.page.add_inner_button(__("Clear Website Cache"), () => frappe.call({
			method:"silicon_brain_website.silicon_brain_website.doctype.ioi_site_news.ioi_site_news.ioi_clear_website_cache",
		}))
	}
}

