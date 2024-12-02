
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
  
let sip_summary = "<div class='summary_txt'>SIP is an ERP integrator, specialized in SME’s solutions.<br>"+
"Thanks to a team of 23 people and 6 senior consultants, SIP offers a complete service around your ERP :<br>"+
"training, support and monitoring of your projet over the very long term.<br>"+
"The 2 added values of SIP :<br>"+
"<ul class='summary_list'><li>a personalized follow-up and approach to get the most out of your ERP tool.<br></li>"+
"<li>solutions to complete your ERP : private cloud, Azure, Microsoft 365, e-commerce platform, cybersecurity, …</li></ul></div>";


  //list of resellers
  const resellers = [];
  const used_resellers = [];
  resellers.push({cp_name:"Br",name:"Brainstorming",sale_name:"BRAINSTORMING",address:"Rue de l’avancée numérique, 1/01 <br> 4430 Ans Belgium",phone:"+32 (0)43 42 22 21",mail:"info@brainstorming.eu",site:"https://www.brainstorming.be/fr/",lon:"5.530151",lat:"50.662374",img:"/files/logo%20brain.png",vweb:"www.brainstorming.be",id_nav:"brainstorming_nav", summary:"" });
  resellers.push({cp_name:"Br",name:"Brainstorming Brussels",sale_name:"BRAINSTORMING BXL",address:"Rue Joseph Stevens, 7 <br> 1000 Brussels Belgium",phone:"+32 (0)43 42 22 21",mail:"info@brainstorming.eu",site:"https://www.brainstorming.eu",lon:"4.352456",lat:"50.841332",img:"/files/logo_brainstorming_BXL.png",vweb:"www.brainstorming.eu",id_nav:"brainstorming_nav", summary:""});
  resellers.push({cp_name:"Es",name:"ESI",sale_name:"ESI",address:"Chaussée de Heusy, 225 <br> 4800 Verviers Belgium",phone:"+32 (0)87 27 92 12",mail:"info@esi-informatique.com",site:"https://www.esi-informatique.com",lon:"5.8658",lat:"50.58335",img:"/files/logo_esi.png",vweb:"www.esi-informatique.com",id_nav:"esi_nav", summary:""});
  resellers.push({cp_name:"Io",name:"ior System",sale_name:"IOR",address:"Rue Pont-à-Migneloux, 12 <br> 6041 Charleroi Belgium",phone:"+32 (0)71 20 90 10",mail:"info@ior-system.bem",site:"https://www.ior-system.be",lon:"4.452494",lat:"50.487900",img:"/files/ior-logo2020.png",vweb:"www.ior-system.be",id_nav:"ior_nav", summary:""});
  resellers.push({cp_name:"Ib",name:"IBGraf",sale_name:"IBGRAF",address:"Rue d'Abhooz, 27 <br> 4040 Herstal Belgium",phone:"+32 (0)42 27 57",mail:"",site:"https://ibgraf.com",lon:"5.62045",lat:"50.693539",img:"/files/logo_Ibgraf.png",vweb:"www.ibgraf.com",id_nav:"ibgraf_nav", summary:""});
  resellers.push({cp_name:"Ib",name:"IBLux",sale_name:"IBLUX",address:"Route d’Arlon, 196 <br> 8010 Strassen Luxemburg",phone:"+352 (0)29 09 34",mail:"",site:"https://ibgraf.com",lon:"5.963615",lat:"49.647203",img:"/files/logo_Ibgraf.png",vweb:"www.ibgraf.com",id_nav:"ibgraf_nav", summary:""});
  resellers.push({cp_name:"Mu",name:"Multidata IT Solutions",sale_name:"MULTIDATA",address:"2 Am Hock <br> 9991 Weiswampach Luxemburg",phone:"+352 (0)27 00 02 40760",mail:"info@multidata.lu",site:"https://www.multidata.lu/fr/",lon:"6.067643",lat:"50.142969",img:"/files/ioi_customer/2023/1/multidata/multidata_logo_color_transparent.png",vweb:"www.multidata.lu",id_nav:"multidata_nav", summary:""});
  resellers.push({cp_name:"Dm",name:"DM&S",sale_name:"DMS",address:"Edgar Sohiestraat, 79 <br> 1560 Hoeilaart Belgium",phone:"+32 (0)2 344 17 38",mail:"info@dm-s.be",site:"https://www.dm-s.be",lon:"4.47639127250272",lat:"50.77373443279719",img:"/files/DMSlogoQuadri5.png",vweb:"www.dm-s.be",id_nav:"dms_nav", summary:""});
  resellers.push({cp_name:"Si",name:"SIP",sale_name:"SIP",address:"Rue de la Terre à briques, 6 <br>7522 Tournai (Marquain) Belgium",phone:"+32 (0)69 89 08 26",mail:"segard.v@sip.be",site:"https://www.sip.be/",lon:"3.334605",lat:"50.607241",img:"/files/logo-carre.png",vweb:"www.sip.be",id_nav:"sip_nav", summary:sip_summary});
  resellers.push({cp_name:"Me",name:"Megabyte Applications",sale_name:"MEGABYTE",address:"1800 Vilvoorde Belgium",phone:"+32 (2) 610 26 92",mail:"AppliLeadSales@megabyte.be",site:"https://www.megabyte.be",lon:"4.440493187412276",lat:"50.924465958933816",img:"/files/temp/Logo-Megabyte_Applications_Vertical.jpg",vweb:"www.megabyte.be",id_nav:"megabyte_nav", summary:""});
  resellers.push({cp_name:"Me",name:"Megabyte Applications",sale_name:"MEGABYTE",address:"1400 Nivelles Belgium",phone:"+32 (2) 366 39 60",mail:"AppliLeadSales@megabyte.be",site:"https://www.acegroup.agency",lon:"4.355423582836017",lat:"50.58668486128785",img:"/files/temp/Logo-Megabyte_Applications_Vertical.jpg",vweb:"www.acegroup.agency",id_nav:"megabyte_nav", summary:""});
  resellers.push({cp_name:"Me",name:"Megabyte Applications",sale_name:"MEGABYTE",address:"Otegemstraat, 100 <br>8550 Zwevegem Belgium",phone:"+32 (2) 366 39 60",mail:"AppliLeadSales@megabyte.be",site:"https://www.acegroup.agency",lon:"3.340498442",lat:"50.8131168",img:"/files/temp/Logo-Megabyte_Applications_Vertical.jpg",vweb:"www.acegroup.agency",id_nav:"megabyte_nav", summary:""});
  resellers.push({cp_name:"Me",name:"Megabyte Applications",sale_name:"MEGABYTE",address:"Vorstlaan, 360 <br>1150 Brussel Belgium",phone:"+32 (2) 366 39 60",mail:"AppliLeadSales@megabyte.be",site:"https://www.acegroup.agency",lon:"4.4335943",lat:"50.8294824",img:"/files/temp/Logo-Megabyte_Applications_Vertical.jpg",vweb:"www.acegroup.agency",id_nav:"megabyte_nav", summary:""});
  resellers.push({cp_name:"Ga",name:"Gap informatique",sale_name:"GAP INFORMATIQUE",address:"Rte du Condroz, 533<br>4000 Liège Belgium",phone:" +32 (0)43 61 61 00",mail:"rf@gapi.be",site:"https://www.gapinformatique.be/",lon:"5.553137855572341",lat:"50.571649915070196",img:"/files/web_page/2022/12/our_experts/logo%20gap.png",vweb:"www.gapinformatique.be",id_nav:"gapinformatique_nav", summary:""});
