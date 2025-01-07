# Copyright (c) 2024, Silicon Brain and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

from frappe.website.utils import clear_website_cache,delete_page_cache


class ioiSiteNews(WebsiteGenerator):
	DocType = "ioi Site News"
	def validate(self):
		
		if not self.freeze_portal_result:
			newsHtml=f"""<div class="container-ms">
	<div class="content-news">
		<div class="item-n">
			<div class="img-n" style="background-image: url('{self.image}');"></div>
			<div class="info-n">
				<span>{self.date}</span>
				<span>{self.subject}</span>
			</div>
			<h2>{self.title}</h2>
			<p>{self.description}</p>
			<a href="/fr/news1/{self.name}" class="classic-link">Voir la news</a>
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
			singleHtml=f"""<section class="web-body web-body--applications">
		<div class="container-head-b">
			<div class="head-banner">
				<h1>{self.title}</h1>
			</div>
		</div>
	</section>
	<section class="main-content">
		<div class="container-ms">
			<a href="" class="single-btn">Voir toutes les news</a>

			<div class="content-single-col">
				{self.content}
				
				<!--<div class="img-s-n" style="background-image: url('/images/img_test.png');"></div>-->
			</div>
		</div>
	</section>"""
			
			self.single_result=singleHtml

		if self.portal_result or self.single_result:

			delete_page_cache("/fr/news")

		if not self.route:
			self.route=f"{self.language}/news1/{self.name}"

		if not "news1" in self.route:
			self.route=f"{self.language}/news1/{self.name}"


@frappe.whitelist()
def ioi_clear_website_cache():
	clear_website_cache()
