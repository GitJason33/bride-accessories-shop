//  slider
let images = [
  "./images/headband1.jpg",
  "./images/haircomb1.jpg",
  "./images/flower1.jpg",
  "./images/glass1.jpg",
  "./images/bracelet1.jpg",
  "./images/crown1.jpg",
];
let email = "info@lines-group.co.uk";
let instagram = "https://ig.me/m/lines._group";
let whatsapp = "http://wa.me/+96181318832";

// loading function
function loading() {
  createUpHeader();
  createHeader();
  createFooter();
  checkActive();
}
// create the upper header
function createUpHeader() {
  let links = checkLink();
  let upHead = document.querySelector("#miniHeader");
  upHead.innerHTML =
    '<article id="leftHeadContain">\
    </article>\
    <div id="catDropdownLan">\
      <span>Language - اللغة</span>\
      <i class="fa-solid fa-chevron-down"></i>\
      <section id="catDropdownLan-content">\
         <a href="#">العربية</a>\
         <a href="' +
    links[links.length - 1] +
    '">English</a>\
      </section>\
   </div>';
}
// sticky header
// links info -> 0: logo, 1/2/3/4/5: home directory
let links_v1 = [
  "./images/logo.png",
  "./home.html",
  "./aboutus.html",
  "./special-offers.html",
  "./news.html",
  "./decor-items.html",
  "../crowns.html",
  "../flowers.html",
  "../crowns.html",
  "../headbands.html",
  "../haircombs.html",
  "../toastglass.html",
  "../bracelets.html",
  "../rita.html",
  // should stay last
  "../../home.html"
];

let links_v2 = [
  "./homePage/images/logo.png",
  "./homePage/home.html",
  "./homePage/aboutus.html",
  "./homePage/special-offers.html",
  "./homePage/news.html",
  "./homePage/decor-items.html",
  "./crowns.html",
  "./flowers.html",
  "./headbands.html",
  "./haircombs.html",
  "./toastglass.html",
  "./bracelets.html",
  "./rita.html",
  // stay last
  "../home.html"
];

const header = document.querySelector("#stickyHeader");
const footer = document.querySelector("footer");
function createHeader() {
  let links = checkLink();
  let inner =
    "<section id='headLeft'>" +
    "<a href='#'>" +
    "<img id='logo' src='" +
    links[0] +
    "' alt='logo'/>" +
    "</a></section>";
  inner +=
    "<section id='headRight'>" +
    "<section id='infosSection'>" +
    "<div id='home'>" +
    "<a href='" +
    links[1] +
    "'>الصفحة الرئيسية</a>" +
    "</div>" +
    "<div id='aboutUs'>" +
    "<a href='" +
    links[2] +
    "'>من نكون</a>" +
    "</div>" +
    '<div id="special-off">' +
    '<a href="' +
    links[3] +
    '">عروض خاصة</a>' +
    "</div>" +
    '<div id="news">' +
    '<a href="' +
    links[4] +
    '">الاخبار</a>' +
    "</div>" +
    '<div id="decor-items">' +
    '<a href="' +
    links[5] +
    '">اغراض تزيين</a>' +
    "</div>" +
    "<div id='catDropdown'>" +
    "<span>الفئات</span>" +
    "<i class='fa-solid fa-chevron-down'></i>" +
    "<section id='catDropdown-content'>" +
    "<a href='" +
    links[6] +
    "'>تيجان</a>" +
    "<a href='" +
    links[7] +
    "'>ورود</a>" +
    "<a href='" +
    links[8] +
    "'>عُقالات رأس</a>" +
    "<a href='" +
    links[9] +
    "'>أمشاط شعر</a>" +
    "<a href='" +
    links[10] +
    "'>كؤوس نخب</a>" +
    "<a href='" +
    links[11] +
    "'>أساور</a>" +
    "<a href='" +
    links[12] +
    "'>Rita style</a>" +
    "</section>" +
    "</div>" +
    "</section></section>";
  header.innerHTML = inner;
}

