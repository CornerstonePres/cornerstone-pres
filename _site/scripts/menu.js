//define nodelist of main links
const nav_items = document.querySelectorAll('.menu_item .main');
const sub_items = document.querySelectorAll('.menu_item .sub');
const nav = document.querySelector(".nav");
const hamburger = document.querySelector('.hamburger');
//Node.childNodes
//apply menu-active class to main links on click
const navSlide = () => {
  for (const nav_item of nav_items){
    nav_item.addEventListener('click', () => {
      for (const nav_itemj of nav_items){
        if(nav_itemj.parentElement.parentElement.classList.contains('menu-active') && nav_itemj != nav_item){
          nav_itemj.parentElement.parentElement.classList.toggle('menu-active');
        }
      }
      nav_item.parentElement.parentElement.classList.toggle('menu-active');
    });
  }
  for(sub_item of sub_items){
    var item_children = sub_item.childNodes;
    for(item_child of item_children){
      item_child.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        hamburger.classList.toggle("is-active");
      });
    }
  }
}
navSlide();

//Remove links of main a tag on media query mobile.
var links = new Array();
const disableLink = (mq) => {
  if(mq.matches){
    for (const nav_item of nav_items){
      links.push(nav_item.parentElement.getAttribute("href"));
      nav_item.parentElement.removeAttribute("href");
    }
  }else if(links.length > 0){
    for (i=0; i < nav_items.length; i++){
      nav_items.item(i).parentElement.setAttribute("href", links[i]);
    }
    links = [];
  }
}
const mediaQuery = window.matchMedia( "(max-width: 1050px)" );
//call at run time
disableLink(mediaQuery);
mediaQuery.addListener(disableLink);


//hamburger menu
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
        nav.classList.toggle("nav-active");
      }, false);
    });
  }
