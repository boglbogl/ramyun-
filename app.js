// ======= Datos (14) =======
// bestSeller: true => etiqueta "Más vendido" y se ordena primero
const RAMYUNS = [
  { id:"sarigontang", 
    name:"Sarigontang", 
    type:"Caldo", 
    heat:0, 
    time:"4–5 min", 
    price:3990, 
    image:"saringomtang.jpg",
    ingredients:["Fideos de harina de trigo y almidón de patata","Base de caldo de res concentrada","Ajo","Cebolla","Pimiento"],
    allergens:["Trigo (gluten)","Soja","Trazas de lácteos o huevo"],
    desc:"Caldo suave con base de res y aromáticos.",
    bestSeller:false,
    

    
  },
  
  { id:"chapaguetti", 
    name:"Chapaguetti", 
    type:"Seco", 
    heat:0, 
    time:"5–6 min", 
    price:3990, 
    image:"chapaguetti.jpg",
    ingredients:["Fideos","Sopa en polvo (pasta de soja, caramelo, azúcar)","proteina de soja","Aceite de oliva sazonado","porotos","Verduras deshidratadas (soja, col, patata, cebolla, zanahoria)"],
    allergens:["Gluten (trigo)","Soja","Cacahuetes","Sésamo","Mostaza","Mariscos (gambas)","Huevo","Lactosa"],
    desc:"Jjajang estilo seco, sabor intenso y dulce-salado.",
    bestSeller:true
  },
  { id:"jin-jjajang",
     name:"Jin Jjajang", 
     type:"Seco",
      heat:0, 
      time:"5–6 min", 
      price:3990,
       image:"1600.webp",
    ingredients:["Harina de trigo","Aceite de palma","Pasta de soja negra fermentada","Caramelo","Verduras deshidratadas (repollo, cebolla, guisantes)","carne de res en polvo","Azúcar, sal y potenciadores"],
    allergens:["Soja","Trigo (gluten)","Lácteos","Huevos","Cacahuetes","Pescado","Apio","Mostaza","Moluscos","Crustáceos","Sésamo"],
    desc:"Salsa negra fermentada con verduras. Cero picante.",
    bestSeller:false
  },
  { id:"jin-chicken", 
    name:"Jin Ramen Chickens",
    type:"Caldo", 
    heat:0, 
    time:"4–5 min", 
    price:3990, 
    image:"1500.webp",
    ingredients:["Harina de trigo","Aceite de palma","Sal","Saborizante artificial de pollo","Soja","Vegetales deshidratados (zanahoria, cebollino)"],
    allergens:["Trigo (gluten)","Soja","Sésamo","Trazas: lácteos, huevo, cacahuetes, pescado, crustáceos y moluscos"],
    desc:"Caldo suave con perfil a pollo.",
    bestSeller:false
  },
  { id:"real-otoggui", 
    name:"Real Otoggui", 
    type:"Caldo",
     heat:0, 
     time:"4–5 min", 
     price:3990, 
     image:"queso.jpg",
    ingredients:["Fideos de harina de trigo","Sopa en polvo (sal, soja, ajo, pollo, pimiento rojo)","Polvo de queso cheddar/crema","Salsa de queso real","Mezcla de brócoli, zanahoria, repollo y pastel de pescado"],
    allergens:["Trigo (gluten)","Leche","Soja","Sésamo","Trazas: crustáceos, huevo, pescado, moluscos, mostaza y frutos secos"],
    desc:"Caldo con queso, más cremoso y suave.",
    bestSeller:false
  },
  { id:"jin-ramen", 
    name:"Jin Ramen", 
    type:"Caldo",
     heat:3, 
     time:"4–6 min", 
     price:3990, 
     image:"jin ramen picante.jpeg",
    ingredients:["Fideos de trigo (61%)","Caldo con especias (guindilla, ajo, cebolla, jengibre)","Proteínas vegetales (soja y trigo)","Verduras deshidratadas (zanahoria, shiitake, col china)"],
    allergens:["Trigo (gluten)","Soja","Trazas: lácteos, huevo, pescado, cacahuetes, apio, mostaza, moluscos, crustáceos y sésamo"],
    desc:"Caldo picante equilibrado, clásico para quienes quieren sabor fuerte.",
    bestSeller:false
  },
  { id:"jin-mild", 
    name:"Jin Mild", 
    type:"Caldo", 
    heat:1, 
    time:"4–6 min", 
    price:3990, 
    image:"480.webp",
    ingredients:["Harina de trigo","Almidón de patata","Aceite de palma","Salsa de soja","Ajo","Shiitake","Col","Extracto de hueso","Zanahoria","Algas"],
    allergens:["Trigo (gluten)","Soja","Trazas: lácteos, huevo, pescado, crustáceos, sésamo y apio"],
    desc:"Suave con un toque mínimo de picor.",
    bestSeller:false
  },
  { id:"shin-ramyun",
     name:"Shin Ramyun",
      type:"Caldo", 
      heat:4, 
      time:"4–6 min",
       price:3990, 
       image:"shin ramen.jpg",
    ingredients:["Fideos de trigo","Almidón de patata","Aceite de palma","carne de res","Condimentos (ajo, guindilla, pimienta)","Deshidratados (shiitake, zanahoria, pak-choi)"],
    allergens:["Trigo (gluten)","Soja","Frecuente: pescado/crustáceos/moluscos","Trazas: huevo, leche, cacahuetes, apio, sésamo y mostaza"],
    desc:"Picante fuerte en caldo, sabor profundo y muy popular.",
    bestSeller:true
  },
  { id:"buldak-rose", 
    name:"Buldak Rosé", 
    type:"Seco",
     heat:3, 
     time:"4–5 min",
      price:3990, 
      image:"buldak rose.jpg",
    ingredients:["Harina de trigo","Salsa de pollo picante","Crema","Queso","Toques tipo tocino","Pimentón y ajo"],
    allergens:["Gluten (trigo)","Soja","Leche"],
    desc:"Cremoso y picante medio, más suave que el original.",
    bestSeller:true
  },
  { id:"buldak-carbonara",
     name:"Buldak Carbonara", 
     type:"Seco", 
     heat:3, 
     time:"4–5 min",
      price:3990, 
      image:"buldak carbonara.jpg",
    ingredients:["Fideos de trigo","Salsa picante de pollo","Polvo cremoso","Quesos (según versión)"],
    allergens:["Trigo (gluten)","Soja","Leche"],
    desc:"Picante medio con perfil queso/cremoso.",
    bestSeller:true
  },
  { id:"buldak-4-quesos", 
    name:"Buldak 4 Quesos",
     type:"Seco",
      heat:3, 
      time:"4–5 min", 
      price:3990, 
      image:"buldak queso.jpg",
    ingredients:["Fideos de trigo","Salsa picante sabor pollo","Queso en polvo (mozzarella, cheddar, gouda, camembert)"],
    allergens:["Gluten (trigo)","Soja","Leche","Trazas: huevo, nueces, crustáceos y pescado"],
    desc:"Más cremoso y menos agresivo; muy quesoso.",
    bestSeller:false
  },
  { id:"buldak-negro", 
    name:"Buldak Negro",
     type:"Seco", 
     heat:4, 
     time:"4–5 min", 
     price:3990, 
     image:"download (2).jpeg",
    ingredients:["Harina de trigo","Aceite de palma","Salsa de soja","Chile en polvo","Ajo y cebolla"],
    allergens:["Trigo (gluten)","Soja"],
    desc:"Buldak clásico fuerte. Picante alto y sabor potente.",
    bestSeller:true
  },
  { id:"jin-veggie", 
    name:"Jin Veggui",
     type:"Caldo",
      heat:2, 
      time:"3–4 min", 
      price:3990,
       image:"ramen veggie.jpg",
    ingredients:["Fideos","Caldo vegano con mezcla de 10 vegetales (repollo, bok choy, zanahoria, etc.)"],
    allergens:["Trigo (gluten)","Soja"],
    desc:"100% vegano, caldo suave y sabroso.",
    bestSeller:false
  },
  { id:"chapagetti-picante", 
    name:"Chapagetti Picante", 
    type:"Seco", 
    heat:3, 
    time:"5–6 min", 
    price:3990, 
    image:"descarga (4).jpg",
    ingredients:["Fideos espesos de trigo","Salsa de soja negra","Aceite de oliva","Toque picante","Vegetales deshidratados"],
    allergens:["Trigo (gluten)","Soja","Sésamo","Cacahuete","Crustáceos"],
    desc:"Versión picante del jjajang seco: espeso y sabroso.",
    bestSeller:false
  }
];

