const left = document.querySelector("#rond");
const slideb = document.querySelector("#slideB");
const before = document.querySelector("#before");
const avant = document.querySelector("#avant");
const apres = document.querySelector("#apres");
const mire = document.querySelector(".mire");
const mire2 = document.querySelector(".mire2");
const anim = document. querySelector(".animation")


let valopacity = 0;
let positionClic = 0,
    posGlissade =0
    glissmemo = 0;

    let positionClicB = 0,
    posGlissadeB =0
    glissmemoB = 0;

avant.addEventListener("click", function ()
{
    valopacity = 500;
    before.style.opacity = valopacity/500 ;
    left.style.left = 500-valopacity + "px";
    mire.style.opacity = valopacity/500;
    mire2.style.opacity = valopacity/500;
    before.style.width = 960 + "px";
});

apres.addEventListener("click", function ()
{

    valopacity = 0;
    mire.style.opacity = valopacity/500;
    mire2.style.opacity = valopacity/500;
    before.style.opacity = valopacity/500 ;
    before.style.width = 960 + "px";
    left.style.left = 500-valopacity + "px";
});



left.addEventListener("mousedown",dragRond);

function dragRond(e) {
    e.preventDefault();
    positionClic = e.clientX;
    document.addEventListener("mousemove", moverond);
    document.addEventListener("pointerup", finDuDrag);
    console.log(positionClic);
    console.log(glissmemo);
    
}

function  moverond(e) {
    posGlissade =  glissmemo + (e.clientX - positionClic);
    left.style.left =  posGlissade +"px";
    before.style.opacity = 1 - (posGlissade /500);
    mire.style.opacity = 1 - (posGlissade /500);
    mire2.style.opacity = 1 - (posGlissade /500);
    if (posGlissade < 16 ){
        posGlissade = 16;
        left.style.left =  posGlissade +"px";
        before.style.opacity = 1 - (posGlissade /500);
        mire.style.opacity = 1 - (posGlissade /500);
        mire2.style.opacity = 1 - (posGlissade /500);
    
    }

    if (posGlissade > 500){
        posGlissade =500;
        left.style.left =  posGlissade +"px";
        before.style.opacity = 1 - (posGlissade /500);
        mire.style.opacity = 1 - (posGlissade /500);
        mire2.style.opacity = 1 - (posGlissade /500);
    }
}

function finDuDrag(e) {
    document.removeEventListener("mousemove",moverond);
    glissmemo = posGlissade;

}

let departslide = 480;

slideb.addEventListener("mousedown", dragSlide);

function dragSlide(e) {
    console.log("hello");
    e.preventDefault();
    positionClicB = e.clientX;
    document.addEventListener("mousemove", moveSlide);
    document.addEventListener("pointerup", finDuslide);
    before.style.opacity = 1;
    mire.style.opacity = 1;
    mire2.style.opacity = 1;
    left.style.left = 0 + "px";
    anim.classList.remove("animation");


    
}

function moveSlide(e) {
    posGlissadeB =  glissmemoB + (e.clientX - positionClicB);
    before.style.width = departslide + posGlissadeB +"px";
}

function finDuslide(e){
    document.removeEventListener("mousemove", moveSlide);
    glissmemoB = posGlissadeB;
    anim.classList.add("animation");
     console.log(glissmemoB);
    
     if (glissmemoB < -480) {
        glissmemoB = -480;
        
     }

     if (glissmemoB > 480) {
        glissmemoB = 480;
        
     }
}


var videoAF = document.getElementById("videoAfter") ;
var videaoBef = document.getElementById("videoBefore");

var btn = document.getElementById("btnVideo");


function playAndPause () {

if (videaoBef.paused && videoAF.paused) {

videaoBef.play();
videoAF.play();

btn.innerHTML = "II";

} else {

videaoBef.pause();
videoAF.pause();

btn.innerHTML = "▶";

}



}