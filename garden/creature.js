$("#add-creature").click(
    function(){

    let crName = $("#crName").val();
    if (crName === "") {
    } else {
    
    $("#creature-list").append(crName + ", ");
    }
    $("#crName").val("");
});