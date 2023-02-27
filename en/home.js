// import arrays of links
// import { homeImages, links_v1, links_v2 } from "../links.js";

// main infos of the site
let email = "info@lines-group.co.uk";
let instagram = "https://ig.me/m/lines._group";
let whatsapp = "http://wa.me/+96181318832";

// image slider links
const homeImages = [
  "crown1.jpg",
  "flower1.jpg",
  "headband1.jpg",
  "haircomb1.jpg",
  "bracelet1.jpg",
  "glass1.jpg",
  "cr-rita.jpg",
  "co-rita.jpg"
];

// link versions for categories
const links_v1 = [ // home version
  // logo 0
  "../media/images/logo.png",

  // home 1 - 5
  "./home.html",
  "./aboutus.html",
  "./special-offers.html",
  "./news.html",
  "./decor-items.html",

  // categories 6+
  "./categories/crowns/crowns.html",
  "./categories/flowers/flowers.html",
  "./categories/headbands/headbands.html",
  "./categories/haircombs/haircombs.html",
  "./categories/glasses/toastglass.html",
  "./categories/bracelets/bracelets.html",
  "./categories/rita-crowns/cr-rita 1.html",
  "./categories/rita-combs/co-rita 1.html",

  // rita menu
  "./categories/rita-menu/rita.html",

  // language
  "../ar/home.html"
];

const links_v2 = [ // categories version
  // logo
  "../../../media/images/logo.png",

  // home
  "../../home.html",
  "../../aboutus.html",
  "../../special-offers.html",
  "../../news.html",
  "../../decor-items.html",

  // categories 6 -> 13
  "../crowns/crowns.html",
  "../flowers/flowers.html",
  "../headbands/headbands.html",
  "../haircombs/haircombs.html",
  "../glasses/toastglass.html",
  "../bracelets/bracelets.html",
  "../rita-crowns/cr-rita 1.html",
  "../rita-combs/co-rita 1.html",
  
  // rita menu
  "../rita-menu/rita.html",

  // language
  "../../../ar/home.html"
];

// elements for adding content
const header = document.querySelector("#stickyHeader");

// loading function
const loading = ()=> {
  createHeader();
  createNavBar();
  createFooter();
  checkActive();
  createCatalogTitles();
  addFontAwesome();
}
const loadHome = ()=> {
  loading();
  automateSlider();
  createVideo("../media/videos/vid-decor.mp4");
  createCatalog(catalogLabels, links_v1, homeImages);
}
const ritaLoad = ()=> {
  loading();
  let images = [
    "cr-rita.jpg",
    "co-rita.jpg"
  ];
  let labels = [
    "Crowns & Tiaras",
    "Haircombs"
  ];
  let link = [
    "../rita-crowns/cr-rita 1.html",
    "../rita-combs/co-rita 1.html"
  ];
  createCatalog(labels, link, images);
}

const libraries = [
  // font awesome icon library
  
];
const addFontAwesome = ()=> {
  let head = document.head;
  let script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/f1d9d2165a.js";
  script.crossOrigin = "Anonymous";
  head.append(script);
}

// create the upper header
function createHeader(){
  let links = checkLink();
  let upHead = document.querySelector("#miniHeader");
  upHead.innerHTML =
    '<article id="leftHeadContain">\
    <img src="'+ links[0] +'" alt="logo">\
    </article>';
}

// navigation bar
function createNavBar() {
  let links = checkLink();
  let catLabels = [
    "Tiaras & Crowns", 
    "Bouquets",
    "Headbands",
    "Haircombs",
    "Toasting Glasses",
    "Bracelets",
    "Rita Style"
  ];

  // category builder 
  let catInner = "";
  for(let i1 = 6, i2 = 0; i2 < catLabels.length; i1++, i2++){
    if(i1 == 12) i1 = links.length-2;
    catInner += "<a href='" + links[i1] + "'>" + catLabels[i2] + "</a>"
  }
  
  let inner =
    "<div id='Home'>" +
      "<a href='" + links[1] + "'>HOME</a>" +
    "</div>" +

    "<div id='catDropdown'>" +
      "<a id='dropLabel'>\
      CATEGORIES\
      <i class='fa-solid fa-chevron-down'></i>" +
      "</a>" +
      "<section id='catDropdown-content'>" +
        catInner +
      "</section>" +
    "</div>" +

    "<div id='aboutUs'>" +
      "<a href='" + links[2] + "'>ABOUT US</a>" +
    "</div>" +

    '<div id="decor-items">' +
      '<a href="' + links[5] + '">DECOR ITEMS</a>' +
    "</div>";
  header.innerHTML = inner;
}

// footer
function createFooter() {
  const footer = document.querySelector("footer");
  let links = checkLink();
  let inner =
  '<div id="footImg">\
    <img src="'+ links[0]+'" alt="lines group logo"/>\
  </div>\
  <div id="footInfo">\
    <div id="loc">Founded in <span>Lebanon</span></div>\
    <div>all rights reserved &copy;</div>\
    <table>\
      <tr>\
        <td><i class="fa-brands fa-instagram"></i></td>\
        <td><a href="' + instagram + '">lines._group</a><br/></td>\
      </tr>\
      <tr>\
        <td><i class="fa-solid fa-phone"></i></td>\
        <td><a href="tel:+96129239123">+961 29 23 91 23</a><br/></td>\
      </tr>\
      <tr>\
        <td><i class="fa-brands fa-whatsapp"></i></td>\
        <td><a href="' + whatsapp + '">+961 81 31 88 32</a><br/></td>\
      </tr>\
      <tr>\
        <td><i class="fa-regular fa-envelope"></i></td>\
        <td><a href="mailto:' + email + '">info@lines-group.co.uk</a><br/></td>\
      </tr>\
    </table>\
  </div>';
  footer.innerHTML = inner;
}

