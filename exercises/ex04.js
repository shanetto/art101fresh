let count = 0;
let colorcount = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
let mood = ["fresh and happy", "keep pushing", "so tired"];
let moodindex = 0;
$("#needy-button").click(function() {

    let reminder = count % colors.length;

    $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorcount] + " Mood: " + mood[moodindex]);

    $("body").css("background-color", colors[colorcount]);

    count = count + 1;

    colorcount = colorcount + 1;

    if (colorcount == colors.length) {
        colorcount = 0;
    }
    if (count <= 4 ) {
        moodindex = 0;
    }
    else if (count > 4 && count <= 8) {
        moodindex = 1;
    }
    else {
        moodindex = 2;
    }
});