const navSlide = () => {
  const nav_items = document.querySelectorAll('.menu_item .main');
  for (const nav_item of nav_items){
    nav_item.addEventListener('click', () => {
      for (const nav_itemj of nav_items){
        if(nav_itemj.parentElement.classList.contains('menu-active') && nav_itemj != nav_item){
          nav_itemj.parentElement.classList.toggle('menu-active');
        }
      }
      nav_item.parentElement.classList.toggle('menu-active');
    });

  }
}

navSlide();



var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".hamburger");
  var nav = document.querySelector(".nav");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
        nav.classList.toggle("nav-active");
      }, false);
    });
  }
