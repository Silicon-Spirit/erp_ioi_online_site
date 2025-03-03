from . import __version__ as app_version

app_name = "silicon_brain_website"
app_title = "Silicon Brain Website"
app_publisher = "Silicon Brain"
app_description = "Website of Silicon Brain"
app_email = "pierre.godfroid@silicon-brain.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/silicon_brain_website/css/silicon_brain_website.css"
# app_include_js = "/assets/silicon_brain_website/js/silicon_brain_website.js"

# include js, css files in header of web template
# web_include_css = "/assets/silicon_brain_website/css/silicon_brain_website.css"
# web_include_js = "/assets/silicon_brain_website/js/silicon_brain_website.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "silicon_brain_website/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "fr"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

#Website Redirects
# ----------
website_redirects = [
{"source": "/en/silicon-ioi", "target": "/en/silicon_ioi"},
{"source": "/fr/silicon-ioi", "target": "/fr/silicon_ioi"},
{"source": "/nl/silicon-ioi", "target": "/nl/silicon_ioi"},
{"source": "/contact", "target": "/fr/contact"},
{"source": "/fr/universe", "target": "/fr/contact"},
{"source": "/en/universe", "target": "/en/contact"},
{"source": "/nl/universe", "target": "/nl/contact"},
{"source": "/about", "target": "/fr/about_us"},
{"source": "/experts", "target": "/fr/experts"},
{"source": "/", "target": "/fr"},
{"source": "/privacy", "target": "/fr/privacy"},
{"source": "/news", "target": "/fr/news"},
{"source": "/news1", "target": "/fr/news"},
{"source": "/silicon_ioi", "target": "/fr/silicon_ioi"},
{"source": "/silicon-ioi", "target": "/fr/silicon_ioi"},
{"source": "/en/documentation", "target": "/en/contact"},
{"source": "/fr/documentation", "target": "/fr/contact"},
{"source": "/nl/documentation", "target": "/nl/contact"},
{"source": "/en/faq", "target": "/en/contact"},
{"source": "/fr/faq", "target": "/fr/contact"},
{"source": "/nl/faq", "target": "/nl/contact"},
{"source": "/fr/about", "target": "/fr/about_us"},
{"source": "/en/about", "target": "/en/about_us"},  
{"source": "/nl/about", "target": "/nl/about_us"},  
{"source": "/en/about-us", "target": "/en/about_us"},
{"source": "/fr/about-us", "target": "/fr/about_us"},
{"source": "/nl/about-us", "target": "/nl/about_us"},
{"source": "/en/expert-accounting", "target": "/en/expert_accounting"},
{"source": "/fr/expert-accounting", "target": "/fr/expert_accounting"},
{"source": "/nl/expert-accounting", "target": "/nl/expert_accounting"},
{"source": "/en/my-business", "target": "/en/my_business"},
{"source": "/fr/my-business", "target": "/fr/my_business"},
{"source": "/nl/my-business", "target": "/nl/my_business"},
{"source": "/en/new-generation", "target": "/en/new_generation"},
{"source": "/fr/new-generation", "target": "/fr/new_generation"},
{"source": "/nl/new-generation", "target": "/nl/new_generation"},
{"source": "/en/park-manager", "target": "/en/park_manager"},
{"source": "/fr/park-manager", "target": "/fr/park_manager"},
{"source": "/nl/park-manager", "target": "/nl/park_manager"},
{"source": "/en/pack-accounting", "target": "/en/pack_accounting"},
{"source": "/fr/pack-accounting", "target": "/fr/pack_accounting"},
{"source": "/nl/pack-accounting", "target": "/nl/pack_accounting"},
]

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "silicon_brain_website.utils.jinja_methods",
#	"filters": "silicon_brain_website.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "silicon_brain_website.install.before_install"
# after_install = "silicon_brain_website.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "silicon_brain_website.uninstall.before_uninstall"
# after_uninstall = "silicon_brain_website.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "silicon_brain_website.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"silicon_brain_website.tasks.all"
#	],
#	"daily": [
#		"silicon_brain_website.tasks.daily"
#	],
#	"hourly": [
#		"silicon_brain_website.tasks.hourly"
#	],
#	"weekly": [
#		"silicon_brain_website.tasks.weekly"
#	],
#	"monthly": [
#		"silicon_brain_website.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "silicon_brain_website.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "silicon_brain_website.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "silicon_brain_website.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"silicon_brain_website.auth.validate"
# ]
