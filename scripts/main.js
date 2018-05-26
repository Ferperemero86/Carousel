 $(document).ready(function() {

    //<---Model--->

   var images = {
      currentImage:'images/01.jpg',
      imagesList:[
        {
        name:'first',
        source:'images/01.jpg'
        },
        {
        name:'second',
        source:'images/02.jpg'
        },
        {
        name:'third',
        source:'images/03.jpg'
        },
        {
        name:'fourth',
        source:'images/04.jpg'
        }

      ]
    };

   var carousel = [
     'images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg',
   ]

   //<---Content--->

   var content = {
      getImages: function() {
         return images.imagesList;
      },
      getImagesCarousel: function() {
         return carousel;
      },
      setCurrentImage: function(image) {
         images.currentImage = image;
      },
      getCurrentImage: function() {
         return images.currentImage;
      }
   };

   //<---View--->

   var pos=0;

   //Print the carousel array images

   $.each(carousel,function(index,value) {
      var img = document.createElement("IMG");
      $('#carousel').prepend(img);
      var parentElement = document.getElementById('carousel');
      parentElement.firstElementChild.src = value;
   });
  // Set and print the main Image to show

   var mainImage = document.createElement("IMG");
   $('#main').append(mainImage);
   var parentElement = document.getElementById('main');
   parentElement.lastElementChild.src = images.currentImage;


   $('.next').click(function(e) {
      e.preventDefault();

      var images = content.getImages();

     //When click Update the position of the images

     if(pos === images.length - 1) {
        pos = 0
     } else {
        pos++
     }

   //Set current Image

   var setImage = images[pos].source;
   content.setCurrentImage(setImage);
   var currentImage = content.getCurrentImage();
   var parentElement = document.getElementById('main');
   parentElement.lastElementChild.src = currentImage;

   //Create fade efect

   $('#main img').hide();
   $('#main img').fadeIn(500,"swing");

   //Remove and load new carousel

   $('#carousel img').remove();

   var carVal = carousel[0];
   carousel.shift();
   carousel.push(carVal)
   $.each(carousel,function(index,value) {

      var img = document.createElement("IMG");
      $('#carousel').prepend(img);
      var parentElement = document.getElementById('carousel');
      parentElement.firstElementChild.src = value;

   });

 });//End CLICK


 $('.before').click(function(e) {
    e.preventDefault();
    var images = content.getImages();

   //When click Update the position of the images

      pos--;
      if(pos === -1) {
       pos=3;
      }

   //Set current Image

   var setImage = images[pos].source;
   content.setCurrentImage(setImage);
   var currentImage = content.getCurrentImage();
   var parentElement = document.getElementById('main');
   parentElement.firstElementChild.src = images[pos].source;

   //Create fade effect
   $('#main img').hide();
   $('#main img').fadeIn(500,"swing");
   $('#carousel img').remove();

   //Remove and load new carousel
   var carVal = carousel[3];
   carousel.pop();
   carousel.unshift(carVal);

   $.each(carousel,function(index,value) {

      var img = document.createElement("IMG");
      $('#carousel').prepend(img);
      var parentElement = document.getElementById('carousel');
      parentElement.firstElementChild.src = value;
   });

  });//End click


 }); //End READY
