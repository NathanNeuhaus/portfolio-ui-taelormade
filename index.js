var IMAGE_COUNT = 6;
var GALLERY_ON = false;
var CURRENT_TESTIMONIAL = 0;
var TESTIMONIALS = [0, 1, 2, 3 ];
var IS_TEST_1 = true;
var LOCK_TESTIMONIAL_CLICK  = false;
var LOCK_GALLERY_CLICK      = false;
var LOCK_GALLERY_TRAVERSE   = false;
var IMAGE_FOLDER = "photos/";
var IMAGES = [];
var IMAGE_PAGE = 0;

turnOffSections();

var PHOTOS = [
  "photo-1.jpg",  "photo-2.jpg",  "photo-3.jpg",  "photo-4.jpg",
  "photo-5.jpg",  "photo-6.jpg",  "photo-7.jpg",  "photo-8.jpg",
  "photo-9.jpg",  "photo-10.jpg", "photo-11.jpg", "photo-12.jpg",
  "photo-13.jpg", "photo-14.jpg", "photo-15.jpg", "photo-16.jpg",
  "photo-17.jpg", "photo-18.jpg", "photo-19.jpg", "photo-20.jpg",
  "photo-21.jpg", "photo-22.jpg"
];


var THUMBS = [
  "photo-1-th.jpg",  "photo-2-th.jpg",  "photo-3-th.jpg",  "photo-4-th.jpg",
  "photo-5-th.jpg",  "photo-6-th.jpg",  "photo-7-th.jpg",  "photo-8-th.jpg",
  "photo-9-th.jpg",  "photo-10-th.jpg", "photo-11-th.jpg", "photo-12-th.jpg",
  "photo-13-th.jpg", "photo-14-th.jpg", "photo-15-th.jpg", "photo-16-th.jpg",
  "photo-17-th.jpg", "photo-18-th.jpg", "photo-19-th.jpg", "photo-20-th.jpg",
  "photo-21-th.jpg", "photo-22-th.jpg"
];


function turnOffSections(){
  var footer    = document.getElementById("footer");
  var whatwedo  = document.getElementById("mid-section-3");
  
  var sections = [
      footer,
      whatwedo
  ];
  
  for( var i = 0 ; i < sections.length; i++ ){
      sections[i].style.display = "none";
  }
  
}
function lockFunctionGallery(){
    var time = 400;
    LOCK_GALLERY_CLICK = true;
    window.setTimeout(function() {
        LOCK_GALLERY_CLICK = false;
    }, time);
}

function lockFunctionGalleryTraversal( time  ){
  LOCK_GALLERY_TRAVERSE = true;
    window.setTimeout(function() {
        LOCK_GALLERY_TRAVERSE = false;
    }, time);
}




function lockFunctionTestimonial(){
    var time = 400;
    LOCK_TESTIMONIAL_CLICK = true;
    window.setTimeout(function() {
        LOCK_TESTIMONIAL_CLICK = false;
    }, time);
}

