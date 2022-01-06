function draw_table(){
$("#results").empty();
$.getHTMLuncached = function(url){
    return $.ajax({
        url: url, 
        type: 'GET', 
        cache: false, 
        success: function(html){
            $("#results").append(html)
            select_row();
            }
        });
    };
$.getHTMLuncached("/get/html");
};

function select_row()
{
    $("#menuTravel tbody tr[id]").click(function ()
    {
        $(this).addClass("selected");
        var sec = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
        var ent = $(this).attr("id") - 1;
        delete_row(sec, ent);
    })

};    

    


$(document).ready(function(){
    draw_table();
})