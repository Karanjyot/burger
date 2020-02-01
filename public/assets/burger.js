
$(".devourBtn").click(function(e){

    // e.preventDefault();
    console.log("hello");

    var id = { id: $(this).data("id")}

    $.ajax({
        type: "POST",
        url: "/api/devour",
        data: id
        }   
    );
});