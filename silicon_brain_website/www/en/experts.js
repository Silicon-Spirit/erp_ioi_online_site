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

//OpenStreetMap Leaflet
//default map
var map = L.map('map').setView([50.449563, 4.629463], 8);
var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(map);


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
              elementli.innerHTML = `<div class="resellers-all "><div class="resellers-img pc-only"><div id="resellers_img"><img src="${resellers[i].image}" loading="lazy" onclick="show_nav(this)" data-nav="${resellers[i].nav_id}" class=" referencesSlider__icon | db | fit oc" alt="${resellers[i].full_name}"></div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=${resellers[i].identification.toUpperCase()}#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=${resellers[i].identification.toUpperCase()}#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)"><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Try for free / Order</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div><div class="resellers-txt"><a onclick="map_focus(this)" data-longitude="${resellers[i].longitude}" data-latitude="${resellers[i].latitude}" class="pointer"><h3 class="location__title | title | fw-bold">${resellers[i].full_name}<br></h3><address class="location__address">${resellers[i].address.replace("Belgique","Belgium")}</address></a><p>${resellers[i].phone}${resellers[i].email?'<br><a href="mailto:' + resellers[i].email + '">' + resellers[i].email + '</a>':""}<br>${resellers[i].website?'<a href="' + resellers[i].website + '" target="_blank" rel="noopener">' + resellers[i].website.replace("https://","") + '</a>':""}</p></div><div class="mb-only"><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=${resellers[i].identification.toUpperCase()}#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=${resellers[i].identification.toUpperCase()}#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)" `+'><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Try for free / Order</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" ``viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div></div>';
              locator_list.appendChild(elementli);
  
              if(!used_resellers.includes(resellers[i].short_id)){
  
              //card list
              var elementdiv = document.createElement("div");
              elementdiv.className="referencesSlider__slide | actr pr | col-4 t-col-4 | m-100 | js-SmoothSlider-slide";
              elementdiv.innerHTML = '<figure class="referencesSlider__fig | up fit"><img src='+ resellers[i].image +' loading="lazy" onclick="show_nav(this)" data-nav='+ resellers[i].nav_id +' class=" referencesSlider__icon | db | fit oc" alt='+ resellers[i].full_name +'></figure><a href="#" target="_blank" rel="noopener" class="fill"><span class="sr-only">Want to know more ?</span></a>'
              reseller_card_list.appendChild(elementdiv);
  
              //nav list
              let navhtml = '';
              for (let j = resellers.length - 1; j >= 0; j--) {
                  if(resellers[i].short_id == resellers[j].short_id){
                      if (navhtml === ''){
                          navhtml = navhtml + '<div class="flex_change nav_txt" style="display:flex; flex-direction: row;"><div style="min-width:50%; padding-left:25px;">'
                          navhtml = navhtml + '<p class="nav-text-modif nav-text">'+ resellers[j].full_name +'</p><p class="nav-text">'+ resellers[j].address.replace("Belgique","Belgium") +'<br></p>' + '<p class="nav-text">' + resellers[j].phone + `${resellers[i].email?'<br><a href="mailto:' + resellers[i].email + '">' + resellers[i].email + '</a>':""}<br>${resellers[j].website?'<a href="' + resellers[j].website + '" target="_blank" rel="noopener">' + resellers[j].website.replace("https://","") + '</a>':""}</p>`;
                      }else{
                          navhtml = navhtml + '<div class="flex_change nav_txt" style="display:flex; flex-direction: row;"><div style="min-width:50%; padding-left:25px;">'
                          navhtml = navhtml + '<br><p class="nav-text-modif nav-text">'+ resellers[j].full_name +'</p><p class="nav-text">'+ resellers[j].address.replace("Belgique","Belgium") +'<br></p>' + '<p class="nav-text">' + resellers[j].phone + `${resellers[i].email?'<br><a href="mailto:' + resellers[i].email + '">' + resellers[i].email + '</a>':""}<br>${resellers[j].website?'<a href="' + resellers[j].website + '" target="_blank" rel="noopener">' + resellers[j].website.replace("https://","") + '</a>':""}<p>`;
                      }
  
                      navhtml = navhtml + `</div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)`+'"><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Try for free / Order</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" ``viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div>'
                  }
              }
              var elementnav = document.createElement("nav");
              elementnav.setAttribute('id', resellers[i].nav_id);
              elementnav.className="brainstorming-nav nav-all hidden_nav";
              let summary = ""
              if(resellers[i].summary !== ""  && resellers[i].summary != "null"){
              summary = '<div class="summary-txt"><p>'+ resellers[i].summary +'</p></div>';
              }
              elementnav.innerHTML = '<div class="nav-header"><a href='+ resellers[i].website +'><img class="nav-img" src='+ resellers[i].image +' loading="lazy" alt="'+ resellers[i].full_name +'"/> </a>' + summary + navhtml;
              reseller_list.appendChild(elementnav);
  
              }
  
              used_resellers.push(resellers[i].short_id);

              //OpenStreetMap Leaflet
              L.marker( [resellers[i].latitude, resellers[i].longitude] )
          .bindPopup( `<a href="https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].identification.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)" ><div class="marker_label" style="color:#5a14e6;">` + resellers[i].full_name + '</div><br><button class="btn marker_label_btn marker_label" style="top:50%; padding:9px; --size : 1.5rem;" type=submit><span class="btn__label">Essai&nbsp;gratuit&nbsp;/&nbsp;Commande</span><span class="btn__bg | fill"></span>' )
          .addTo( map );
          }
      }
  });
}


//focused map
function map_focus(source){
    var vlon = source.dataset.longitude;
    var vlat = source.dataset.latitude;
    map.setView(new L.LatLng(vlat, vlon), 14);
}

