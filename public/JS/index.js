
var apiObj = {
    "appId":"530556bf",
    "appKey":"e91e3c9087ca956da4e3b4328985830a",
    "fields": [
      "item_name",
      "brand_name",
      "nf_calories",
      "nf_sodium",
      "nf_protein",
      "item_type"
    ],
    "offset": 0,
    "limit": 50,
    "sort": {
      "field": "nf_calories",
      "order": "desc"
    },
    "min_score": 0.5,
    "query":"",
    "filters": {
      "not": {
        "item_type": 2
      },
      "nf_calories": {
        "from": 0,
        "to": 10000
      }
    }
  }

var emptyarr = [];

  $(document).ready(function(){
    $("#searchFoodButton").click(function(){
      apiObj.query = $("#searchFood").val()
       $.ajax({
           type: "POST",
           contentType: "application/json",
           url: "https://api.nutritionix.com/v1_1/search",
           data: JSON.stringify(apiObj),
           success: function(result) {
             emptyarr = result.hits.map(function(hit,index){
               return hit.fields;
             });
             console.log(Object.keys(emptyarr[0]));
          }
       });
    //   (6) ["item_name", "brand_name", "nf_calories", "nf_sodium", "nf_protein", "item_type"]

        emptyarr.map(function(value, index) {
          var html =
          "<tr>" +
            "<td>" + value.item_name + "</td>" +
            "<td>" + value.nf_protein   + "</td>" +
            "<td>" + value.nf_calories  + "</td>" +
          "</tr>";
          $('#results-table tr:last').after(html);
        });
        $("#results-table tr").click(function(){
          localStorage.fieldsData = $("fields").serializeArray();
        })
  });
 });
