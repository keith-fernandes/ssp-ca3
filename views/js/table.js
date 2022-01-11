function draw_table(){
$("#results").empty();
$.getHTMLuncached = function(url){
    return $.ajax({
        url: url, 
        type: 'GET', 
        cache: false, 
        success: function(html){
            $("#results").append(html);
            select_row();
            }
        });
    };
$.getHTMLuncached("/get/html");
};

function append(){
    $.ajax({
        type: "POST",
        url: '/post/json',
        dataType: 'json',
        contentType: 'application/json',
        data: '{"sec_n": "' + $("#section").val() + '", "place":"' + $("#place").val() + '", "price":"' + $("#price").val() + '"}',
        async: false,
        success: setTimeout(draw_table, 1000)
    });
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

function delete_row(sec, ent){
    $("#delete").click(function()
    {
        $.ajax(
            {
                url: "/post/delete",
                type: "POST",
                dataType: 'json',
                contentType: 'application/json',
                data: '{"sec": "' + sec + '", "ent": "' + ent + '"}',
                cache: false,
                success: setTimeout(draw_table, 1000)
            }
        )
    })

};


$(function() {
    $("input[name='numonly']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

function onlynum() {
    var fm = document.getElementById("form2");
    var ip = document.getElementById("price");
    var tag = document.getElementById("value");
    var res = ip.value;

    if (res != '') {
        if (isNaN(res)) {
              
            // Set input value empty
            ip.value = "";
              
            // Reset the form
            fm.reset();
            return false;
        } else {
            return true
        }
    }
}

$(document).ready(function(){
    draw_table();
})