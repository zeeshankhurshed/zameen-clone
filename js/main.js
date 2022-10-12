function show(){
    let adit = document.getElementById('adit')
  if (adit.style.transform == ('translateX(-300)'))  {
    adit.style.transform = ('translateX(0)');
    }else {
        adit.style.transform = ('translateX(-300)');
    }
  } 


  
  function upShow(){
    let boxUp= document.getElementById('boxUp')
    if (boxUp.style.display == 'none') {
        boxUp.style.display = 'block'
    }else{
        boxUp.style.display = 'none'
    }
  }
  function upHide(){
    let boxUp= document.getElementById('boxUp')
    boxUp.style.display = 'none'
  }

  function rentShow(){
    let boxRent= document.getElementById('boxRent')
    if (boxRent.style.display == 'none') {
        boxRent.style.display = 'block'
    }else{
        boxRent.style.display = 'none'
    }
  }
  function rentHide(){
    let boxRent= document.getElementById('boxRent')
    boxRent.style.display = 'none'
  }

  function locationShow(){
    let boxLocation= document.getElementById('boxLocation')
    if (boxLocation.style.display == 'none') {
        boxLocation.style.display = 'block'
    }else{
        boxLocation.style.display = 'none'
    }
  }
//   function locationHide(){
//     let boxRent= document.getElementById('boxRent')
//     boxRent.style.display = 'none'
//   }





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