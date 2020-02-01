$(".devourBtn").click(function(e){

    console.log("hello");

    var id = { id: $(this).data("id")}

    $.ajax({
        type: "POST",
        url: "/api/devour",
        data: id
        }   
    );
});