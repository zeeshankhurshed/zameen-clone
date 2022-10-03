function show(){
    let adit = document.getElementById('adit')
  if (adit.style.transform == ('translateX(0)'))  {
    adit.style.transform = ('translateX(-300)')
    }else {
        adit.style.transform = ('translateX(0)');
    }
  } 
  





$(document).ready(function(){
    var projects = $("#projects");
    var titanium = $("#titanium");
  

    projects.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autotimeout:1000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3.5
            }
        }
    })
    titanium.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autotimeout:3000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    })
});


$(document).ready(function(){

    var featured = $("#featured");
featured.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autotimeout:2000,
    dots:false,
    responsive:{
        0:{
            items:15
        },
        600:{
            items:15
        },
        1000:{
            items:15
        }
    }
})
});