gsap.registerPlugin(ScrollTrigger);



/* =========================
HERO
========================= */


gsap.from(".hero-title", {

    y:80,

    opacity:0,

    scale:.96,

    duration:1.2,

    ease:"power4.out"

});




/* =========================
MANIFEST TITLE
RESIDENCE SOFT WORD REVEAL
========================= */


window.addEventListener("load", () => {


    const title = document.querySelector(".manifest-content h1");


    if (!title) return;



    document.querySelectorAll(".manifest-content .line").forEach(line => {


        const text = line.textContent.trim();


        line.innerHTML = "";



        text.split(" ").forEach((word,index,arr)=>{


            const wordWrap = document.createElement("span");


            wordWrap.className = "manifest-word";


            wordWrap.style.display = "inline-block";



            [...word].forEach(letter=>{


                const span = document.createElement("span");


                span.className="manifest-letter";


                span.textContent=letter;


                span.style.display="inline-block";


                wordWrap.appendChild(span);


            });



            line.appendChild(wordWrap);



            if(index !== arr.length-1){


                line.appendChild(
                    document.createTextNode(" ")
                );


            }


        });


    });




    gsap.set(".manifest-letter",{


        y:35,

        opacity:0,

        filter:"blur(2px)"


    });




    const tl = gsap.timeline({


        scrollTrigger:{


            trigger:".manifest-block",

            start:"top 65%",

            once:true


        }


    });




    document.querySelectorAll(".manifest-word").forEach(word=>{


        tl.to(word.querySelectorAll(".manifest-letter"),{


            y:0,

            opacity:1,

            filter:"blur(0px)",


            duration:.55,


            stagger:.008,


            ease:"power2.out"


        },"-=.32");


    });



});


/* =========================
CONTACT SLOGAN
ПРИШЕЛ. УСЛЫШАЛ. ЗАПИЛИЛ.
========================= */


gsap.from(".contact-block .slogan-line .word", {

    y:70,

    opacity:0,

    duration:.9,

    stagger:.25,

    ease:"power4.out",


    scrollTrigger:{

        trigger:".contact-block",

        start:"top 70%",

        once:true

    }

});










/* =========================
SYMBOLS REVEAL
========================= */


document.querySelectorAll(".symbol img").forEach((symbol)=>{


    gsap.set(symbol,{


        scale:.82,

        opacity:0,

        filter:"blur(8px)",

        y:30


    });



    gsap.to(symbol,{


        scale:1,

        opacity:1,

        filter:"blur(0px)",

        y:0,


        duration:1.2,


        ease:"power3.out",



        scrollTrigger:{


            trigger:symbol,


            start:"top 75%",


            once:true


        }


    });


});








/* =========================
CARD TEXT REVEAL
========================= */


document.querySelectorAll(".card-block").forEach((card)=>{


    const title = card.querySelector("h2");


    const text = card.querySelector(".text p");



    const tl = gsap.timeline({


        scrollTrigger:{


            trigger:card,


            start:"top 70%",


            once:true


        }


    });




    if(title){


        tl.from(title,{


            y:30,

            opacity:0,

            filter:"blur(3px)",


            duration:.7,


            ease:"power2.out"


        });


    }




    if(text){


        tl.from(text,{


            y:25,

            opacity:0,

            filter:"blur(2px)",


            duration:.8,


            ease:"power2.out"


        },"-=.45");


    }



});








/* =========================
HERO LETTER ANIMATION
========================= */


window.addEventListener("load",()=>{


const hero = document.querySelector(".hero-title");


if(!hero) return;



const walker = document.createTreeWalker(

    hero,

    NodeFilter.SHOW_TEXT

);



const textNodes=[];



while(walker.nextNode()){


    textNodes.push(walker.currentNode);


}




textNodes.forEach(node=>{


    const fragment=document.createDocumentFragment();



    [...node.textContent].forEach(char=>{


        if(char===" "){


            fragment.appendChild(
                document.createTextNode(" ")
            );


        }

        else{


            const wrap=document.createElement("span");


            wrap.className="hero-letter-wrap";



            const span=document.createElement("span");


            span.className="hero-letter";


            span.textContent=char;



            wrap.appendChild(span);


            fragment.appendChild(wrap);


        }


    });



    node.replaceWith(fragment);



});






gsap.set(".hero-letter",{


    yPercent:110


});






gsap.to(".hero-letter",{



    yPercent:0,


    duration:.9,


    stagger:.045,


    ease:"power4.out"


});



});

/* =========================
TEXT REVEAL
DESCRIPTION
WORKSHOPS
JAMS
MEETINGS
FINAL
KEEP HTML
========================= */

