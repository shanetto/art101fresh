let environmentInfo = {
    location: "limbo",
    population: 2,
    residents: ["Norm", "Jorm"],
    waves: "raucous",
};

let norm = {
    heightInCM: "177",
    material: "metal",
    nature: "friendly",
};

let jorm = {
    size: "gargantuan",
    language: "jotun",
    ageInYears: 1200,
};

let normStats = "<p>Norm is " + norm.heightInCM + " cm tall, made of " + norm.material + " and is very " + norm.nature + ".</p>";
let jormStats = "<p>Jorm is a " + jorm.size + " giant who speaks " + jorm.language + " and is " + jorm.ageInYears + " years old.</p>";
let environmentspiel = "<p>This place is in: " + environmentInfo.location + ", has a population of " + environmentInfo.population + ", inhabited by " + environmentInfo.residents[0] + " and " + environmentInfo.residents[1] + ", and the waves are " + environmentInfo.waves + ".</p>";

$("#output").append(normStats);
$("#output").append(jormStats);
$("#envinf").append(environmentspiel);

// 🌀 Function to change environment based on wave mood
function changeEnvironment(waveMood, populationChange, newLocation) {
    // Update environment data
    if (waveMood) environmentInfo.waves = waveMood;
    if (newLocation) environmentInfo.location = newLocation;
    if (populationChange) environmentInfo.population += populationChange;

    // Change visuals based on mood
    if (waveMood === "calm") {
        $("body").css({
            "background-color": "#87CEEB",
            "color": "#004466"
        });
        $("h1").text("The waves are calm... salty yet sweet.");
    } else if (waveMood === "stormy") {
        $("body").css({
            "background-color": "#8c0000ff",
            "color": "#ffffff"
        });
        $("h1").text("The waves crash like two armies colliding.");
    } else if (waveMood === "chaotic") {
        $("body").css({
            "background-color": "#5e0080",
            "color": "#ffcc00"
        });
        $("h1").text("The waves are chaotic, reality itself tearing at the seams");
    } else {
        $("body").css({
            "background-color": "",
            "color": ""
        });
        $("h1").text("You can hear the waves crashing... but not with earth...");
    }

    // Update text about the environment
    let updatedSpiel = "<p>This place is in: " + environmentInfo.location + ", has a population of " + environmentInfo.population + ", inhabited by " + environmentInfo.residents[0] + " and " + environmentInfo.residents[1] + ", and the waves are " + environmentInfo.waves + ".</p>";
    $("#envinf").html(updatedSpiel);
}

// 🧭 Button trigger
$(document).ready(function () {
    $("#changeBtn").on("click", function () {
        // Randomly choose a new wave mood for fun
        let moods = ["calm", "stormy", "chaotic"];
        let randomMood = moods[Math.floor(Math.random() * moods.length)];
        changeEnvironment(randomMood, 1, "The shifting sea");
    });
});