//  resellers.push({cp_name:"Pe",name:"Performer",sale_name:"Performer",address:"For testing purposes<br>This reseller is virtual",phone:"",mail:"",site:"",lon:"",lat:"",img:"/files/Performer.png",vweb:"",id_nav:"performer_nav"});
  resellers.push({cp_name:"Ec",name:"Echosoft",sale_name:"Echosoft",address:"Avenue d’Ecolys, 2 <br>5020 Namur Belgium",phone:" +32 (0)8 121 09 57",mail:"support@echo-soft.com",site:"https://www.echo-soft.com",lon:"4.7966462849306195",lat:"50.485808840517684",img:"/files/Logo_Echosoft.png",vweb:"www.echo-soft.com",id_nav:"echosoft_nav", summary:""});
  resellers.push({cp_name:"Sy",name:"Syscom",sale_name:"Syscom",address:"Tervuursesteenweg, 159 <br>3060 Bertem Belgium",phone:" +32 (0)1 649 99 70",mail:"info@syscom.be",site:"https://www.syscom.be",lon:"4.627916060444823",lat:"50.865053544239515",img:"/files/Syscom-logo.svg",vweb:"www.syscom.be",id_nav:"syscom_nav", summary:""});
  resellers.push({cp_name:"Wi",name:"Wininfo",sale_name:"Wininfo",address:"Rue du Centre, 15 <br>4651 Battice Belgium",phone:"+32 (0) 494 81 72 81",mail:"commercial@wininfo.be",site:"https://www.wininfo.be",lon:"5.8205249796303455",lat:"50.64838196749974",img:"/files/Logo_Wininfo.png",vweb:"www.wininfo.be",id_nav:"wininfo_nav", summary:""});
  resellers.push({cp_name:"Ne",name:"Neuronics",sale_name:"Neuronics",address:"Rue du Grand Fau, 1 <br>5640 Mettet Belgium",phone:"+32 (0) 71 727 629",mail:"support@neuronics.be",site:"https://www.neuronics.be",lon:"4.63951393",lat:"50.3472888",img:"/files/NEURONICS_2019.jpg",vweb:"www.neuronics.be",id_nav:"neuronics_nav", summary:""});
  resellers.push({cp_name:"Sh",name:"shERPaz.cloud",sale_name:"SHERPAZ.CLOUD",address:"Chemin de Mariemont, 1/B <br>7090 Braine-le-Comte Belgium",phone:"+32 (0) 475 81 46 66",mail:"yves.druez@sherpaz.cloud",site:"",lon:"4.0812955",lat:"50.5973738",img:"/files/shERPaz.jpg",vweb:"",id_nav:"sherpaz_nav", summary:""});
