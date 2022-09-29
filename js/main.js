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
                items:4
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