# Copyright (c) 2024, Silicon Brain and contributors
# For license information, please see license.txt

import frappe
import random
from frappe.model.document import Document

from frappe.utils import cint


class ioiSiteReseller(Document):
	pass

@frappe.whitelist(allow_guest=True)
def get_site_resellers(number=0):
	if number:
		site_resellers=frappe.get_all("ioi Site Reseller",fields=["short_id","full_name","identification","address","phone","email","website","longitude","latitude","image","nav_id","summary"],filters={"enabled":True},group_by="short_id")
	else:
		site_resellers=frappe.get_all("ioi Site Reseller",fields=["short_id","full_name","identification","address","phone","email","website","longitude","latitude","image","nav_id","summary"],filters={"enabled":True})
	site_resellers_l=len(site_resellers)
	if number:
		number=cint(number)
		if number>site_resellers_l:
			number=site_resellers_l
	random.shuffle(site_resellers)

	if number:
		site_resellers=site_resellers[:number]

	return site_resellers
	