//  resellers.push({cp_name:"Bi",name:"Bipro",sale_name:"BIPRO",address:"Tongersesteenweg, 190 <br>3800 Sint-Truiden Belgium",phone:"+32 (0)1 127 98 30",mail:"michiel@bipro.be",site:"https://www.bipro.be",lon:"5.2252718",lat:"50.809865",img:"/files/bipro-BL-02.png",vweb:"www.bipro.be",id_nav:"bipro_nav", summary:"Enkel Administratiesoftware / Boekhouding"});
  resellers.push({cp_name:"Me",name:"Megabyte Applications",sale_name:"MEGABYTE",address:"Felix Roggemanskaai, 17 A2 <br>1501 Buizingen Belgium",phone:"+32 (0)9 270 31 40",mail:"AppliLeadSales@megabyte.be",site:"https://www.acegroup.agency",lon:"4.2498575",lat:"50.7470532",img:"/files/temp/Logo-Megabyte_Applications_Vertical.jpg",vweb:"www.acegroup.agency",id_nav:"megabyte_nav", summary:""});
  resellers.push({cp_name:"Ic",name:"ICARUS IT SERVICES",sale_name:"ICARUS",address:"22 Avenue François Clément, <br>5612 Mondorf-les-Bains Luxemburg",phone:"+35 (0)22 88 04 82",mail:"a.bruno@icarus-services.lu",site:"https://www.icarus-services.lu",lon:"6.273680000",lat:"49.504680000",img:"/files/temp/Icarus_Logo.png",vweb:"www.icarus-services.lu",id_nav:"icarus_nav"});
  resellers.push({cp_name:"Lo",name:"Logidrive",sale_name:"LOGIDRIVE",address:"Avenue du Japon, 1<br>1420 Braine l’Alleud Belgium",phone:"+32 (0)2 386 10 63",mail:"sales@logidrive.com",site:"https://www.logidrive.com",lon:"4.387032822",lat:"50.669097200",img:"/files/temp/Logidrive.png",vweb:"www.logidrive.com",id_nav:"logidrive_nav", summary:""});    
  resellers.push({cp_name:"Ov",name:"Ov Informatique Srl",sale_name:"OVI",address:"Route d'Aubel, 21<br>4841 Henri-Chapelle Belgium",phone:"+32 (0)8 771 90 90",mail:"contact@ovi.solutions",site:"https://www.ovi.solutions",lon:"5.924280310",lat:"50.677832000",img:"/files/temp/Ovi.jpg",vweb:"www.ovi.solutions",id_nav:"ovi_nav", summary:""});
  resellers.push({cp_name:"Ov",name:"OviService Sàrl",sale_name:"OVI",address:"Duarrefstrooss, 38<br>L-9990 Weiswampach Luxemburg",phone:"+352 20 30 18 70",mail:"contact@ovi.solutions",site:"https://www.ovi.solutions",lon:"6.075455428",lat:"50.137005700",img:"/files/temp/Ovi.jpg",vweb:"www.ovi.solutions",id_nav:"ovi_nav", summary:""});
  resellers.push({cp_name:"Ac",name:"Ace Computer",sale_name:"ACE COMPUTER",address:"Rue de l'industrie, 19<br>L-8069 Bertrange Luxemburg",phone:"+32 (0) 478 77 05 02<br>+35 (0) 220 21 10 31",mail:"support@acecomputer.lu",site:"https://acecomputer.lu",lon:"6.06837",lat:"49.6115",img:"/files/temp/Logo-ace-computer_lu.png",vweb:"acecomputer.lu",id_nav:"ace_nav", summary:""});
  resellers.push({cp_name:"Ci",name:"Cifec",sale_name:"CIFEC",address:"Rue de Saint-Martin, 2a<br>5032 Gembloux Belgium",phone:"+32 (0) 475 48 58 87",mail:"info@cifec.be",site:"https://www.cifec.be",lon:"4.672017558",lat:"50.513628950",img:"/files/temp/CIFEClogoGRAND_08_03_2024.jpg",vweb:"www.cifec.be",id_nav:"cifec_nav", summary:""});

