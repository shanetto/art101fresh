

var count = 0;
var otherCount = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];
var currentC = document.querySelector("#currentC");

function makeImage (imageName) {

 if (colors[otherCount] == imageName) {
       $("body").append("<img width=50 src='images/" + imageName + ".png'>");
   }

}

function changeBackground (newColor) {
   $("body").css("background-color", newColor);
 }

$(".color-button").click( function () {
 
   changeBackground(this.id);

});
   

function moody (moodyCount){
   let mood="";
   if (moodyCount < 5) { mood = "gresh and happy"; }
   else if ((moodyCount >= 5) && (moodyCount < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }

   return mood;
}

// the button part
$("#needy-button").click(function () {

// move the mood deciding code outside as a seperate function and then call it from here, and use the result of the function for the button message
   let moodMessage=moody(count);

   $("#needy-button").html("Clicks: " + count + " image: " + colors[otherCount] + " " + moodMessage);


   makeImage("Coral"); 
   makeImage("Orchid"); 
   makeImage("HotPink");
   makeImage("Plum"); 


   count = count + 1;
   otherCount = otherCount + 1;

   if (otherCount >= colors.length) {
       otherCount = 0;
   }

});

// the automatic part
setInterval(function() {

    changeBackground(colors[colorCount]);
    currentC.textContent = colors[colorCount];
    colorCount++;

    if (colorCount >= colors.length) {
        colorCount = 0;
    }


 

}, 500);