function testimonialClick( index, parent  ){
  var active_viz = document.getElementById( "bubble-on" ); 
  parent.appendChild( active_viz ); 
  
  
  var clicked = index;
  var current = CURRENT_TESTIMONIAL;
  var last = TESTIMONIALS.length - 1;
  var move;
  if( clicked === current ) return;
  if( LOCK_TESTIMONIAL_CLICK === true ) return;
  lockFunctionTestimonial();
   
   

  
  // record click
  CURRENT_TESTIMONIAL = clicked;
  
  // DETERMINE DIRECTION
  if( clicked > current )
      move = 1;
  else
      move = 0;
  
  // determine TYPE
  var type_1 = true;
  if( !IS_TEST_1 )
      type_1 = false;
      
      

  var el1 = document.getElementById("testimonial-1");
  var el2 = document.getElementById("testimonial-2");
  if( move === 1 && type_1 ){
      moveX2( el1, 0, 700, 40, 2 );
      fadeOut( el1, 200 ); 
      
      el2.style.left = "-700px";
      el2.style.opacity = "1";
      moveX2( el2, -700, 0, 40, 2 );
      
      IS_TEST_1 = !IS_TEST_1;
  }
  else 
  if( move === 1 && !type_1 ){
    el1.style.left = "-700px";
    el1.style.opacity = "1";
    moveX2( el1, -700, 0, 40, 2 );
    
    moveX2( el2, 0, 700, 40, 2 );
    fadeOut( el2, 200 ); 
    
    IS_TEST_1 = !IS_TEST_1;
  }
  else
  if( move === 0 && !type_1 ){
    
    el1.style.left = "700px";
    el1.style.opacity = "1";
    moveX2( el1, 700, 0, -40, 2 );
    
    
    moveX2( el2, 0, -700, -40, 2 );
    fadeOut( el2, 200 ); 
    IS_TEST_1 = !IS_TEST_1;
    
  }
  else
  if( move === 0 && type_1 ){
    
    el2.style.left = "700px";
    el2.style.opacity = "1";
    moveX2( el2, 700, 0, -40, 2 );
    
    
    moveX2( el1, 0, -700, -40, 2 );
    fadeOut( el1, 200 ); 
    IS_TEST_1 = !IS_TEST_1;
    
  }
 
 
 
 
}
function closeImage(){
      var parent = document.getElementById( "visual-2" ); 
          parent.style.position = "absolute";
          
      var el  = document.getElementById("notif");    
          el.style.display = "none";
      
          dimscreen( false );
  
}



function loadGallery(){
    
    // parent 
    var parent = document.getElementById( "visual-2" ); 
    var folder = "photos/"
    var limit = 6;
    var pages = Math.ceil(PHOTOS.length / 6);
    IMAGE_PAGE = 0;
    
    console.log( "total pages: "  + pages ); 
    console.log( "current page: " + IMAGE_PAGE ); 
    
  
    // make sure the number of images required are created
    var diff = IMAGE_COUNT - IMAGES.length;
    var el;
    for(var i = 0 ; i < diff; i++ ){
        el = makeImageThumb();
        IMAGES.push( el ); 
        el.style.opacity = "0";
        parent.appendChild( el );
    }
    
    var strt_delay    = 1000;
    var fade_duration = 200;
    fadeGalleryIn( strt_delay, fade_duration );
    
    function makeImageThumb(){
        var el = document.createElement( "div" );
            el.className = "image-thumb";
            
            
        
        return el;
    }
  
}

function onLoad(){
  console.log("loaded js"); 
  intro();
}

function turnGalleyOff(){
    var el  = document.getElementById( "transition-swipe-down" ); 
    var el2 = document.getElementById( "visual-2" ); 
    var screen1 = document.getElementById( "visual-1" ); 
    var section2 = document.getElementById( "section-2" );
    
      GALLERY_ON = false;
      fadeOut( el ); 
      setStyleAtTime( el, "top", "-550px", 600 );
      setStyleAtTime( el, "opacity", "1.0", 600 );
      setStyleAtTime( el2, "display", "none", 0 );
      
      screen1.style.display = "block";
      section2.style.display = "block";
}

function homeclick(){
  if(GALLERY_ON){
      turnGalleyOff();
  }
}

function transition(){
  
  if( LOCK_GALLERY_CLICK === true ) return;
  lockFunctionGallery();
  
  
  var el  = document.getElementById( "transition-swipe-down" ); 
  var el2 = document.getElementById( "visual-2" ); 
  var screen1 = document.getElementById( "visual-1" ); 
  var section2 = document.getElementById( "section-2" );
  
  if(!GALLERY_ON){
      moveY( el, -600, 50, 50, 2  );
      fadeIn( el ); 
      setStyleAtTime( el2, "display", "block", 250 );
      GALLERY_ON = true;
      loadGallery();
      
      setStyleAtTime( screen1, "display", "none", 250 );
      setStyleAtTime( section2, "display", "none", 250 );
      
 
  }
  else{
      turnGalleyOff();

  }
  
}