for (let i = resellers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = resellers[i];
      resellers[i] = resellers[j];
      resellers[j] = temp;
    }
    
    var locator_list= document.getElementById("locator_list");
    var reseller_card_list=document.getElementById("reseller_card_list");
    var reseller_list=document.getElementById("reseller_list");
    
      for (let i = resellers.length - 1; i >= 0; i--) {
          
          //map link
          var elementli = document.createElement("li");
          let mainhtmlmap=""
          if(resellers[i].mail !== ""){
              mainhtmlmap = '<br><a href="mailto:' + resellers[i].mail + '">' + resellers[i].mail + '</a>' 
          }
          let sitehtmlleft=""
          if(resellers[i].site){
            sitehtmlleft = '<a href="' + resellers[i].site + '" target="_blank" rel="noopener">' + resellers[i].vweb + '</a>';
        }
          elementli.className="locatorList__listEl | location";
          elementli.innerHTML = '<div class="resellers-all "><div class="resellers-img pc-only"><div id="resellers_img"><img src='+ resellers[i].img +' loading="lazy" onclick="show_nav(this)" data-nav='+ resellers[i].id_nav +' class=" referencesSlider__icon | db | fit oc" alt='+ resellers[i].name +`></div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)" `+'><button class="btn btn--s" style="top:50%; padding: 9px;" type=submit><span class="btn__label">Try for free / Order</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" ``viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div><div class="resellers-txt"><a onclick="map_focus(this)" data-lon=' + resellers[i].lon + ' data-lat=' + resellers[i].lat + ' class="pointer"><h3 class="location__title | title | fw-bold">' + resellers[i].name + '<br></h3><address class="location__address">' + resellers[i].address + '</address></a><p>' + resellers[i].phone  + mainhtmlmap + '<br>'+sitehtmlleft+`</p></div><div class="mb-only"><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)" `+'><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Try for free / Order</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" ``viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div></div>';
          locator_list.appendChild(elementli);
          
          if(!used_resellers.includes(resellers[i].cp_name)){
          
          //card list
          var elementdiv = document.createElement("div");
          elementdiv.className="referencesSlider__slide | actr pr | col-4 t-col-4 | m-100 | js-SmoothSlider-slide";
          elementdiv.innerHTML = '<figure class="referencesSlider__fig | up fit"><img src='+ resellers[i].img +' loading="lazy" onclick="show_nav(this)" data-nav='+ resellers[i].id_nav +' class=" referencesSlider__icon | db | fit oc" alt='+ resellers[i].name +'></figure><a href="#" target="_blank" rel="noopener" class="fill"><span class="sr-only">Want to know more ?</span></a>'
          reseller_card_list.appendChild(elementdiv);
          
          //nav list
          let navhtml = '';
          let mailhtml = "";
          let sitehtml="";
          for (let j = resellers.length - 1; j >= 0; j--) {
              if(resellers[i].cp_name == resellers[j].cp_name){
                      if(resellers[j].mail){
                          mailhtml = '<br><a href="mailto:' + resellers[j].mail + '">' + resellers[j].mail + '</a>'
                      }
                      if(resellers[j].site){
                          sitehtml = '<a href="' + resellers[j].site + '" target="_blank" rel="noopener">' + resellers[j].vweb + '</a>';
                      }
                  if (navhtml === ''){
                      navhtml = navhtml + '<div class="flex_change nav_txt" style="display:flex; flex-direction: row;"><div style="min-width:50%; padding-left:25px;">'
                      navhtml = navhtml + '<p class="nav-text-modif nav-text">'+ resellers[j].name +'</p><p class="nav-text">'+ resellers[j].address +'<br></p>' + '<p class="nav-text">' + resellers[j].phone + mailhtml + '<br>'+sitehtml+'</p>';
                  }else{
                      navhtml = navhtml + '<div class="flex_change nav_txt" style="display:flex; flex-direction: row;"><div style="min-width:50%; padding-left:25px;">'
                      navhtml = navhtml + '<br><p class="nav-text-modif nav-text">'+ resellers[j].name +'</p><p class="nav-text">'+ resellers[j].address +'<br></p>' + '<p class="nav-text">' + resellers[j].phone + mailhtml + '<br>'+sitehtml+'</p>';
                  }
  
                  navhtml = navhtml + `</div><div style="margin-right:auto; margin-left:auto; padding-top:15px; min-width:50%"><a href="https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)`+'"><button class="btn btn--s" style="top:50%;" type=submit><span class="btn__label">Try for free / Order</span><span class="btn__bg | fill"></span><svg class="m-only | nlForm__submitIcon | icon icon--arrow" ``viewBox="0 0 35 32" aria-hidden="true" fill="none" stroke-width="4" stroke="currentColor"><path d="M0 16h32" /><path d="m18 2 14 14-14 14" /></svg></button></a></div></div>'
              }
          }
          var elementnav = document.createElement("nav");
          elementnav.setAttribute('id', resellers[i].id_nav);
          elementnav.className="brainstorming-nav nav-all hidden_nav";
          let summary = ""
          if(resellers[i].summary !== ""){
            summary = '</div><div class="summary-txt"><p>'+ resellers[i].summary +'</p></div>';
            }
          elementnav.innerHTML = '<div class="nav-header"><a href='+ resellers[i].site +'><img class="nav-img" src='+ resellers[i].img +' loading="lazy" alt="'+ resellers[i].name +'"/> </a>' + summary + navhtml;
          reseller_list.appendChild(elementnav);
          
          }
          
          used_resellers.push(resellers[i].cp_name);
      }
  
  
  //OpenStreetMap Leaflet
  
  
  //default map
  var map = L.map('map').setView([50.449563, 4.629463], 8);
  var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
  }).addTo(map);
  
    for (let i = resellers.length - 1; i >= 0; i--) {
        L.marker( [resellers[i].lat, resellers[i].lon] )
        .bindPopup( `<a href="https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup" onclick="gtag_report_conversion('https://erp.sales.ioi.online/?var=`+resellers[i].sale_name.toUpperCase()+`#signup', 'AW-11139658231/pOHSCIu8o5YYEPfj5r8p' ,11820690)" ><div class="marker_label" style="color:#5a14e6;">` + resellers[i].name + '</div><br><button class="btn marker_label_btn marker_label" style="top:50%; padding:9px; --size : 1.5rem;" type=submit><span class="btn__label">Try&nbsp;for&nbsp;free&nbsp;/&nbsp;Order</span><span class="btn__bg | fill"></span>' )
        .addTo( map );
    }
  
  
  
  //focused map
  function map_focus(source){
      var vlon = source.dataset.lon;
      var vlat = source.dataset.lat;
      map.setView(new L.LatLng(vlat, vlon), 14);
  }
  
