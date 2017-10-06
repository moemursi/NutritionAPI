$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://api.nutritionix.com/v1_1/search" + "e91e3c9087ca956da4e3b4328985830a" + "530556bf",
        success: function(result){
            console.log(result);
        }
    });
});
