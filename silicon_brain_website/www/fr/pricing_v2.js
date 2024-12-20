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
				if (r.message)
				{
					let reseller={}
					let four_resellers=four_resellers_el.children
					for (var i = 0; i < four_resellers.length; i++) {
						reseller=r.message[i]
						four_resellers[i].innerHTML = `<div class="resellers-img"><div id="resellers_img"><img src="${reseller.image}" loading="lazy" data-nav=${reseller.nav_id } class=" referencesSlider__icon | db | fit oc" alt=${reseller.full_name}></div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"></div></div><div class="resellers-txt"><h3 class="location__title | title | fw-bold">${reseller.full_name}</h3><p>${reseller.phone}${reseller.email?'<br><a href="mailto:' + reseller.email + '">' + reseller.email + '</a>':""}<br>${reseller.website?'<a href="' + reseller.website + '" target="_blank" rel="noopener">' + reseller.website.replace("https://","") + '</a>':""}</p></div></div><a href="https://erp.sales.ioi.online/?var=${reseller.identification}#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=${reseller.identification}#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)"><button class="btn btn--s" type="submit"><span class="btn__label">Essai gratuit / Commande</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32"></path><path d="m18 2 14 14-14 14"></path></svg></button></a>`;
					}
				}
				
			}
		})
	}
}

var reveal_tooltip = function () {
	var tooltip_name = this.dataset.value;
	var tooltip = document.getElementById(tooltip_name);
	tooltip.style.display = "block";
  };
  
  var hide_tooltip = function () {
	var tooltip_name = this.dataset.value;
	var tooltip = document.getElementById(tooltip_name);
	tooltip.style.display = "none";
  };
  
  window.onload = function () {
	const targets = document.getElementsByClassName("feature left");
  
	// change display to 'block' on mouseover
	for (var i = 0; i < targets.length; i++) {
	  targets[i].addEventListener("mouseover", reveal_tooltip, false);
  
	  // change display to 'none' on mouseleave
	  targets[i].addEventListener("mouseleave", hide_tooltip, false);
	}
  };
  
  $(".circle-plus").on("click", function () {
	$(this).toggleClass("opened");
  });
  
  $(".circle-plus-two").on("click", function () {
	$(this).toggleClass("opened");
  });
  
  const myButtons = document.getElementsByClassName("redirect-button");
  
  for (const myButton of myButtons) {
	myButton.addEventListener("click", function () {
	  document.getElementById("hide-categories").style.display = "block";
	});
  }
  