// footer
function createFooter() {
  let links = checkLink();
  let inner =
    '<div id="footContain">' +
    '<div id="footImg">' +
    '<img src="' +
    links[0] +
    '" alt="lines group logo"/>' +
    "</div>" +
    '<div id="footInfo">' +
    "<section>" +
    "<span>سوزان قبرصلي</span><br/>" +
    '<span style="font-size: 20px">المديرة التنفيزية</span>' +
    "</section>" +
    "<section>" +
    "لبنان<br/>" +
    "<table>" +
    "<tr>" +
    "<td><span>T. </span></td>" +
    '<td><a href="tel:+96129239123">+961 29 23 91 23</a><br/></td>' +
    "</tr>" +
    "<tr>" +
    "<td><span>W. </span></td>" +
    '<td><a href="' +
    whatsapp +
    '">+961 81 31 88 32</a></td>' +
    "</tr>" +
    "</table>" +
    "</section>" +
    "<section>" +
    "<article>" +
    "email(" +
    '<a href="mailto:' +
    email +
    '">' +
    "<span>" +
    email +
    "</span>" +
    "</a>)" +
    "</article>" +
    "<a>" +
    '<i class="fa-brands fa-square-facebook"></i>' +
    "</a>" +
    '<a href="' +
    instagram +
    '">' +
    '<i class="fa-brands fa-instagram"></i>' +
    "</a>" +
    "</section>" +
    "</div></div>";
  footer.innerHTML = inner;
}

// checks for active page
const page = [
  "home",
  "aboutus",
  "special",
  "news",
  "decor-items",
  "category",
  "paypal",
];
let TargetId = [
  "home",
  "aboutUs",
  "special-off",
  "news",
  "decor-items",
  "catDropdown",
];

function checkActive() {
  // -1 because no need for highlight in paypal
  for (let i = 0; i < page.length - 1; i++) {
    if (header.className == page[i]) {
      document.querySelector("#" + TargetId[i]).className = "active";
      break;
    }
  }
}

// checks the link version to use. 1 for categories, 1 for home folder
function checkLink() {
  let verify = false;
  for (let i = 0; i < page.length; i++) {
    if (i === page.length - 2) continue;
    verify ||= header.className == page[i];
  }
  if (verify) return links_v1;
  else return links_v2;
}

// image slider buttons
let compteur = 0;
let z = document.getElementById("img1");
let x = document.getElementsByClassName("sliderButtons");
let len = x.length;

function change(ref) {
  for (let i = 0; i < len; i++) {
    if (ref.value == i) {
      compteur = i;
      break;
    }
  }
  for (let i = 0; i < len; i++) {
    if (compteur == i) {
      x[compteur].classList.add("activeBut");
      continue;
    }
    if (x[i].classList.contains("activeBut")) {
      x[i].classList.remove("activeBut");
    }
  }
  z.src = images[compteur];
}
function slideInterval() {
  const interv = setInterval(() => {
    compteur++;
    if (compteur == images.length) {
      compteur = 0;
    }
    if (compteur == 0 && x[len - 1].classList.contains("activeBut")) {
      x[len - 1].classList.remove("activeBut");
      x[compteur].classList.add("activeBut");
    }
    if (compteur != 0) {
      x[compteur - 1].classList.remove("activeBut");
      x[compteur].classList.add("activeBut");
    } else {
      x[compteur].classList.add("activeBut");
    }
    z.src = images[compteur];
  }, 5000);
}

