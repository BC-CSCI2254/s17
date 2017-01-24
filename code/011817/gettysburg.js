/* file: gettysburg.js
   author: Bob Muller

   CS2254 Web App Development

   A first example.

   showIt : string -> void
   
   changes the background color of paragraph with class = "demo"
*/
function showIt(msg) {
  alert(msg);
  document.getElementById("demo").style.backgroundColor = "gainsboro";
}