function intro(){
  
  var ids = [
    "visual-1-img-1",
    "visual-1-img-2",
    "visual-1-img-3",
    "visual-1-img-4"
  ]
  
  var el1 = document.getElementById( "visual-1-img-1" ); 
      el1.style.left = "-400px";
      el1.style.opacity = "0";
      moveX2( el1, -400, 0, 20, 2 );
      fadeIn( el1, 0 );
  
  
  var el2 = document.getElementById( "visual-1-img-2" ); 
      el2.style.left = "-400px";
      el2.style.opacity = "0";
      moveX2( el2, -400, 200, 30, 2, 300 );
      fadeIn( el2, 300 );
      
      
  var el3 = document.getElementById( "visual-1-img-3" ); 
      el3.style.left = "-400px";
      el3.style.opacity = "0";
      moveX2( el3, -400, 400, 40, 2, 600 );
      fadeIn( el3, 600 );
      
  var el4 = document.getElementById( "visual-1-img-4" ); 
      el4.style.left = "-400px";
      el4.style.opacity = "0";
      moveX2( el4, -400, 600, 55, 2, 900 );
      fadeIn( el4, 900 );
  
}

function moveX2( el, from, to, by, dur, delay ){
  
    if(delay === undefined ) delay = 0
    window.setTimeout(function() {
         
         callbackCreate( el, "left", from, to, by, dur, "px"); 
         
    }, delay);
      
}


function callbackCreate( el, styl, start, end, inc, dur, unit ){
  var times   = [];
  var values  = [];
  var fcns    = [];
  
  if( unit === undefined ) unit = "";
  
  var ob = {}
      ob.styl = undefined;
      ob.tims = [];
      ob.vals = [];
      ob.fcns = [];
  
  var len = Math.ceil((end - start) / inc);
  
  for(var i = 0 ; i < len; i++ ){
    ob.tims.push( i * dur ); 
    ob.vals.push( start + ( i * inc ) ); 
    ob.fcns.push(function( val ){
      el.style[styl] = val + unit;
      //console.log( val ); 
    });
  }
  
    ob.tims.push( len * dur ); 
    ob.vals.push( end ); 
    ob.fcns.push(function( val ){
      el.style[styl] = val + unit;
      //console.log( val ); 
    });
  
  
  callback( ob ); 
}

function callback( ob ){
  // * fcns     - array of functions to be run at the corresponding index in the time array
  // * times    - start times for corresponding function indices - times scale: 1000 equals 1 second, 1 equals a millisecond
  // * example  - callback([fnc1, fnc2], [time1 = 200, time2 = 700]); 
   var fcns = ob.fcns;
   var times = ob.tims;
   if (fcns.length <= 0)
        return;
    (function chain(i) {
        if (i >= fcns.length || typeof fcns[i] !== 'function')
            return;
        window.setTimeout(function() {
            fcns[i]( ob.vals[i] );
            chain(i + 1);
        }, times[i]);
    })(0);
  }
  
  function fadeIn( ele, delay ){

        window.setTimeout(function() {
            callbackCreate( ele, "opacity", 0.0, 1.0, 0.2, 10 );
        }, delay);
}

function moveY( el, from, to, by, dur, unit ){
  if( unit === undefined ) unit = "px";
  callbackCreate( el, "top", from, to, by, dur, unit ); 
  // el, styl, start, end, inc, dur, unit
}

function fadeOut( ele, delay ){
    if( delay === undefined ) delay = 0;
    window.setTimeout(function() {
        callbackCreate( ele, "opacity", 1.0, 0.0, -0.2, 10 );
    }, delay);
}

function setStyleAtTime( el, style, val, time ){
  window.setTimeout(function() {
      el.style[style] = val;
  }, time );
}


function dimscreen( bool, delay ){
  var loginbox  = document.getElementById("blanket"); 
  if( delay === undefined ) delay = 0;
  window.setTimeout(function() {
    
    
      
      if( bool )
        loginbox.style.display = "block";
      else
        loginbox.style.display = "none";
    
    
    
    
  }, delay );

}

function dimAlertShow( delay ){
  var el  = document.getElementById("notif");
  
  if( delay === undefined ) delay = 0;
    window.setTimeout(function() {
        el.style.display = "block";
        moveY( el, -100, 100, 24, 2  );
    }, delay);
}

