var count = 0;  
var colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"]; 

function makeImage(imageName) {
    // Only add the image if current color matches image name
    if (colors[colorCount].toLowerCase() === imageName.toLowerCase()) {
        $("body").append("<img width='50' src='images/" + imageName + ".jpg'>");
    }
}

function changeBackground(newColor) {
    $("body").css("background-color", newColor);
}

$(".color-button").click(function () {
    changeBackground(this.id);
});


$("#needy-button").click(function () {  
    count++;

    let mood;
    if (count < 5) {
        mood = "fresh and happy";
    } else if (count < 10) {
        mood = "keep pushing";
    } else {
        mood = "so tired";
    }

    // Update button text
    $("#needy-button").html("Clicks: " + count + " | Color: " + colors[colorCount] + " | " + mood); 

    // Change background color
    changeBackground(colors[colorCount]);

    // Try to make the orchid image appear when color matches
    makeImage("orchid");
    makeImage("coral");
    // Cycle colors
    colorCount++;
    if (colorCount >= colors.length) {
        colorCount = 0;
    }
});