// category items informations
const crowns = [
  // to be continued
];
const headbands = [
  // to be continued
];
const haircombs = [
  // to be continued
];
const flowers = [
  // 0 -> 8
  {
    source: "flower 1.jpg",
    description: "White",
    code: "Code: PTY0667",
  },
  {
    source: "flower 2.jpg",
    description: "Silver plated",
    code: "Code: WBT024",
  },
  {
    source: "flower 3.jpg",
    description: "Pearl",
    code: "Code: HF24",
  },
  {
    source: "flower 4.jpg",
    description: "Crystal rhinestone",
    code: "Code: FBY03295",
  },
  {
    source: "flower 6.jpg",
    description: "White",
    code: "Code: WBT043",
  },
  {
    source: "flower 7.jpg",
    description: "White",
    code: "Code: WBT044",
  },
  {
    source: "flower 8.jpg",
    description: "White",
    code: "Code: WBT060",
  },
  {
    source: "flower 10.jpg",
    description: "Crystal diamond",
    code: "Code: T4177",
  },
  {
    source: "flower 11.jpg",
    description: "Silver Pearl crystal",
    code: "Code: PTY0669",
  },
  // 9 -> 17
  {
    source: "flower 12.jpg",
    description: "pearl crystal feather",
    code: "Code: HF03",
  },
  {
    source: "flower 13.jpg",
    description: "Crystal feather",
    code: "Code: PTY0668-1",
  },
  {
    source: "flower 14.jpg",
    description: "Silver feather",
    code: "Code: PTY0266-3",
  },
  {
    source: "flower 15.jpg",
    description: "Silver crystal",
    code: "Code: PTY0261",
  },
  {
    source: "flower 16.jpg",
    description: "Natural",
    code: "Code: WBT051",
  },
  {
    source: "flower 17.jpg",
    description: "Pearl Silver",
    code: "Code: WBT041",
  },
  {
    source: "flower 18.jpg",
    description: "Silver plated",
    code: "Code: PTY0671",
  },
  {
    source: "flower 21.jpg",
    description: "Gold plated",
    code: "Code: PTY0672",
  },
  {
    source: "flower 22.jpg",
    description: "Crystal diamond",
    code: "Code: PTY0668-2",
  },
  // 18 -> 21
  {
    source: "flower 23.jpg",
    description: "Silver Bouquets",
    code: "Code: PTY0266-5",
  },
  {
    source: "flower 24.jpg",
    description: "White crystal",
    code: "Code: WBT034",
  },
  {
    source: "flower 25.jpeg",
    description: "White red silk diamond",
    code: "Code: FBY0394",
  },
];
const glasses = [
  {
    source: "glasses 2.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 3.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 4.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 5.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 6.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 7.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 8.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 9.jpg",
    description: "Handmade Toasting Glass",
    code: "",
  },
  {
    source: "glasses 10.jpg",
    description: "Handmade Toasting Glass",
    code: "Code: PTY0723",
  },
];
const bracelets = [
  {
    source: "bracelet 1.jpg",
    description: "Silver Bracelet",
    code: "Code: PTY0673",
  },
];
const rita = [
   // crowns in rita
   // page 1: 0 -> 8
   {
     source: "crown39.jpg",
     description: "Crown",
     code: "Code: 96872",
   },
   {
     source: "crown40.jpg",
     description: "Crown",
     code: "Code: 92231",
   },
   {
     source: "crown41.jpg",
     description: "Tiara",
     code: "Code: 94527",
   },
   {
     source: "crown42.jpg",
     description: "Tiara",
     code: "Code: 92209",
   },
   {
     source: "crown43.jpg",
     description: "Tiara",
     code: "Code: 96953",
   },
   {
     source: "crown44.jpg",
     description: "Tiara",
     code: "Code: 93072",
   },
   {
     source: "crown45.jpg",
     description: "Tiara",
     code: "Code: 94526",
   },
   {
     source: "crown46.jpg",
     description: "Tiara",
     code: "Code: 96286",
   },
   {
     source: "crown47.jpg",
     description: "Tiara",
     code: "Code: 95145",
   },
   // page 2: 9 -> 17
   {
     source: "crown48.jpg",
     description: "Tiara",
     code: "Code: 95924",
   },
   {
     source: "crown49.jpg",
     description: "Tiara",
     code: "Code: 95998",
   },
   {
     source: "crown50.jpg",
     description: "Tiara",
     code: "Code: 95923",
   },
   {
     source: "crown51.jpg",
     description: "Tiara",
     code: "Code: 96799",
   },
   {
     source: "crown52.jpg",
     description: "Tiara",
     code: "Code: 96823",
   },
   {
     source: "crown53.jpg",
     description: "Tiara",
     code: "Code: 95922",
   },
   {
     source: "crown54.jpg",
     description: "Tiara",
     code: "Code: 96983",
   },
   {
     source: "crown56.jpg",
     description: "Tiara",
     code: "Code: 96463",
   },
   {
     source: "crown57.jpg",
     description: "Tiara",
     code: "Code: 95925",
   },
   // page 3: 18 -> 26
   {
     source: "crown58.jpg",
     description: "Tiara",
     code: "Code: 97738",
   },
   {
     source: "crown59.jpg",
     description: "Tiara",
     code: "Code: 97737",
   },
   {
     source: "crown60.jpg",
     description: "Tiara",
     code: "Code: 97745",
   },
   {
     source: "crown61.jpg",
     description: "Tiara",
     code: "Code: 97704",
   },
   {
     source: "crown62.jpg",
     description: "Tiara",
     code: "Code: 97703",
   },
   {
     source: "crown63.jpg",
     description: "Tiara",
     code: "Code: 97613",
   },
   {
     source: "crown64.jpg",
     description: "Tiara",
     code: "Code: 97603",
   },
   {
     source: "crown65.jpg",
     description: "Tiara",
     code: "Code: 97601",
   },
   {
     source: "crown66.jpg",
     description: "Tiara",
     code: "Code: 97595",
   },
   // page 4: 27 -> 35
   {
     source: "crown67.jpg",
     description: "Tiara",
     code: "Code: 97581",
   },
   {
     source: "crown68.jpg",
     description: "Tiara",
     code: "Code: 97510",
   },
   {
     source: "crown69.jpg",
     description: "Tiara",
     code: "Code: 97282",
   },
   {
     source: "crown70.jpg",
     description: "Tiara",
     code: "Code: 97693",
   },
   {
     source: "crown71.jpg",
     description: "Tiara",
     code: "Code: 95519",
   },
   {
     source: "crown72.jpg",
     description: "Tiara",
     code: "Code: 94656",
   },
   {
     source: "crown73.jpg",
     description: "Tiara",
     code: "Code: 94540",
   },
   {
     source: "crown74.jpg",
     description: "Tiara",
     code: "Code: 95043",
   },
   // combs in rita
   // page 5: 0 -> 8
   {
     // 1.1
     source: "comb39.jpg",
     description: "Comb",
     code: "",
   },
   {
     // 1.2
     source: "comb40.jpg",
     description: "Comb",
     code: "",
   },
   {
     // 1.3
     source: "comb41.jpg",
     description: "Comb",
     code: "",
   },
   {
     // 1.4
     source: "comb42.jpg",
     description: "Comb",
     code: "",
   },
   {
     // 1.5
     source: "comb43.jpg",
     description: "Comb",
     code: "",
   },
   {
     // 1.6
     source: "comb44.jpg",
     description: "Clip with flower",
     code: "Code: 11338",
   },
   {
     // 1.7
     source: "comb45.jpg",
     description: "Comb with flower",
     code: "Code: 94028",
   },
   {
     // 1.8
     source: "comb46.jpg",
     description: "Comb",
     code: "Code: 96083",
   },
   {
     // 1.9
     source: "comb47.jpg",
     description: "Comb",
     code: "",
   },
   // page 6: 9 -> 17
   {
     // 2.1
     source: "comb48.jpg",
     description: "Comb",
     code: "",
   },
   {
     // 2.2
     source: "comb49.jpg",
     description: "Comb",
     code: "Code: 96252",
   },
   {
     // 2.3
     source: "comb50.jpg",
     description: "Comb",
     code: "Code: 96513",
   },
   {
     // 2.4
     source: "comb51.jpg",
     description: "Comb",
     code: "Code: 96284",
   },
   {
     // 2.5
     source: "comb52.jpg",
     description: "Comb",
     code: "Code: 96593",
   },
   {
     // 2.6
     source: "comb53.jpg",
     description: "Comb",
     code: "Code: 96535",
   },
   {
     // 2.7
     source: "comb54.jpg",
     description: "Comb",
     code: "Code: 94404",
   },
   {
     // 2.8
     source: "comb55.jpg",
     description: "Comb",
     code: "Code: 94518",
   },
   {
     // 2.9
     source: "comb56.jpg",
     description: "Comb",
     code: "Code: 94170",
   },
   // page 7: 18 -> 26
   {
     // 3.1
     source: "comb57.jpg",
     description: "Comb",
     code: "Code: 96084",
   },
   {
     // 3.2
     source: "comb58.jpg",
     description: "Comb",
     code: "Code: 94766",
   },
   {
     // 3.3
     source: "comb59.jpg",
     description: "Comb",
     code: "Code: 93042",
   },
   {
     // 3.4
     source: "comb60.jpg",
     description: "Comb",
     code: "Code: 94385",
   },
   {
     // 3.5
     source: "comb61.jpg",
     description: "Comb",
     code: "Code: 92601",
   },
   {
     // 3.6
     source: "comb62.jpg",
     description: "Comb",
     code: "Code: 92706",
   },
   {
     // 3.7
     source: "comb63.jpg",
     description: "Comb",
     code: "Code: 96536",
   },
   {
     // 3.8
     source: "comb64.jpg",
     description: "Comb",
     code: "Code: 96327",
   },
   {
     // 3.9
     source: "comb65.jpg",
     description: "Comb",
     code: "Code: 96427",
   },
   // page 8: 27 -> 30
   {
     // 4.1
     source: "comb66.jpg",
     description: "Comb",
     code: "Code: 96391",
   },
   {
     // 4.2
     source: "comb67.jpg",
     description: "Comb",
     code: "Code: 94707",
   },
   {
     // 4.3
     source: "comb68.jpg",
     description: "Comb",
     code: "Code: 96545",
   },
   {
     // 4.4
     source: "comb69.jpg",
     description: "Comb",
     code: "Code: 93995",
   },
 ];
