let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum", "LightSalmon", "LightSeaGreen", "MediumSlateBlue", "Tomato", "Turquoise", "YellowGreen", "Gold", "Crimson", "DarkOrange", "DeepSkyBlue", "LimeGreen", "Magenta", "Navy", "OliveDrab", "SaddleBrown", "Teal", "Violet", "Chocolate", "DarkCyan", "DarkGoldenRod", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrchid", "DarkSalmon", "DarkSeaGreen", "DarkTurquoise", "DeepPink", "ForestGreen", "Fuchsia", "IndianRed", "LightCoral", "LightPink", "LightSkyBlue", "LightSteelBlue", "MediumAquamarine", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumTurquoise", "MidnightBlue", "OrangeRed", "PaleVioletRed", "Peru", "RoyalBlue", "Sienna"];

$("#needy-button").click(function() {

    let reminder = count % colors.length;

    $("#needy-button").html("Clicks: " + count + " Color: " + colors[count]);

    $("body").css("background-color", colors[count]);

    count = count + 1;
});