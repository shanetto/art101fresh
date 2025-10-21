let myCommutes = ["walking", "UCSC taps bus", "bcycle renting"];


let myFavouriteCommute = {
    path: "forest trail between ILC and Baskin",
    lengthInMinutes: 5,
    destinationClass: "art 101",
    bootsNeeded: true,
    friendsIWalkWith: ["Dani", "Aria"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[2] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: path - " + myFavouriteCommute.path + ", length in minutes - " + myFavouriteCommute.lengthInMinutes + ", a friend I walk with: " + myFavouriteCommute.friendsIWalkWith[0] + "</p>";
$("#output").html(megaSentence);
