$(document).ready(function() {
  console.log('jquery works');
  $.get("/foods").
    done(function(data) {
      var foods = JSON.parse(data);
      console.log(foods[0].name);
      foods.forEach(function(food) {
        var $food = $("<div class='food'>" + food.name + "</div>");
        $(".food-container").append($food);
      })
    })
})