
/*Carrousel
var i = 1;
const nombre_slide = 3;

$(".fleche_tel_avant").click(function () {


        $("#projet" + i).css("display", "none");

        i = i + 1;

        if (i > nombre_slide) {
            i = 1;
        }

        $("#projet" + i).css("display", "flex");

});


$(".fleche_tel_arriere").click(function () {


    $("#projet" + i).css("display", "none");

    i = i -1;

    if (i < 1) {
        i = nombre_slide;
    }

    $("#projet" + i).css("display", "flex");
});

*/

//texte au survol



//menu burger

var sidenav = document.getElementById("deroulantBurger");

var openBtn = document.getElementById("burger");

var closeBtn = document.getElementById("close_burger");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Ouvrir le menu Burger */
function openNav() {
  sidenav.classList.add("active"), sidenav.classList.remove("close");
  console.log(openNav);
};

/* Fermer le menu burger */
function closeNav() {
  sidenav.classList.remove("active"), sidenav.classList.add("close");
  console.log(closeNav);
};


/*Fermer le menu burger quand on clique sur un lien vers les autre section*/

$("#deroulantBurger>div>a").click(function (){
  $(".sidenav").addClass("close").removeClass("active");
  console.log("coucou");
})







/****ANNIMATION CURSEUR****/

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});




/********AFFICHER DEPLIANT PROJET********/

$(".une_image").click(function () {
  $("section, .projet2, .projet3").css("display", "none");
  $(".projet1").css("display", "flex");
  $(".img_pj") .css("position", "absolute");
});

$(".image_deux").click(function () {
  $("section, .projet3, .projet1").css("display", "none");
  $(".projet2").css("display", "flex");
  $(".img_pj") .css("position", "absolute");
});

$(".image_trois").click(function () {
  $("section, .projet2, .projet1").css("display", "none");
  $(".projet3").css("display", "flex");
  $(".img_pj") .css("position", "absolute");
});


/*return button*/

$("#projet1").click(function () {
  $("section").css("display", "");
  $(".projet1") .css("display", "none");
  $(".img_pj") .css("position", "relative");
  
})

$("#projet2").click(function () {
  $("section").css("display", "");
  $(".projet2") .css("display", "none");
  $(".img_pj") .css("position", "relative");
  
})

$("#projet3").click(function () {
  $("section").css("display", "");
  $(".projet3") .css("display", "none");
  $(".img_pj") .css("position", "relative");
})


