window.onload = showIdea1();

/*---------------------- change background color ----------------------*/
/* changes the background color of the main part of the "your turn" page*/
var color =["#ff0000", "#ffa500", "#ffff00", "#90ee90", "#008000", "#40e0d0","#0000ff","#dda0dd","#ffb6c1" ,"#ffffff"];
var i = 0;
document.getElementById("switch").addEventListener("click", function(){
  i = 1 < color.length ? ++i : 0;
  document.querySelector("main").style.background = color[i]
})

/*---------------------- make element dragable ----------------------*/
// Make the DIV element draggable:
dragElement(document.getElementById("moving-div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header of the element is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*---------------------- guessing game ----------------------*/
// random value generated 
var y = Math.floor(Math.random() * 10 + 1); 
      
// counting the number of guesses 
var guess = 1; 
  
document.getElementById("submitguess").onclick = function(){     
  // number guessed by user      
  var x = document.getElementById("guessField").value; 

  if(x == y) 
  {     
    alert("Congratulations! You guessed it right in" + guess + " guesses."); 
  } 
  else if(x > y) /* if guessed number is greater than actual number*/ 
  {     
    guess++; 
    alert("Here's a tip: try a smaller number."); 
  } 
  else
  { 
    guess++; 
    alert("Oops! Try a bigger number") 
  } 
}

/*---------------------- Make header sticky ----------------------*/
document.getElementsByClassName("header-button").onclick = function(){
  document.getElementsByClassName('header-container').position='sticky';
}

/* display the right part */
function showIdea1() {
  document.getElementById("idea1").style.display = "block";
  document.getElementById("idea2").style.display = "none";
  document.getElementById("idea3").style.display = "none";
  document.getElementById("idea4").style.display = "none";
  document.getElementById("idea5").style.display = "none";
}

function showIdea2() {
  document.getElementById("idea2").style.display = "block";
  document.getElementById("idea1").style.display = "none";
  document.getElementById("idea3").style.display = "none";
  document.getElementById("idea4").style.display = "none";
  document.getElementById("idea5").style.display = "none";
}

function showIdea3() {
  document.getElementById("idea3").style.display = "block";
  document.getElementById("idea1").style.display = "none";
  document.getElementById("idea2").style.display = "none";
  document.getElementById("idea4").style.display = "none";
  document.getElementById("idea5").style.display = "none";
}

function showIdea4() {
  document.getElementById("idea4").style.display = "block";
  document.getElementById("idea1").style.display = "none";
  document.getElementById("idea2").style.display = "none";
  document.getElementById("idea3").style.display = "none";
  document.getElementById("idea5").style.display = "none";
}

function showIdea5() {
  document.getElementById("idea5").style.display = "block";
  document.getElementById("idea1").style.display = "none";
  document.getElementById("idea2").style.display = "none";
  document.getElementById("idea3").style.display = "none";
  document.getElementById("idea4").style.display = "none";
}


/* idea 4 */
function ajouter() {
  var color = document.getElementById("choice-color").value;
  var shape = document.getElementById("choice-shape").value;
  var length = document.getElementById("choice-length").value;

  if (color == 0 || shape == 0 || length == 0) 
  {
      alert("Please enter correct information.");
  }
  else 
  {   
      var table = document.getElementById('table');
      table.insertAdjacentHTML("beforeend", "<tr><td>"+color+"</td><td>"+shape+"</td><td>"+length+"</td></tr>");
  }
}

function supprimer() {
  var table = document.getElementById('table');
  table.innerHTML = "";
}






