$(document).ready(function() {

  // skill bar
  // http://codepen.io/kristenspencer/pen/alibf
  jQuery('#skills').viewportChecker({
      callbackFunction: function(elem, action){
        $('.python').css('width', '75%');
        $('.java').css('width', '25%');
        $('.php').css('width', '15%');
        $('.sql').css('width', '25%');
        $('.javascript').css('width', '40%');
        $('.nodejs').css('width', '10%');
        $('.html_css').css('width', '60%');

        $('.processing').css('width', '75%');
        $('.arduino').css('width', '20%');
        $('.unity').css('width', '40%');
        $('.maya').css('width', '15%');
        $('.autocad').css('width', '40%');
        $('.sketchup').css('width', '50%');
        $('.resolume').css('width', '30%');

        $('.photoshop').css('width', '80%');
        $('.illustrator').css('width', '80%');
      },
  });


  

});