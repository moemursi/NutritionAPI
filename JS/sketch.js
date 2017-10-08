$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://api.nutritionix.com/v1_1/search" + "e91e3c9087ca956da4e3b4328985830a" + "530556bf",
        "appId":"530556bf",
        "appKey":"e91e3c9087ca956da4e3b4328985830a",
        "filters":{
          "not":{
            "item_type":2
    }
  }
    success: function(result){
      console.log(result);
    };
    });
});