// ===== Utils =====
const $ = (sel) => document.querySelector(sel);
function formatCLP(v){ return typeof v==="number" ? v.toLocaleString("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0}) : "—"; }
function heatColor(h){ if(h>=4) return "rgba(248,113,113,.95)"; if(h>=2) return "rgba(251,191,36,.95)"; return "rgba(52,211,153,.95)"; }

let selectedId = null;
let filterHeat = "all";  // all | hot | nohot
let filterType = "all";  // all | caldo | seco
let items = [...RAMYUNS];

// DOM list/search
const listEl = $("#list");
const searchEl = $("#search");

// chips heat
const fAll = $("#fAll"), fHot = $("#fHot"), fNoHot = $("#fNoHot");
// chips type
const tAll = $("#tAll"), tCaldo = $("#tCaldo"), tSeco = $("#tSeco");

// Net status
function updateNetStatus(){
  const dot = $("#netDot");
  const txt = $("#netText");
  const online = navigator.onLine;
  if (online){ dot.classList.remove("offline"); txt.textContent = "Online"; }
  else { dot.classList.add("offline"); txt.textContent = "Offline"; }
}

// Bottom sheet
const sheet = $("#sheet");
const sheetOverlay = $("#sheetOverlay");
const sheetClose = $("#sheetClose");

function isMobile(){ return window.matchMedia("(max-width: 960px)").matches; }
function openSheet(){
  sheet.classList.add("open");
  sheetOverlay.classList.add("open");
  sheetOverlay.setAttribute("aria-hidden","false");
}
function closeSheet(){
  sheet.classList.remove("open");
  sheetOverlay.classList.remove("open");
  sheetOverlay.setAttribute("aria-hidden","true");
}
sheetClose.addEventListener("click", closeSheet);
sheetOverlay.addEventListener("click", closeSheet);

// Desk detail refs
const emptyStateDesk = $("#emptyStateDesk");
const detailContentDesk = $("#detailContentDesk");
const detailImageDesk = $("#detailImageDesk");
const dNameDesk = $("#dNameDesk");
const dFlagsDesk = $("#dFlagsDesk");
const dPriceDesk = $("#dPriceDesk");
const dHeatDotDesk = $("#dHeatDotDesk");
const dHeatDesk = $("#dHeatDesk");
const dTypeDesk = $("#dTypeDesk");
const dTimeDesk = $("#dTimeDesk");
const dDescDesk = $("#dDescDesk");
const dIngredientsDesk = $("#dIngredientsDesk");
const dAllergensDesk = $("#dAllergensDesk");
const allergensBlockDesk = $("#allergensBlockDesk");

// Sheet refs
const sName = $("#sName");
const sFlags = $("#sFlags");
const sPrice = $("#sPrice");
const sImage = $("#sImage");
const sHeatDot = $("#sHeatDot");
const sHeat = $("#sHeat");
const sType = $("#sType");
const sTime = $("#sTime");
const sDesc = $("#sDesc");
const sIngredients = $("#sIngredients");
const sAllergens = $("#sAllergens");

function setHeat(mode){
  filterHeat = mode;
  fAll.setAttribute("aria-pressed", mode==="all");
  fHot.setAttribute("aria-pressed", mode==="hot");
  fNoHot.setAttribute("aria-pressed", mode==="nohot");
  applyFilters();
}
function setType(mode){
  filterType = mode;
  tAll.setAttribute("aria-pressed", mode==="all");
  tCaldo.setAttribute("aria-pressed", mode==="caldo");
  tSeco.setAttribute("aria-pressed", mode==="seco");
  applyFilters();
}

function applyFilters(){
  const term = (searchEl.value||"").trim().toLowerCase();

  items = RAMYUNS.filter(r => {
    const heatOk =
      filterHeat === "all" ? true :
      filterHeat === "hot" ? (r.heat > 0) :
      (r.heat === 0);
    if (!heatOk) return false;

    const typeOk =
      filterType === "all" ? true :
      filterType === "caldo" ? (r.type.toLowerCase() === "caldo") :
      (r.type.toLowerCase() === "seco");
    if (!typeOk) return false;

    if (!term) return true;

    const hay = [
      r.name, r.type, r.time,
      ...(r.ingredients||[]),
      ...(r.allergens||[]),
      r.desc
    ].join(" ").toLowerCase();

    return hay.includes(term);
  });

  // ✅ Más vendidos primero (siempre)
  items.sort((a,b) => (b.bestSeller === true) - (a.bestSeller === true) || a.name.localeCompare(b.name));

  renderList();

  // si el seleccionado se fue con el filtro
  if (selectedId && !items.some(x => x.id === selectedId)) {
    selectedId = null;
    if (!isMobile()) showEmptyDesk();
    closeSheet();
  }
}

function renderList(){
  listEl.innerHTML = "";

  if (items.length === 0){
    const div = document.createElement("div");
    div.className = "row";
    div.innerHTML = `<div class="info"><p class="name">Sin resultados</p><p class="sub">Prueba con otra búsqueda o filtro.</p></div>`;
    listEl.appendChild(div);
    return;
  }

  items.forEach(r => {
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("data-id", r.id);
    row.tabIndex = 0;

    const mini = document.createElement("div");
    mini.className = "mini";
    if (r.image){
      const img = document.createElement("img");
      img.alt = r.name;
      img.src = r.image;
      mini.appendChild(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.textContent = r.name.slice(0,4).toUpperCase();
      mini.appendChild(ph);
    }

    const info = document.createElement("div");
    info.className = "info";

    const name = document.createElement("p");
    name.className = "name";
    name.textContent = r.name;

    const sub = document.createElement("p");
    sub.className = "sub";
    sub.innerHTML = `
      <span class="pill">🌶️ ${r.heat}/5</span>
      <span class="pill">${r.type}</span>
      <span class="pill">💳 ${formatCLP(r.price)}</span>
      ${r.bestSeller ? `<span class="pill">⭐ Más vendido</span>` : ``}
    `;

    info.appendChild(name);
    info.appendChild(sub);

    row.appendChild(mini);
    row.appendChild(info);

    row.addEventListener("click", () => select(r.id));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(r.id); }
    });

    listEl.appendChild(row);
  });

  syncSelectedUI();
}