document.querySelectorAll(
".description-block p, .workshops-block p, .jams-block p, .meetings-block p, .final-text-block p"
).forEach(block=>{

    const walker = document.createTreeWalker(
        block,
        NodeFilter.SHOW_TEXT
    );

    const textNodes = [];

    while(walker.nextNode()){
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node=>{

        const words = node.textContent.split(/(\s+)/);

        const fragment = document.createDocumentFragment();

        words.forEach(word=>{

            if(word.trim()){

                const span = document.createElement("span");

                span.className = "description-word";

                span.textContent = word;

                span.style.display = "inline-block";

                fragment.appendChild(span);

            }else{

                fragment.appendChild(
                    document.createTextNode(word)
                );

            }

        });

        node.replaceWith(fragment);

    });

    const words = block.querySelectorAll(".description-word");

    gsap.set(words,{

        y:45,

        opacity:0,

        filter:"blur(2px)"

    });

    gsap.to(words,{

        y:0,

        opacity:1,

        filter:"blur(0px)",

        duration:.75,

        stagger:.025,

        ease:"power2.out",

        scrollTrigger:{

            trigger:block.closest(".stack-card"),

            start:"top 70%",

            once:true

        }

    });

});


/* =========================
GALLERY
========================= */


const galleryImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];


let galleryIndex = 0;


const galleryImg = document.getElementById("gallery-image");
const galleryMobile = document.getElementById("gallery-mobile");

const galleryNext = document.getElementById("gallery-next");
const galleryPrev = document.getElementById("gallery-prev");



function changeGallery(index){


    const file = galleryImages[index];


    if(!galleryImg || !galleryMobile) return;



    galleryImg.style.opacity = 0;



    setTimeout(()=>{


        galleryMobile.srcset = "";


        requestAnimationFrame(()=>{


            galleryMobile.srcset =
            "images/gallery/mobile/" + file;


            galleryImg.src =
            "images/gallery/" + file;



            galleryImg.onload = ()=>{

                galleryImg.style.opacity = 1;

            };


        });


    },300);


}




// =========================
// BUTTONS
// =========================


if(galleryNext){


    galleryNext.addEventListener("click",()=>{


        galleryIndex++;


        if(galleryIndex >= galleryImages.length){

            galleryIndex = 0;

        }


        changeGallery(galleryIndex);


    });


}




if(galleryPrev){


    galleryPrev.addEventListener("click",()=>{


        galleryIndex--;


        if(galleryIndex < 0){

            galleryIndex = galleryImages.length - 1;

        }


        changeGallery(galleryIndex);


    });


}
/* =========================
CONTACT BLOCK
========================= */


/* =========================
CONTACT SLOGAN
ПРИШЕЛ. УСЛЫШАЛ. ЗАПИЛИЛ.
========================= */

gsap.from(
    ".contact-block .slogan-line .word",
    {

        y:70,

        opacity:0,

        duration:.9,

        stagger:.25,

        ease:"power4.out",

        scrollTrigger:{

            trigger:".contact-block",

            start:"top 70%",

            once:true

        }

    }
);



/* =========================
MOBILE CONTACT
ПИЛИМ И ПИЛИМ — HIDE
========================= */

function initMobileContactLogoHide(){

    if(
        !window.matchMedia(
            "(max-width:768px)"
        ).matches
    ){

        return;

    }


    const contactBlock =
        document.querySelector(
            ".contact-block"
        );


    const contactLogo =
        document.querySelector(
            ".contact-end-logo"
        );


    if(
        !contactBlock ||
        !contactLogo
    ){

        return;

    }


    gsap.fromTo(

        contactLogo,

        {

            y:0,

            opacity:1

        },

        {

            y:-120,

            opacity:0,

            ease:"none",

            scrollTrigger:{

                trigger:
                    contactBlock,

                start:
                    "top top",

                end:
                    "top -35%",

                scrub:true

            }

        }

    );

}


initMobileContactLogoHide();



/* =========================
MOBILE FIXED LOGO
CONTACT POSITION
========================= */

const fixedLogo =
    document.querySelector(
        ".logo-fixed"
    );


const contactBlock =
    document.querySelector(
        ".contact-block"
    );


function updateMobileContactLogo(){

    if(
        !fixedLogo ||
        !contactBlock
    ){

        return;

    }


    /*

    Десктоп:

    логотип остаётся
    в обычной позиции.

    */

    if(
        !window.matchMedia(
            "(max-width:768px)"
        ).matches
    ){

        fixedLogo.classList.remove(
            "mobile-contact-position"
        );

        return;

    }


    const rect =
        contactBlock.getBoundingClientRect();


    /*

    Контактный блок находится
    в пределах экрана.

    */

    const isInsideContact =

        rect.top <=
        window.innerHeight &&

        rect.bottom >= 0;


    fixedLogo.classList.toggle(

        "mobile-contact-position",

        isInsideContact

    );

}


window.addEventListener(

    "scroll",

    updateMobileContactLogo,

    {passive:true}

);


window.addEventListener(

    "resize",

    updateMobileContactLogo

);


updateMobileContactLogo();
