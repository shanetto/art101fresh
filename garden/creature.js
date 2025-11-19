$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();
        let crEyesHTML="";

        for (let i = 0; i < crEyesNum ; i++){
            crEyesHTML=crEyesHTML + "<div class=eye>.</div>";
        }


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }

        else if (crName == "ppe") {
            alert("You found the purple people eater!");
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background: purple"><div class=eye>.</div></div>
    <div class="creature-info">purple people eater</div>
</div>
`);
        }

        else if (crName == "garbo") {
            alert("You found the garbage guy!");
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background: green"><div class=eye>.</div><div class=eye>.</div><div class=eye>.</div></div>
    <div class="creature-info">garbage guy</div>
</div>
`);
        }

        else {
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background: ${crColor}">${crEyesHTML}</div>
    <div class="creature-info">${crName}</div>
</div>
`);
        }

        // remove the name after it's added
        $("#crName").val("");

    });