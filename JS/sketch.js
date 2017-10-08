// Here, I am building an object, which I can pass using a POST request to the api.
var apiObj = {
    "appId":"530556bf",
    "appKey":"e91e3c9087ca956da4e3b4328985830a",
    "filters":{
        "nf_protien":{
            "item_type":2
        }
    }
};

// Now I'm changing the type to POST, the contentType to application/json, and passing in our apiObj using the JSON.stringify() method, which will convert our object to valid JSON.
$(document).ready(function(){
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "https://api.nutritionix.com/v1_1/search",
        data: JSON.stringify(apiObj),
        success: function(result) {
            console.log(result);
        }
    });
});
