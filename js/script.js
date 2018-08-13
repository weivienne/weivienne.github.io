// Get the modal
var modal1 = document.getElementById('modal1');

var modal2 = document.getElementById('modal2');

var modal3 = document.getElementById('modal3');

var modal4 = document.getElementById('modal4');

// Get the button that opens the modal
var btn1 = document.getElementById("button1");

var btn2 = document.getElementById("button2");

var btn3 = document.getElementById("button3");

var btn4 = document.getElementById("button4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

var span2 = document.getElementsByClassName("close2")[0];

var span3 = document.getElementsByClassName("close3")[0];

var span4 = document.getElementsByClassName("close4")[0];
// When the user clicks on the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
} 

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        alert("outside clicked");
        modal1.style.display = "none";
    }
      if (event.target == modal2) {
        modal2.style.display = "none";
    }
      if (event.target == modal3) {
        modal3.style.display = "none";
    }
      if (event.target == modal4) {
        modal4.style.display = "none";
    }
}