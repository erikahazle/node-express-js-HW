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

  $('#newFood').on('submit', function(e) {
    e.preventDefault();
    var $this = $(this);
    var formData = $this.serialize();
    $.post("/foods", formData).
      done(function(data) {
        console.log(data);
        var $food = $("<div class='food'>" + data.food.name + "</div>");
        $(".food-container").append($food);
        $('input').val('');
      });
  })
})