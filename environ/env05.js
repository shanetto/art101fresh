/*
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
let environmentspiel = "<p>We are in: " + environmentInfo.location + ", inhabited by " + environmentInfo.residents[0] + " and " + environmentInfo.residents[1] + ".</p>";

$("#output").append(normStats);
$("#output").append(jormStats);
$("#envinf").append(environmentspiel);



function spawnPerson() {
    let person = $("<img>");
    person.attr("src", "person.png");
    person.addClass("falling-person");

    $("#fall-area").append(person);

    setTimeout(() => {
        person.remove();
    }, 1200);
}



function changeEnvironment(waveMood, populationChange) {

    if (waveMood) environmentInfo.waves = waveMood;
    if (populationChange) environmentInfo.population += populationChange;

    let updatedSpiel = "<p>We are in: " + environmentInfo.location +
        ", inhabited by " + environmentInfo.residents[0] +
        " and " + environmentInfo.residents[1] +
        ", the cauldron has a population of " + environmentInfo.population +
        ". The latest person is feeling " + environmentInfo.waves + ".</p>";

    $("#envinf").html(updatedSpiel);
}




$(document).ready(function () {
    $("#changeBtn").on("click", function () {
        spawnPerson();
        let moods = ["angry", "happy", "sad", "annoyed", "ecstatic", "melancholy", "furious", "content"];
        let randomMood = moods[Math.floor(Math.random() * moods.length)];
        changeEnvironment(randomMood, 1);
    });
});
*/


const environmentInfo = {
    location: "limbo",
    cauldronPop: 0,
    residents: ["Norm", "Jorm"],
    waves: "raucous",
};

const norm = {
    heightInCM: "177",
    material: "metal",
    nature: "friendly",
};

const jorm = {
    size: "gargantuan",
    language: "jotun",
    ageInYears: 1200,
};



function renderNorm() {
    return `
        <p>Norm is ${norm.heightInCM} cm tall, made of ${norm.material} and is very ${norm.nature}.</p>
    `;
}

function renderJorm() {
    return `
        <p>Jorm is a ${jorm.size} giant who speaks ${jorm.language} and is ${jorm.ageInYears} years old.</p>
    `;
}

function renderEnvironment() {
    return `
        <p>
            We are in: ${environmentInfo.location}, inhabited by 
            ${environmentInfo.residents.join(" and ")}. 
            The cauldron has a population of ${environmentInfo.cauldronPop}. 
            The latest person is feeling ${environmentInfo.waves}.
        </p>
    `;
}



function spawnPerson() {
    const person = $("<img>", {
        src: "person.png",
        class: "falling-person"
    });

    $("#fall-area").append(person);

    setTimeout(() => {
        person.remove()}, 1200);
}


function changeEnvironment(waveMood, populationChange = 0) {
    if (waveMood) environmentInfo.waves = waveMood;
    environmentInfo.cauldronPop += populationChange;

    $("#envinf").html(renderEnvironment());
}



$(document).ready(function () {

    $("#output").append(renderNorm());
    $("#output").append(renderJorm());
    $("#envinf").append(renderEnvironment());

    $("#changeBtn").on("click", function () {
        spawnPerson();

        const moods = [
            "angry", "happy", "sad", "annoyed", "ecstatic",
            "melancholy", "furious", "content", "joyful",
        ];
        const randomMood = moods[Math.floor(Math.random() * moods.length)];

        changeEnvironment(randomMood, 1);
    });
});
