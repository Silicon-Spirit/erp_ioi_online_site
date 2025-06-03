# Copyright (c) 2024, Silicon Brain and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

from frappe import _

from frappe.website.utils import clear_website_cache,delete_page_cache


class ioiSiteNews(WebsiteGenerator):
	DocType = "ioi Site News"
	def validate(self):

		self.route=f"{self.language}/news/{slugify(self.name)}"

		if not "news" in self.route or not self.language+"/" in self.route:
			self.route=f"{self.language}/news/{slugify(self.name)}"
		
		if not self.freeze_portal_result:
			newsHtml=f"""<div class="container-ms">
	<div class="content-news">
		<div class="item-n">
			<div class="img-n"><img src="{self.image}" alt="" width="365" height="205"></div>
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
			<a href="""+news_path+f""" class="single-btn">{_("See all news",self.language)}</a>

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