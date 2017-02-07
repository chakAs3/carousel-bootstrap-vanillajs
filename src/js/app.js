var styles = require("../sass/app.scss");

const WHO = 'Vanilla JS ES6';
let greeter = (who) => 'Hello from ' + who + '!';

let loadJSON = () => {  getJSON('json/brokers.json');   };

let playing = true;
let duration = 10000 ;
let pauseButton ;// document.getElementById('pause');
let nextButton ;
let prevButton ;
let slides ;





document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.getElementById('app').appendChild(
      document.createTextNode(greeter(WHO))  // add greating Message
    );
    // load JSON Data from local file
    loadJSON();
    slides = [] ;//document.querySelectorAll('#carousel-inner .item');

    loadVanillaBootstrap();

    // init UI .

    pauseButton = document.getElementById('pause');
    nextButton = document.getElementById('next');
    prevButton = document.getElementById('prev');
    let currentSlide = 0;
    let slideInterval //setInterval(nextSlide,duration); // start carousel autoplay

  
  }

};

 // create carousel items
function createCarouselItem(list){
    for(let item in list){
      addItem( list[item],item==0 ?"active":"",item )
    }
}
// add Item to carousel
function addItem(data,active="",index){

  let item = document.createElement('div') // create DOM element
      item.className = "item "+active;

  let image = document.createElement('img');
  image.src = data.links.logo2x;
  image.alt = data.name ;
  //image.width = "460" ;
  //image.height = "345";

  let caption =   document.createElement('div');
  caption.className = "carousel-caption";
  caption.innerHTML ="<h3>"+data.name+"</h3><p>"+data.location+".</p><p class='label label-default'>"+data.phone+".</p>";


  item.appendChild(image);
  item.appendChild(caption);

  document.getElementById('carousel-inner').appendChild(
    item // add item to DOM Message
  );
  let indicator = document.createElement('li');
  indicator.setAttribute("data-target","#myCarousel");
  indicator.setAttribute("data-slide-to",index);
  indicator.className = active ;
  document.getElementById('carousel-indicators').appendChild(indicator);
}

// get data from JSON FILE
function getJSON(url) {
    'use strict';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
      let  brokerList =  JSON.parse(xhr.responseText) ;
          console.log( brokerList );
        createCarouselItem(brokerList.data);
        } else {
          console.log(xhr.responseText);
        }
      }
    };
    xhr.open('GET', url);
    xhr.send();
}


let loadVanillaBootstrap = () => {
  let my_awesome_script = document.createElement('script');
  my_awesome_script.setAttribute('src','json/myscript.js');
  document.body.appendChild(my_awesome_script);
}
