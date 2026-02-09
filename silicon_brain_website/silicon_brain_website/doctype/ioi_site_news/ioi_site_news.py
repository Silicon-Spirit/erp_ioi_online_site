# Copyright (c) 2024, Silicon Brain and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

from frappe import _

from frappe.website.utils import clear_website_cache,delete_page_cache


class ioiSiteNews(WebsiteGenerator):
	DocType = "ioi Site News"
	def validate(self):

		if self.common_id:
			if frappe.db.exists("ioi Site News",{"language":self.language,"common_id":self.common_id,"name":("!=",self.name)}):
				frappe.throw(_("A ioi Site News with the same common id already exists in this language."))
			

		self.route=f"{self.language}/news/{slugify(self.name)}"

		if not "news" in self.route or not self.language+"/" in self.route:
			self.route=f"{self.language}/news/{slugify(self.name)}"
		
		if not self.freeze_portal_result:
			newsHtml=f"""<div class="container-ms">
	<div class="content-news">
		<div class="item-n">
		<a href="/{self.language}/news/{slugify(self.name)}" class="img-n"><img src="{self.image}" alt="" width="365" height="205">
		</a>
		<div class="info-n">
			<span>{self.date}</span>
			<span>{self.subject or ""}</span>
		</div>
		<h2>{self.title}</h2>
		<p>{self.description}</p>
		<a href="/{self.language}/news/{slugify(self.name)}" class="classic-link">{_("See the news",self.language)}</a>
		</div>
	</div>
</div>"""
			self.portal_result=newsHtml

		if self.portal_result:
			self.real_portal_result=self.portal_result.replace("""<div class="container-ms">
	<div class="content-news">
		""","").replace("""
	</div>
</div>""","")
		
		if not self.freeze_single_result:
			news_path=self.language+"/news"
			singleHtml=f"""<section class="web-body web-body--applications">
		<div class="container-head-b">
			<div class="head-banner">
				<h1>{self.title}</h1>
			</div>
		</div>
	</section>
	<section class="main-content">
		<div class="container-ms">
			<a href=/"""+news_path+f""" class="single-btn">{_("See all news",self.language)}</a>

			<div class="content-single-col">
				{self.content}
				
				<!--<div class="img-s-n" style="background-image: url('/images/img_test.png');"></div>-->
			</div>
		</div>
	</section>"""
			
			self.single_result=singleHtml

		if self.portal_result or self.single_result:

			delete_page_cache(f"/{self.language}/news")
			delete_page_cache(f"/{self.language}")


def web_page_validate(doc, method=None):
	if hasattr(doc, 'custom_common_id') and doc.custom_common_id:
		language=doc.route.split("/")[0]

		if frappe.db.exists("Web Page",{"custom_common_id":doc.custom_common_id,"name":("!=",doc.name),"route":("like",f"{language}/%")}):
			frappe.throw(_("A Web Page with the same common id already exists in this language."))


@frappe.whitelist(allow_guest=True)
def get_other_pages(route):
	if "/" in route:
		web_page = frappe.db.exists("Web Page",{"route":route})
		if web_page:
			meta = frappe.get_meta("Web Page")
			if meta.has_field("custom_common_id"):
				common_id=frappe.db.get_value("Web Page",web_page,"custom_common_id")
		site_news=frappe.db.exists("ioi Site News",{"route":route})
		if site_news:
			common_id=frappe.db.get_value("ioi Site News",site_news,"common_id")
			
		if web_page:
			return frappe.get_all("Web Page",filters={"custom_common_id":common_id,"name":("!=",web_page)},pluck="route")+frappe.get_all("ioi Site News",filters={"common_id":common_id},pluck="route")
		if site_news:
			return frappe.get_all("ioi Site News",filters={"common_id":common_id,"name":("!=",site_news)},pluck="route")+frappe.get_all("Web Page",filters={"custom_common_id":common_id},pluck="route")
		return []


@frappe.whitelist()
def ioi_clear_website_cache():
	clear_website_cache()


def slugify(text):
	import unicodedata
	import re
	# Normalize and remove accents
	text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('ascii')
	# Lowercase
	text = text.lower()
	# Replace non-word characters with hyphens
	text = re.sub(r'[\s]+', '-', text)  # Replace spaces with hyphen
	text = re.sub(r'[^a-z0-9\-]', '', text)  # Remove anything that's not alphanumeric or hyphen
	# Remove multiple hyphens
	text = re.sub(r'-{2,}', '-', text)
	# Strip hyphens from start/end
	text = text.strip('-')
	return text