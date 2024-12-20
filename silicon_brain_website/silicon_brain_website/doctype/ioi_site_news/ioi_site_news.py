# Copyright (c) 2024, Silicon Brain and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ioiSiteNews(Document):
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
			<a href="/fr/news01?news={self.name}" class="classic-link">Voir la news</a>
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