// checks for active page
const pageClass = [
  "home",
  "aboutus",
  "special",
  "news",
  "decor-items",
  "category",
  "paypal",
];
let TargetId = [
  "Home",
  "aboutUs",
  "special-off",
  "news",
  "decor-items",
  "catDropdown",
];

function checkActive() {
  // -1 because no need for highlight in paypal
  for (let i = 0; i < pageClass.length - 1; i++) {
    if (header.className == pageClass[i]) {
      document.querySelector("#" + TargetId[i]).className = "active";
      break;
    }
  }
}
// checks the link version to use. 1 for home, 2 for categories
function checkLink() {
  return header.className == pageClass[pageClass.length-2] ? links_v2 : links_v1;

  // explanation:
  // if(header.className == pageClass[pageClass.length-2]){
  //   return links_v2;
  // } else {
  //   return links_v1;
  // } 
}

// generate video
const createVideo = (source)=> {
  let video = document.querySelector(".vid");
  video.src = source;
}

// image slider buttons
const slider = document.querySelector("#slider");
const sliderButt = document.getElementsByClassName("sliderButtons");
let compteur = 0;
let len = sliderButt.length;

// this is when you tap a button
function change(ref) {
  for (let i = 0; i < len; i++){
    if (ref.value == i){
      compteur = i;
      break;
    }
  }
  for (let i = 0; i < len; i++) {
    if (compteur == i) {
      sliderButt[compteur].classList.add("activeBut");
      continue;
    }
    if (sliderButt[i].classList.contains("activeBut")) {
      sliderButt[i].classList.remove("activeBut");
    }
  }
  slider.src = "../media/images/" + homeImages[compteur];
}

// this is an automater for the slider
function automateSlider() {
  setInterval(() => {
    compteur++;
    if (compteur == homeImages.length - 2) {
      compteur = 0;
    }
    if (compteur == 0 && sliderButt[len - 1].classList.contains("activeBut")) {
      sliderButt[len - 1].classList.remove("activeBut");
      sliderButt[compteur].classList.add("activeBut");
    }
    if (compteur != 0) {
      sliderButt[compteur - 1].classList.remove("activeBut");
      sliderButt[compteur].classList.add("activeBut");
    } else {
      sliderButt[compteur].classList.add("activeBut");
    }
    slider.src = "../media/images/" + homeImages[compteur];
  }, 5000);
}

// home catalog generator
const catalogLabels = [
  "Crowns",
  "Flowers",
  "Headbands",
  "Haircombs",
  "Bracelets",
  "Toasting-Glasses",
  "Rita-Crowns",
  "Rita-Combs"
];

const createCatalog = (label, link, image)=> {
  const catalog = document.querySelector(".proCatalog");

  // links: pre-defined or custom array?
  let j = (link == links_v1 || link == links_v2) ? 6 : 0;
          
  // folder: home or categories?
  let fold = image == homeImages ? 
            "../media/images/" 
          : "../../../media/images/";

  for(let i = 0; i < label.length; i++, j++){
    catalog.innerHTML +=
    '<article class="catImg">\
      <a href="' + link[j] + '">\
        <img src="' + fold + image[i] +'" />\
        <span>' + label[i] + '</span>\
      </a>\
     </article>';
  };
}

const createCatalogTitles = function() {
  let title = document.querySelector("#catalogTitle h1");
  let page1 = document.querySelector("input[id]");
  let checkLabel = [
    {
      prop: "home",
      val: "Product Catalog"
    },
    {
      prop: "aboutus",
      val: "About Us"
    },
    {
      prop: "paypal",
      val: "PayPal"
    },
    {
      prop: "decor",
      val: "Decor Items"
    },
    {
      prop: "crown",
      val: "Tiaras & Crowns"
    },
    {
      prop: "flower",
      val: "Bouquets"
    },
    {
      prop: "headband",
      val: "Headbands"
    },
    {
      prop: "haircomb",
      val: "Haircombs"
    },
    {
      prop: "bracelet",
      val: "Bracelets"
    },
    {
      prop: "glass",
      val: "Toasting Glasses"
    },
    {
      prop: "rita_crown",
      val: "Rita Tiaras"
    },
    {
      prop: "rita_comb",
      val: "Rita Combs"
    },
    {
      prop: "rita_menu",
      val: "Rita Style"
    },
    {
      prop: "news",
      val: "NEWS"
    },
    {
      prop: "special",
      val: "Special Offers"
    }
  ];
  let inner;

  for(let i = 0; i < checkLabel.length; i++){
    if(page1.id == checkLabel[i]['prop']){
      inner = checkLabel[i]['val'];
      break;
    }
  }
  title.innerHTML = inner;
}