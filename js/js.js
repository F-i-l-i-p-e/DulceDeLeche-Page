//set variable that gets ID="navbarID" from HTML
var navTransp = document.getElementById("navbarID");
//start function onscroll
window.onscroll = function() {
    //set if condition if scroll past 2px
  if (document.body.scrollTop >= 2 || document.documentElement.scrollTop >= 2) {
    //add class to navbarContainer class on html
    navTransp.classList.add("active");
  } else {
    //remove class from navbarContainer class on html
    navTransp.classList.remove("active");
  }
};
// add event listener
document.addEventListener("DOMContentLoaded", function() {
  //select IMG ID inside unordered list
  let gallery = document.querySelector("ul#IMG");
  //select "a" links on the list
  let links = gallery.getElementsByTagName("a");
  //set variable to run the "a" elements
  for (var i=0; i < links.length; i++) {
  links[i].onclick = function() {
      //get atributte of images
      let source = this.getAttribute("href");
      //change image href based on click
      let placeholder = document.getElementById("mainIMG");
      placeholder.setAttribute("src", source);
      let text = this.getAttribute("title");
      let description = document.getElementById("descriptionImg");
      description.firstChild.nodeValue = text;
      //stop link opening on another page after clicking so it open on the same page
      return false;
} 
}
});