function syncSelectedUI(){
  listEl.querySelectorAll(".row").forEach(el => {
    el.classList.toggle("selected", el.getAttribute("data-id") === selectedId);
  });
}

function showEmptyDesk(){
  emptyStateDesk.classList.remove("hidden");
  detailContentDesk.classList.add("hidden");
}

function renderFlags(container, r){
  container.innerHTML = "";
  if (r.bestSeller){
    const f = document.createElement("span");
    f.className = "flag best";
    f.textContent = "⭐ Más vendido";
    container.appendChild(f);
  }
  // opcional: destacar MUY picante
  if (r.heat >= 4){
    const h = document.createElement("span");
    h.className = "flag hot";
    h.textContent = "🔥 Picante";
    container.appendChild(h);
  }
}

function fillDetail(r, refs){
  refs.imgBox.innerHTML = "";
  if (r.image){
    const img = document.createElement("img");
    img.alt = r.name;
    img.src = r.image;
    refs.imgBox.appendChild(img);
  } else {
    const ph = document.createElement("div");
    ph.className = "ph";
    ph.textContent = "Sin foto";
    refs.imgBox.appendChild(ph);
  }

  refs.name.textContent = r.name;
  refs.price.textContent = formatCLP(r.price);
  renderFlags(refs.flags, r);

  refs.heatDot.style.background = heatColor(r.heat);
  refs.heat.textContent = `Picor: ${r.heat}/5`;
  refs.type.textContent = `Tipo: ${r.type || "—"}`;
  refs.time.textContent = `Tiempo: ${r.time || "—"}`;
  refs.desc.textContent = r.desc || "—";

  refs.ingredientsList.innerHTML = "";
  (r.ingredients||[]).forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    refs.ingredientsList.appendChild(li);
  });
  if (!r.ingredients || r.ingredients.length === 0) refs.ingredientsList.innerHTML = "<li>—</li>";

  refs.allergensBox.innerHTML = "";
  (r.allergens||[]).forEach(a => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = a;
    refs.allergensBox.appendChild(tag);
  });
  if (!r.allergens || r.allergens.length === 0){
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = "—";
    refs.allergensBox.appendChild(tag);
  }
}

