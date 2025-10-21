
let environmentInfo = {
    location: "limbo",
    population: 2,
    residents: ["Norm", "Jorm"],
    waves: "raucous",
}

let norm = {
    heightInCM: "177",
    material: "metal",
    nature: "friendly",
};

let jorm = {
    size: "gargantuan",
    langauge: "jotun",
    ageInYears: 1200,
}

let normStats = "<p>Norm is " + norm.heightInCM + " cm tall, made of " + norm.material + " and is very " + norm.nature + ".</p>";

let jormStats = "<p>Jorm is a " + jorm.size + " giant who speaks " + jorm.langauge + " and is " + jorm.ageInYears + " years old.</p>";

let environmentspiel = "<p>This place is in: " + environmentInfo.location + ", has a population of " + environmentInfo.population + ", inhabited by " + environmentInfo.residents[0] + " and " + environmentInfo.residents[1] + ", and the waves are " + environmentInfo.waves + ".</p>";

$("#output").append(normStats);
$("#output").append(jormStats);
$("#envinf").append(environmentspiel);