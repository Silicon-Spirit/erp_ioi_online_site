# Dans utils.py
def inject_navbar_data(context):
	# On vérifie si on est sur une page web (qui a une route)
	if context.get("route"):
		# On appelle votre fonction existante
		from silicon_brain_website.silicon_brain_website.doctype.ioi_site_news.ioi_site_news import get_other_pages
		
		# On injecte le résultat dans le contexte global
		context.relative_page_links = get_other_pages(context.route)