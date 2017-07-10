/**
 * @Author: Mathew Black <Mathew>
 * @Date:   2017-07-05T15:44:22-05:00
 * @Email:  mathew0057@gmail.com
 * @Filename: main.js
 * @Last modified by:   Mathew
 * @Last modified time: 2017-07-09T19:52:49-05:00
 */

 $(document).ready(function(){
   // Add smooth scrolling to all links
   $("a").on('click', function(event) {

     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // animate to the top of the element in 500ms
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 500, function(){

         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });
 });
