$(document).ready(function(){
  $(".sh_about").hide();
  $(".sh_service").hide();
  $(".sh_events").hide();
  $(".sh_youth").hide();
  $(".sh_volenteer").hide();
  $(".sh_connect").hide();

  function subHover(menu){
    $("." + menu).hover(
      function(){
        $(".sh_" + menu).show();
        $("." + menu).css("color", "#EF4B4D");
      },
      function(){
        $(".sh_" + menu).hide();
        $("." + menu).css("color", "#373D72");
      }
    );
    $(".sh_" + menu).hover(
      function(){
        $(".sh_" + menu).show();
        $("." + menu).css("color", "#EF4B4D");
      },
      function(){
        $(".sh_" + menu).hide();
        $("." + menu).css("color", "#373D72");
      }
    );
  }

  subHover("about");
  subHover("service");
  subHover("events");
  subHover("youth");
  subHover("volenteer");
  subHover("connect");

  /*
  $("subHeader").each(
    $(".header div:nth child(" + i + "n)").hover(
      function(){
        $(this).show();
      },
      function(){
        $(this).hide();
      }
    );
  );
  */

});