function prevPage(){
  var limit         = 6;
  var fade_duration = 200;
  var fade_in_delay = fade_duration * (limit + 1);
  var lock_duration = fade_in_delay + fade_duration * limit;
  if( LOCK_GALLERY_TRAVERSE === true ) return;
  lockFunctionGalleryTraversal( lock_duration );
  
  var pages         = Math.ceil(THUMBS.length / limit);
  if( IMAGE_PAGE === 0 ) IMAGE_PAGE = pages - 1;
  fadeGalleryOut( IMAGES, 0, fade_duration );
  fadeGalleryIn(  IMAGES, fade_in_delay , fade_duration );
}
function nextPage(){
  var limit         = 6;
  var fade_duration = 200;
  var fade_in_delay = fade_duration * (limit + 1);
  var lock_duration = fade_in_delay + fade_duration * limit;
  if( LOCK_GALLERY_TRAVERSE === true ) return;
  lockFunctionGalleryTraversal( lock_duration );
  
  var pages         = Math.ceil(THUMBS.length / limit);
  if( ++IMAGE_PAGE >= pages ) IMAGE_PAGE = 0;
  fadeGalleryOut( IMAGES, 0, fade_duration );
  fadeGalleryIn(  IMAGES, fade_in_delay , fade_duration );
}


function fadeGalleryOut( arrayOfDivs, delay, dur ){
  timeoutFucntion( delay , function(){
      
      for(var i = 0 ; i < arrayOfDivs.length; i++ ){
          el = arrayOfDivs[i];
          el.style.opacity = 1;
          fadeOut( el , dur * i );
      }
        
  });
}



function changeImageLargeView( inc ){


  var folder  = IMAGE_FOLDER;
  var el  = document.getElementById("notif");
  var currenetImg = el.style.backgroundImage;
  

  // remove active image
  el.style.backgroundImage = "";

  
  // enable loading icon
  enableLoadingIcon();


  //get next index - already the next because photos are not zero indexed
  var num = (currenetImg.replace(/\D/g,'')) * 1;
      
      // set to zero index
      num -= 1; 
      num += inc;
  if( num >= PHOTOS.length ) num = 0;
  if( num <= -1 ) num = PHOTOS.length - 1;

  //load next image in
  var el  = document.getElementById("notif");
      el.style.backgroundImage = "url(" + folder + PHOTOS[num] + ")";

  // enable loading icon
  disableLoadingIcon();

}

 function nextImageLargeView(){ changeImageLargeView(1); }

function prevImageLargeView(){ changeImageLargeView(-1); }

function disableLoadingIcon(){
    var ld  = document.getElementById("loading-image");
        ld.style.display = "none";
}

function enableLoadingIcon(){
    var ld  = document.getElementById("loading-image");
        ld.style.display = "block";
}


function fadeGalleryIn( array, delay, duration ){
// IMAGES           is a GLOBAL ARRAY of div elements
// IMAGE_FOLDER     is the globally defined image path
// IMAGE_PAGE       is a global field of the current page
// limit            is the limit of the number of images per page 

  var folder  = IMAGE_FOLDER;
  var limit   = 6;
  timeoutFucntion( delay , function(){
      
      var el;
      for(var i = 0 ; i < IMAGES.length; i++ ){
          el = IMAGES[i];
          fadeIn( el , duration * i );
          setImagePath( el, i );
    }
    
        
    });

    function setImagePath( e, i ){
      var index = (IMAGE_PAGE * limit) + i;
      var output = "url(" + folder + THUMBS[index] + ")";
      e.style.backgroundImage = output;

      e.onclick = function(){

          thumbnailClick();
          var ob = { i : index }

          var el  = document.getElementById("notif");
              el.style.backgroundImage = "url(" + folder + PHOTOS[index] + ")";
              el.style.backgroundSize = "calc( 100% - 10px )";
              el.style.backgroundPosition = "5px 0px";
              el.style.backgroundRepeat = "no-repeat";
              

          disableLoadingIcon();
      }
      
      console.log( output ); 
  }
}

function thumbnailClick( img ){
    dimscreen( true, 100 );
    dimAlertShow( 200 );
    
    var parent = document.getElementById( "visual-2" ); 
        parent.style.position = "fixed";
}

function timeoutFucntion( time, fcn ){
  window.setTimeout(function() {
         
        fcn();
         
    }, time);
  
}