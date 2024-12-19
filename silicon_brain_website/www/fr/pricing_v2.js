window.onload = function () {
	let four_resellers_el=document.querySelector(".case.case--four")
	if(four_resellers_el){
		console.log("if")
		frappe.call({
			method:"silicon_brain_website.silicon_brain_website.doctype.ioi_site_reseller.ioi_site_reseller.get_site_resellers",
			async: true,
			args:{
				number:4
			},
			callback: function (r) {
				console.log("callback")
				if (r.message)
				{
					console.log(r.message)
					let reseller={}
					let four_resellers=four_resellers_el.children
					for (var i = 0; i < four_resellers.length; i++) {
						reseller=r.message[i]
						console.log()
						four_resellers[i].innerHTML = `<div class="resellers-img"><div id="resellers_img"><img src="${reseller.image}" loading="lazy" data-nav=${reseller.nav_id } class=" referencesSlider__icon | db | fit oc" alt=${reseller.full_name}></div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"></div></div><div class="resellers-txt"><h3 class="location__title | title | fw-bold">${reseller.full_name}<br></h3><address class="location__address">${reseller.address}</address><p>${reseller.phone}${reseller.email?'<br><a href="mailto:' + reseller.email + '">' + reseller.email + '</a>':""}<br>${reseller.website?'<a href="' + reseller.website + '" target="_blank" rel="noopener">' + reseller.website.replace("https://","") + '</a>':""}</p></div></div>`;
					}
				}
				
			}
		})
	}
}