const imageDirectory = {
  crown: "crowns",
  headband: "headband",
  haircomb: "hair comb",
  flower: "flowers",
  glass: "decorated glasses",
  bracelet: "bracelet",
  rita: "rita-mode"
};
function createItems() {
  let checker = document.querySelector("input");
  let category = checker.id;
  let pageNum = parseInt(checker.value);
  let items;
  switch (category) {
    case "crown":
      items = crowns;
      break;
    case "headband":
      items = headbands;
      break;
    case "haircomb":
      items = haircombs;
      break;
    case "flower":
      items = flowers;
      break;
    case "glass":
      items = glasses;
      break;
    case "bracelet":
      items = bracelets;
      break;
    default:
      items = rita;
  }
  let len = items.length < 9 ? items.length : 9 * pageNum;
  if (items.length < 9 * pageNum) len = items.length;

  let start = 9 * (pageNum - 1);
  let container = document.querySelector(".proCatalog");

  for (let i = start; i < len; i++) {
    let catItem = document.createElement("article");
    catItem.className = "catImg";

    let link1 = document.createElement("a");
    let image = document.createElement("img");
    image.src =
      "./homePage/images/" +
      imageDirectory[category] +
      "/" +
      items[i]["source"];
    link1.appendChild(image);

    let subContainer = document.createElement("div");
    subContainer.className = "containInfo";

    let leftCon = document.createElement("div");
    leftCon.innerHTML =
      "<span>" +
      items[i]["description"] +
      "</span><br/>" +
      "<span>" +
      items[i]["code"] +
      "</span>";

    let rightCon = document.createElement("div");
    rightCon.appendChild(createBuyButton());
    subContainer.appendChild(leftCon);
    subContainer.appendChild(rightCon);

    catItem.appendChild(link1);
    catItem.appendChild(subContainer);
    container.appendChild(catItem);
  }
}

// BUY button
function createBuyButton() {
  let button = document.createElement("button");
  button.id = "catDropdown";

  let ico = document.createElement("i");
  ico.className = "fa-solid fa-chevron-down";
  button.appendChild(ico);
  button.innerHTML += "شراء";

  let menu = document.createElement("div");
  menu.id = "catDropdown-content";

  let link1 = document.createElement("a");
  link1.href = whatsapp;
  link1.innerHTML = "<i class='fa-brands fa-square-whatsapp'></i>Whats";
  menu.appendChild(link1);

  let link2 = document.createElement("a");
  link2.href = instagram;
  link2.innerHTML = '<i class="fa-brands fa-instagram"></i>Insta';
  menu.appendChild(link2);
  button.appendChild(menu);

  return button;
}