function select(id){
  const r = RAMYUNS.find(x => x.id === id);
  if (!r) return;

  selectedId = id;
  syncSelectedUI();

  if (isMobile()){
    fillDetail(r, {
      imgBox: sImage, name: sName, flags: sFlags, price: sPrice,
      heatDot: sHeatDot, heat: sHeat, type: sType, time: sTime, desc: sDesc,
      ingredientsList: sIngredients, allergensBox: sAllergens
    });
    openSheet();
    return;
  }

  emptyStateDesk.classList.add("hidden");
  detailContentDesk.classList.remove("hidden");

  fillDetail(r, {
    imgBox: detailImageDesk, name: dNameDesk, flags: dFlagsDesk, price: dPriceDesk,
    heatDot: dHeatDotDesk, heat: dHeatDesk, type: dTypeDesk, time: dTimeDesk, desc: dDescDesk,
    ingredientsList: dIngredientsDesk, allergensBox: dAllergensDesk
  });
}

function shuffle(){
  // reordenar la lista actual (manteniendo bestSeller arriba al volver a filtrar)
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  items = arr;
  renderList();
}

function init(){
  // inicial: ordenar más vendidos arriba
  items.sort((a,b) => (b.bestSeller === true) - (a.bestSeller === true) || a.name.localeCompare(b.name));
  renderList();
  showEmptyDesk();

  $("#shuffle").addEventListener("click", shuffle);
  searchEl.addEventListener("input", applyFilters);

  fAll.addEventListener("click", () => setHeat("all"));
  fHot.addEventListener("click", () => setHeat("hot"));
  fNoHot.addEventListener("click", () => setHeat("nohot"));

  tAll.addEventListener("click", () => setType("all"));
  tCaldo.addEventListener("click", () => setType("caldo"));
  tSeco.addEventListener("click", () => setType("seco"));

  updateNetStatus();
  window.addEventListener("online", updateNetStatus);
  window.addEventListener("offline", updateNetStatus);

  window.addEventListener("resize", () => {
    if (!isMobile()) closeSheet();
  });
}

init();
