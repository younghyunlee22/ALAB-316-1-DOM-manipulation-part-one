const mainEl = document.querySelector("main");
//Use querySelector because there's no id and it is only one element.
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>Dom manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((ele) => {
  let menu = document.createElement("a");
  menu.setAttribute("href", ele.href);
  menu.innerHTML = ele.text;
  topMenuEl.append(menu);
});
