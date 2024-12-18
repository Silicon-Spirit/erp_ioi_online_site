function trigger_opacity(){
    let Shidden = document.getElementById("full_page");
    let Cnav= document.getElementById("bg_opacity");
    if  (Cnav.style.display == "block"){Cnav.style.display = "none";Shidden.style.overflow = "auto";}
    else{Cnav.style.display = "block";Shidden.style.overflow = "hidden";}
  }
  
  function show_nav(source){
      trigger_opacity()
      let navi= source.dataset.nav; 
      let div = document.getElementById(navi);
      div.classList.remove('hidden_nav');
      setTimeout(function () {
      div.classList.add('show-nav');
      }, 20);
  }
  
  
  bg_opacity.addEventListener('click',()=>{
      let div = document.getElementsByClassName('show-nav');
      div[0].classList.add('hidden_nav');
      div[0].classList.remove('show-nav');
      trigger_opacity()
  }) 
  
  let sip_summary = "<div class='summary_txt'>SIP est un intégrateur ERP, spécialisé en solutions pour PME.<br>"+
  "Grâce à une équipe de 23 personnes et de 6 consultants senior, SIP offre un service complet autour de votre ERP :<br>"+
  "configuration, formation, accompagnement et suivi de votre projet sur le très long terme.<br>"+
  "Les 2 plus-values de SIP :<br>"+
  "<ul class='summary_list'><li>un suivi et une approche personnalisés pour tirer le meilleur de votre outil ERP.</li>"+
  "<li>des solutions pour compléter votre ERP : cloud privé, Azure, Microsoft 365, Plateforme e-commerce, cybersécurité, …</li></ul></div>";

  let ibgraf_summary ="<div class='summary_txt'>IBGraf vise à aider les acteurs économiques, quelles que soient leurs spécificités, à disposer des meilleures solutions en informatique de gestion proposées par les meilleurs éditeurs,<br>"+
  "pour leur permettre de gérer et de piloter sereinement leurs activités. Nos valeurs : maturité & vitalité, respect & bienveillance,<br><br>"+
  "expertise métier & performance.</div>";

  let brainstorming_summary = "<div class='summary_txt'>Brainstorming promet à l’entreprise une gestion sereine via une expérience I.T. simple et optimisée.<br><br>"+
  "Notre équipe d’expert métier optimisera la gestion de votre entreprise grâce à des solutions innovantes.<br><br>"+
  "Cinq métiers sont assurés par 40 passionnés<br>"+
  "<ul class='summary_list'><li>ERP Business Management</li>"+
  "<li>Accounting Software</li>"+
  "<li>Business Intelligence</li>"+
  "<li>System Infrastructure</li>"+
  "<li>Cloud Computing</li></ul></div>"
  

  var resellers=[];
  //list of resellers

  window.onload = function () {
  
    frappe.call({
        method:"silicon_brain_website.silicon_brain_website.doctype.ioi_site_reseller.ioi_site_reseller.get_site_resellers",
        async: false,
        callback: function (r) {
        var locator_list= document.getElementById("locator_list");
        var reseller_card_list=document.getElementById("reseller_card_list");
        var reseller_list=document.getElementById("reseller_list");

        var used_resellers = [];
        resellers=r.message;
        
        
            for (let i = resellers.length - 1; i >= 0; i--) {
                
                //map link
                var elementli = document.createElement("li");

                elementli.className="locatorList__listEl | location";
                elementli.innerHTML = `<div class="resellers-all "><div class="resellers-img pc-only"><div id="resellers_img"><img src="${resellers[i].image}" loading="lazy" onclick="show_nav(this)" data-nav="${resellers[i].nav_id}" class=" referencesSlider__icon | db | fit oc" alt="${resellers[i].full_name}"></div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=${resellers[i].identification.toUpperCase()}#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=${resellers[i].identification.toUpperCase()}#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)"><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Essai gratuit / Commande</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div><div class="resellers-txt"><a onclick="map_focus(this)" data-lon=${resellers[i].longitude}data-lat=${resellers[i].latitude}class="pointer"><h3 class="location__title | title | fw-bold">${resellers[i].full_name}<br></h3><address class="location__address">${resellers[i].address}</address></a><p>'${resellers[i].phone}${resellers[i].email?'<br><a href="mailto:' + resellers[i].email + '">' + resellers[i].email + '</a>':""}<br>${resellers[i].website?'<a href="' + resellers[i].website + '" target="_blank" rel="noopener">' + resellers[i].website.replace("https://","") + '</a>':""}</p></div><div class="mb-only"><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)" `+'><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Essai gratuit / Commande</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" ``viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div></div>';
                locator_list.appendChild(elementli);
    
                if(!used_resellers.includes(resellers[i].short_id)){
    
                //card list
                var elementdiv = document.createElement("div");
                elementdiv.className="referencesSlider__slide | actr pr | col-4 t-col-4 | m-100 | js-SmoothSlider-slide";
                elementdiv.innerHTML = '<figure class="referencesSlider__fig | up fit"><img src='+ resellers[i].image +' loading="lazy" onclick="show_nav(this)" data-nav='+ resellers[i].nav_id +' class=" referencesSlider__icon | db | fit oc" alt='+ resellers[i].full_name +'></figure><a href="#" target="_blank" rel="noopener" class="fill"><span class="sr-only">Want to know more ?</span></a>'
                reseller_card_list.appendChild(elementdiv);
    
                //nav list
                let navhtml = '';
                let emailhtml = "";
                let websitehtml="";
                for (let j = resellers.length - 1; j >= 0; j--) {
                    if(resellers[i].short_id == resellers[j].short_id){
                        if(resellers[j].mail){
                            emailhtml = '<br><a href="mailto:' + resellers[j].email + '">' + resellers[j].email + '</a>'
                        }
                        if(resellers[j].website){
                            websitehtml = '<a href="' + resellers[j].website + '" target="_blank" rel="noopener">' + resellers[j].vweb + '</a>';
                        }
                        if (navhtml === ''){
                            navhtml = navhtml + '<div class="flex_change nav_txt" style="display:flex; flex-direction: row;"><div style="min-width:50%; padding-left:25px;">'
                            navhtml = navhtml + '<p class="nav-text-modif nav-text">'+ resellers[j].full_name +'</p><p class="nav-text">'+ resellers[j].address +'<br></p>' + '<p class="nav-text">' + resellers[j].phone + emailhtml + '<br>'+websitehtml+'</p>';
                        }else{
                            navhtml = navhtml + '<div class="flex_change nav_txt" style="display:flex; flex-direction: row;"><div style="min-width:50%; padding-left:25px;">'
                            navhtml = navhtml + '<br><p class="nav-text-modif nav-text">'+ resellers[j].full_name +'</p><p class="nav-text">'+ resellers[j].address +'<br></p>' + '<p class="nav-text">' + resellers[j].phone + emailhtml + '<br>'+websitehtml+'</p>';
                        }
    
                        navhtml = navhtml + `</div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)`+'"><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Essai gratuit / Commande</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" ``viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div>'
                    }
                }
                var elementnav = document.createElement("nav");
                elementnav.setAttribute('id', resellers[i].nav_id);
                elementnav.className="brainstorming-nav nav-all hidden_nav";
                let summary = ""
                if(resellers[i].summary !== ""){
                summary = '</div><div class="summary-txt"><p>'+ resellers[i].summary +'</p></div>';
                }
                elementnav.innerHTML = '<div class="nav-header"><a href='+ resellers[i].website +'><img class="nav-img" src='+ resellers[i].image +' loading="lazy" alt="'+ resellers[i].full_name +'"/> </a>' + summary + navhtml;
                reseller_list.appendChild(elementnav);
    
                }
    
                used_resellers.push(resellers[i].short_id);
            }
        }
    });
}

    
    


  //OpenStreetMap Leaflet


  //default map
  var map = L.map('map').setView([50.449563, 4.629463], 8);
  var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
  }).addTo(map);

    for (let i = resellers.length - 1; i >= 0; i--) {
        L.marker( [resellers[i].latitude, resellers[i].longitude] )
        .bindPopup( `<a href="https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)" ><div class="marker_label" style="color:#5a14e6;">` + resellers[i].full_name + '</div><br><button class="btn marker_label_btn marker_label" style="top:50%; padding:9px; --size : 1.5rem;" type=submit><span class="btn__label">Essai&nbsp;gratuit&nbsp;/&nbsp;Commande</span><span class="btn__bg | fill"></span>' )
        .addTo( map );
    }
  
  
  //focused map
  function map_focus(source){
      var vlon = source.dataset.longitude;
      var vlat = source.dataset.latitude;
      map.setView(new L.LatLng(vlat, vlon), 14);
  }
  
